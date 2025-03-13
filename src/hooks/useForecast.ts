import {ChangeEvent, useEffect, useState } from 'react'
import {optionType, forecastType} from "../types/types"

const useForecast = () => {
     
     const [input, setInput] = useState<string>('');
     const [options, setOptions] = useState<[]>([]);
     const [city, setCity] = useState<optionType | null>(null);
     const [forecast, setForecast] = useState<forecastType | null>(null)

     const getOptions = (value: string) => {

          const apiKey = import.meta.env.VITE_MY_API_KEY

          fetch(`https://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${apiKey}`)
               .then((res) => res.json())
               .then((data) => setOptions(data))
     }

     const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
          const value = e.target.value
          setInput(value)

          if (value === '') return;
          
          getOptions(value)
          
     }

     const getForecast = (city:optionType) => {
          fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${import.meta.env.VITE_MY_API_KEY}`)
               .then((res) => res.json())
               .then((data) => {
                    const forecastData = { 
                         ...data.city,
                         list: data.list.slice(0, 16)
                    }
                    setForecast(forecastData)
               })
     }
     const onSubmit = () => {
          if (!city) return
          
          getForecast(city)
     }

     const chooseOption = (option: optionType) => {
          setCity(option)
     }

     useEffect (() => {
          if (city) {
               setInput(city.name)
               setOptions([])
          }
     }, [city])

     return {
        input, options, forecast, onSubmit, chooseOption, handleInputChange
   }  
}

export default useForecast

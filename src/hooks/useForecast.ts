import {ChangeEvent, useEffect, useState } from 'react'
import {optionType} from "../types/types"

const useForecast = () => {
     
     const [input, setInput] = useState<string>('');
     const [options, setOptions] = useState<[]>([]);
     const [city, setCity] = useState<optionType | null>(null);
     const [forecast, setForecast] = useState<null>(null)

     const getOptions = (value: string) => {

          const apiKey = import.meta.env.VITE_MY_API_KEY

          fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=5&appid=${apiKey}`)
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
          fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${import.meta.env.VITE_MY_API_KEY}`)
               .then((res) => res.json())
               .then((data) => console.log({data}))
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
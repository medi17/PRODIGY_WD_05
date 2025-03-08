import {JSX} from 'react'
import { forecastType } from "../types/types"
import Sunriseicon from "../assets/sunrise-svgrepo-com.svg"
import Sunseticon from "../assets/sunset-svgrepo-com.svg"
import Feelslike from "../assets/health-medical-medicine-termometer-svgrepo-com.svg"
import Humidity from "../assets/humidity-svgrepo-com.svg"
import Precipitation from "../assets/snow-2-svgrepo-com.svg"
import Pressure from "../assets/pressure-svgrepo-com.svg"
import Wind from "../assets/wind-svgrepo-com.svg"
import Visibility from "../assets/visibility-eye-svgrepo-com.svg"

type Props = {
     data: forecastType
}

const forecast = ({ data }: Props): JSX.Element => {
     const today = data.list[0]
     const Degree = ({temp}: {temp: number}) => (
          <span>
               { temp}<sup>o</sup>
          </span>
     )
          

     return (
          <div className="bg-[#21354D] text-center rounded-lg min-w-[350px] h-[90%] p-8 md:max-w-[520px] ">
               <h1 className='text-2xl text-[#888290] font-bold'>{data.name} <span className='font-light text-[#9b9bb5]'>{data.country}</span></h1>
               <h2 className='text-4xl text-[#888290] font-extrabold'><Degree temp = {Math.round(today.main.temp)}/></h2>
               <h3 className='text-[14px]'>{today.weather[0].main} ({today.weather[0].description})</h3>

               <div className='flex justify-center gap-2 my-2 text-[#888290] font-bold'>
                    <p>H: <Degree temp={Math.ceil(today.main.temp_max)} /></p>
                    <p>L: <Degree temp={ Math.floor(today.main.temp_min)} /></p>
               </div>

               <section className='flex justify-start items-center overflow-x-scroll pb-2 my-5'>
                    {
                         data.list.map((item, i) => (
                              <div key={i}
                                   className='min-w-[50px]'
                              >
                                   <p className='text-sm'>
                                        {i == 0? "Now" : new Date (item.dt * 1000).getHours()}
                                   </p>
                                   <img
                                        src= {`http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                                        alt={`weather-icon-${item.weather[0].description}`}
                                   />
                                   <p className='text-sm'>
                                        <Degree temp={Math.round(item.main.temp)} />
                                   </p>
                              </div>
                         ))
                    }
               </section>
               

               <div className="grid grid-cols-2 gap-4">
                    <div className='bg-[#0b1b2e] p-4 rounded-lg'>
                         <span className='text-xs flex justify-center mb-3'><img className='sun w-10 h-10' src={Sunriseicon} alt={today.weather[0].description} /></span>
                         <h4 className=''>{ new Date (data.sunrise * 1000).getHours()}</h4>
                    </div>
                    <div className='bg-[#0b1b2e] p-4 rounded-lg'>
                         <span className='text-xs flex justify-center mb-3'><img className='sun w-10 h-10' src={Sunseticon} alt={today.weather[0].description} /></span>
                         <h4>{new Date (data.sunset * 1000).getHours()}</h4>
                    </div>

                    <div className='bg-[#0b1b2e] p-4 rounded-lg text-left'>
                         <div className='flex items-center'>
                              <span className=''><img className='sun w-6' src={Wind} alt="wind" /></span>
                              <h5 className='text-[#888290] font-bold mt-1 text-xl ml-2'>Wind</h5>
                         </div>
                         <h2 className = 'my-3 text-sm'>5 km/h</h2>
                         <p>SW, gusts 10.1 km/h</p>
                    </div>
                    <div className='bg-[#0b1b2e] p-4 rounded-lg text-left'>
                         <div className='flex items-center'>
                              <span className=''><img className='sun w-6' src={Feelslike} alt="termometer" /></span>
                              <h5 className='text-[#888290] font-bold mt-1 text-xl ml-2'>Feels Like</h5>
                         </div>
                         <h2 className = 'my-3 text-sm'>5 km/h</h2>
                         <p>SW, gusts 10.1 km/h</p>
                    </div>
                    <div className='bg-[#0b1b2e] p-4 rounded-lg text-left'>
                         <div className='flex items-center'>
                              <span className=''><img className='sun w-6' src={Humidity} alt="humidity" /></span>
                              <h5 className='text-[#888290] font-bold mt-1 text-xl ml-2'>Humidity</h5>
                         </div>
                         <h2 className = 'my-3 text-sm'>5 km/h</h2>
                         <p>SW, gusts 10.1 km/h</p>
                    </div>
                    <div className='bg-[#0b1b2e] p-4 rounded-lg text-left'>
                         <div className='flex items-center'>
                              <span className=''><img className='sun w-6' src={Precipitation} alt="ice-picture" /></span>
                              <h5 className='text-[#888290] font-bold mt-1 text-xl ml-2'>Precipitation</h5>
                         </div>
                         <h2 className = 'my-3 text-sm'>5 km/h</h2>
                         <p>SW, gusts 10.1 km/h</p>                         
                    </div>
                    <div className='bg-[#0b1b2e] p-4 rounded-lg text-left'>
                         <div className='flex items-center'>
                              <span className=''><img className='sun w-6' src={Pressure} alt="pessure-scale" /></span>
                              <h5 className='text-[#888290] font-bold mt-1 text-xl ml-2'>Pressure</h5>
                         </div>
                         <h2 className = 'my-3 text-sm'>5 km/h</h2>
                         <p>SW, gusts 10.1 km/h</p>                         
                    </div>
                    <div className='bg-[#0b1b2e] p-4 rounded-lg text-left'>
                         <div className='flex items-center'>
                              <span className=''><img className='sun w-6' src={Visibility} alt="eye" /></span>
                              <h5 className='text-[#888290] font-bold mt-1 text-xl ml-2'>Visibility</h5>
                         </div>
                         <h2 className = 'my-3 text-sm'>5 km/h</h2>
                         <p>SW, gusts 10.1 km/h</p>                         
                    </div>
               </div>

          </div>
     )
}

export default forecast

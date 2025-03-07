import { JSX } from 'react'

import Search from './components/search';
import useForecast from './hooks/useForecast';

const App = (): JSX.Element => {
     const {
        input, options, forecast, onSubmit, chooseOption, handleInputChange
     } = useForecast()
     

     return (
          <div className="bg-[#0B0B29] text-white h-screen flex justify-center items-center">
               <div className="bg-[#21354D] text-center rounded-lg min-w-[350px] p-8 mx-10 md:max-w-[520px]">
                    <h1 className="text-3xl font-medium my-6  text-[#888290]">Weather <span className=" text-[#9b9bb5] font-black ">Forecast</span></h1>
                    <p className="text-sm font-extralight">Enter below a place you want to know the
                         weather of and select an option from the dropdown
                    </p>
                    {forecast ? ("Here is the forecast"
                    ) : (
                         <Search
                         input= {input}
                         handleInputChange={handleInputChange}
                         onSubmit={onSubmit}
                         options={options}
                         chooseOption = {chooseOption}
                    />)
                    
                    }
                    {/* <div className="relative mx-4 mt-8 rounded-lg flex justify-center items-center gap-2">
                         <input className="p-3 border-none bg-[#c6c6d9] w-full h-full rounded-lg text-[#0B0B29] focus:outline-none"
                              type="text" 
                              placeholder='Enter a city'
                              value={input}
                              onChange={handleInputChange}
                         />

                         <button className="py-2 px-4 bg-[#0B0B29] mr-2 rounded-lg cursor-pointer hover:bg-[#21354D] hover:border hover:border-[#c6c6d9]"
                              onClick={onSubmit}
                         >search</button>
                         <ul className='absolute top-[40px] bg-[#c6c6d9] mr-50 ml-0 rounded-b-md md:mr-75'>
                              {options.map((option: optionType, index:number) => (
                                   <li className='text-black' key={option.name + '-' + index}>
                                        <button className='text-left text-sm w-full hover:bg-zinc-700 hover:text-white px-2 py-1 cursor-pointer'
                                                  onClick={() => chooseOption(option)}
                                        >
                                             {option.name}
                                        </button>
                                   </li>
                              ))}
                         </ul>
                    </div> */}
               </div>
          </div>
     )
}
export default App
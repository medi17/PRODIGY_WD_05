import {ChangeEvent, JSX} from 'react'
import { optionType } from "../types/types"

type Props = {
     input: string
     options: []
     handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void
     onSubmit: () => void
     chooseOption: (option: optionType) => void
}

const Search = ({input, handleInputChange, onSubmit, options, chooseOption}: Props):JSX.Element => {

     return (
          <div className="relative mx-4 mt-8 rounded-lg flex justify-center items-center gap-2">
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
                                        onClick= {() => chooseOption(option)} >
                                   {option.name}
                              </button>
                         </li>
                    ))}
               </ul>
          </div>


     )
}
export default Search
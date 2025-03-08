import { JSX } from 'react'

import Search from './components/search';
import Forecast from "./components/forecast"
import useForecast from './hooks/useForecast';

const App = (): JSX.Element => {
     const {
        input, options, forecast, onSubmit, chooseOption, handleInputChange
     } = useForecast()
     

     return (
          <div className="text-white my-10 flex justify-center items-center ">

               {forecast ? (
                    <Forecast data={ forecast} />
               ) : (
                    <Search
                    input= {input}
                    handleInputChange={handleInputChange}
                    onSubmit={onSubmit}
                    options={options}
                    chooseOption = {chooseOption}
               />)
               
               }

          </div>
     )
}
export default App
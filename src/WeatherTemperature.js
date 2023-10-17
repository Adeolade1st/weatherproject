import React, {useState} from "react";
import "./weatherTemperature.css"


export default function WeatherTemperature(props)

{
        const[deg, setDeg] = useState("celcius");

        function showCelcius(event){
            event.preventDefault();
            setDeg("celcius");
        }

     

        function showFarenheit(event){
            event.preventDefault();
            setDeg("Farenheit");
        }

     
           



    if(deg==="celcius"){
        let farenheitTemp = (props.degree * 9/5) + 32;
        return(
        <div className="WeatherTemperature">
                <strong className="temp">{Math.round(farenheitTemp)}</strong>
                <span className='degree'>
                 °C | <a href="/" onClick={showFarenheit}>°F</a>
                </span>
        </div>
    );

    }else{
       
        return(
            
               <div className="WeatherTemperature">
                <strong className="temp">{Math.round(props.degree)}</strong>
                <span className='degree'>
                 <span onClick={showCelcius}>°C </span>
                </span>
        </div>  
          
            
        )
    }
    
    
}
import React, {useState} from "react";
import "./weatherTemperature.css"


export default function WeatherTemperature(props)

{
        const[deg, setDeg] = useState("celcius");

        function showCelcius(event){
            event.preventDefault();
            setDeg("celcius");
        }

    

    if(deg==="celcius"){
      
        
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
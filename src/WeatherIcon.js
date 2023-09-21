import React  from "react";

export default function WeatherIcon(props){


        return(
        <div className="WeatherIcon">

         <img src={props.icon} alt={props.iconDescription} className="float-left"></img> 
         
        </div>
    );

    

    

}
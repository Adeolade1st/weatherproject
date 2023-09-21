import React  from "react";
import "./weatherIcon.css";

export default function WeatherIcon(props){


        return(
        <div className="WeatherIcon mt-1">

         <img src={props.icon} alt={props.iconDescription} className="imgUrl"></img> 
         
        </div>
    );

    

    

}
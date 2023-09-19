import React from "react";



export default function DateTime(props){
    

    return(
        <div className="DateTime">

      
        <p>{props.date}, {props.hour}:{props.mins}</p>


          </div>
    );


}
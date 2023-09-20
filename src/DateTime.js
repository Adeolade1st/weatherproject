import React from "react";



export default function DateTime(props){

       let days= ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
     let day = days[props.date.getDay()];
        let min = props.date.getMinutes();
        let hour =  props.date.getHours();
     

    
       

        if( hour < 10 ){
            hour = `0${hour}`;

            }

            if( min < 10){
                min = `0${min}`;
            }

            

            return (
                <div>
                    {day}, {hour}:{min}
                    </div>
            );
        
            
        
    
    
        

      



}
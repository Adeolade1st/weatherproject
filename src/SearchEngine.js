import React from "react";
import './styles.css';
import axios from "axios";

export default function SearchEngine (){
    return(
        <div className="container searchEng">
            <div className="weather-info">
            <div className="row mt-5" >
               
            <div className="col-9"><input type="text" autoFocus="yes" placeholder="Type a city" className="form-control search"/></div>
            <div className="col-3"><button className="btn btn-primary">Search</button></div>
            
                
            

            </div>
            </div>
            

        </div>
    );
}
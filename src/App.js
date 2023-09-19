import React, {useState} from "react";
import './App.css';
import axios from "axios";
import Forecast from "./Forecast";


function App(props) {

  const [weatherDetails, setWeatherDetails ] = useState({ready: false});

   
    

    function getWeatherUpdate(response){

      console.log(response.data);
     
     
      setWeatherDetails({
        ready: true,
        temperature: response.data.main.temp,
        wind: 12,
        description: response.data.weather[0].description,
        humidity:80,
        date: "Wednesday, 12:14",
        city: response.data.name,
        icon: "https://openweathermap.org/img/wn/10d@2x.png"
   
        
        
        
      });
    }

   
   
     if(weatherDetails.ready){

      return (
    <div className="container App mt-5 ">
      <div className="container">
         <div className="row mt-5 " >
            <form >
            <div className="col-9"><input type="text" autoFocus="yes" placeholder="Type a city" className="form-control search" /></div>
            <div className="col-3"><button className="btn btn-primary" >Search</button></div>
            </form>
                
            

            </div>
      <div className="row">
        <div className='col-sm-4'><strong className="temp"> <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="partly-cloudy" className="img-fluid "></img>  {Math.round(weatherDetails.temperature)}</strong><span className='degree'>°C</span></div>
        <div className='col-sm-8'><h2>{weatherDetails.city}</h2></div>
      </div>

      

        <div className='row'>
    <div className='col-3'>Updated On:{weatherDetails.date}</div>
    <div className='col-3 text-capitalize'>Description: {weatherDetails.description} </div>
    <div className='col-3'>Humidity: {weatherDetails.humidity}%</div>
    <div className='col-3'>Wind: {weatherDetails.wind}km/h</div>
   </div>
    
     <Forecast />
   <footer>This Project Was Coded by <a href ="https://github.com/Adeolade1st/react-weather-project">Ilavbare Adeola</a>  and Hosted on render.</footer>
   </div>

   
 
    </div>

   

  );


     }else{
       const apiKey = "1d038ee28ef2727a9f0310860ac10ae9";
    let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
     axios.get(apiLink).then(getWeatherUpdate);

      return "Loading";
      

     }

  

 
}

export default App;
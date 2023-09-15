import React, {useState} from "react";
import './App.css';
import SearchEngine from './SearchEngine';
import axios from "axios";
import Forecast from "./Forecast";

function App(props) {

  const [temp, setTemp] = useState("null");
  const [description, setDescription] = useState(" ");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [cityName, changeCityName] = useState("");

  
  function getWeatherUpdate(response){
    console.log(response.data);
    setTemp (Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    changeCityName(response.data.name);

   
  }

let apiKey = "1d038ee28ef2727a9f0310860ac10ae9";
let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${apiKey}&units=metric`;
axios.get(apiLink).then(getWeatherUpdate);


  return (
    <div className="container App mt-5 ">
    
      <SearchEngine />
      
      <div className="container">
      <div className='row'>
        <div className='col-sm-4'><img src="https://openweathermap.org/img/wn/04n@2x.png" alt="overcast clouds" id="icon" className='img-icon img-fluid'/><strong className="temp">{temp}</strong><span className='degree'>°C</span></div>
        <div className='col-sm-8'><h2>{cityName}</h2></div>
      </div>
        <div className='row'>
    <div className='col-3'>Updated On: Wed 23:30</div>
    <div className='col-3'>{description}</div>
    <div className='col-3'>Humidity: {humidity}%</div>
    <div className='col-3'>Wind: {wind}km/h</div>
   </div>

     <Forecast />
   <footer>This Project Was Coded by <a href ="https://github.com/Adeolade1st/react-weather-project">Ilavbare Adeola</a>  and Hosted on render.</footer>
   </div>

   
 
    </div>

   

  );

  


  
  
}

export default App;
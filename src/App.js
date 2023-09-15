import React, {useState} from "react";
import './App.css';
import axios from "axios";
import Forecast from "./Forecast";

function App(props) {

  const [temp, setTemp] = useState(props.temperature);
  const [description, setDescription] = useState(" ");
  const [humidity, setHumidity] = useState("");
  const [wind, setWind] = useState("");
  const [cityName, changeCityName] = useState(props.city);

  
  function getWeatherUpdate(response){
    console.log(response.data);
    setTemp (Math.round(response.data.main.temp));
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);


   
  }

  function search(){
  
    let apiKey = "1d038ee28ef2727a9f0310860ac10ae9";
let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
axios.get(apiLink).then(getWeatherUpdate);
  }



function handleSubmit(event){
  event.preventDefault();

  search()

  
  

}

function cityUpdate(event){

 
   changeCityName(event.target.value);

  
 
}





  return (
    <div className="container App mt-5 ">
      <div className="container">
         <div className="row mt-5 " >
            <form onSubmit={handleSubmit}>
            <div className="col-9"><input type="text" autoFocus="yes" placeholder="Type a city" className="form-control search" onChange={cityUpdate}/></div>
            <div className="col-3"><button className="btn btn-primary" >Search</button></div>
            </form>
                
            

            </div>
      <div className='row '>
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
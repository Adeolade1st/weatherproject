import React, {useState} from "react";
import './App.css';
import axios from "axios";
import Forecast from "./Forecast";
import DateTime from "./DateTime";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";


function App(props) {

  const [weatherDetails, setWeatherDetails ] = useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);

 

   
    

    function getWeatherUpdate(response){

      console.log(response.data);
     
     
      setWeatherDetails({
        ready: true,
        temperature: response.data.main.temp,
        wind: 12,
        description: response.data.weather[0].description,
        humidity:80,
        date: new Date(response.data.dt*1000),
        city: response.data.name,
        iconUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`

      

      
   
        
        
      
      });
    }

    function search()
    {
         const apiKey = "1d038ee28ef2727a9f0310860ac10ae9";
        let apiLink = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        axios.get(apiLink).then(getWeatherUpdate);


    }

    function handleSubmit (event)
    {
      event.preventDefault();

      search();


    }

    function changeCity (event){
      setCity(event.target.value);

    }

   
    

   
   
     if(weatherDetails.ready){

      return (
    <div className="container App mt-5 ">
      <div className="container ">
            <div className="row mt-5 " >
                
            <form onSubmit={handleSubmit} className="d-flex justify-content-evenly mb-5">
            <div className="col-9"><input type="text" autoFocus="yes" placeholder="Type a city" className="form-control search" onChange={changeCity} /></div>
            <div className="col-3"><button className="btn btn-primary" >Search</button></div>
            </form>
            </div>        
        </div>
     <div className="container">
            <div className="row">
                <div className='col-6'>
                        
                    <span><span className="temp"><WeatherTemperature degree={weatherDetails.temperature} /></span><WeatherIcon icon={weatherDetails.iconUrl} iconDescription={weatherDetails.description}/>  </span>   
                </div> 
                     <div className="col-6"><h1> {weatherDetails.city}</h1></div> 
            </div>
    </div>  



      

        <div className='row mt-4'>
        <div className='col-3 '>Updated On:<DateTime date={weatherDetails.date} /></div>
        <div className='col-3 text-capitalize '>Description: {weatherDetails.description} </div>
        <div className='col-3'>Humidity: {weatherDetails.humidity}%</div>
        <div className='col-3'>Wind: {weatherDetails.wind}km/h</div>
     </div>
    
     <Forecast />
        <footer>This Project Was Coded by <a href ="https://github.com/Adeolade1st/react-weather-project">Ilavbare Adeola</a>  and Hosted on render.</footer>
   

   
 

    </div>
  );
  
    }else{
    
      search ();
      return "Loading";
      

     }
   


     

  

 
}

export default App;
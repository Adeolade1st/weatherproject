
import './App.css';
import SearchEngine from './SearchEngine';

function App() {
  return (
    <div className="container App mt-5 ">
      <h1>Weather App</h1>
      <SearchEngine />
      
      <div className="container">
      <div className='row'>
        <div className='col-sm-4'><img src="https://openweathermap.org/img/wn/04n@2x.png" alt="overcast clouds" id="icon" className='img-icon'/><strong className='temp'>24</strong><span className='degree'>°C</span></div>
        <div className='col-sm-8'><h2>Lagos</h2></div>
      </div>
        <div className='row'>
    <div className='col-3'>Updated On: Wed 23:30</div>
    <div className='col-3'>Overcast Clouds</div>
    <div className='col-3'>Humidity: 94%</div>
    <div className='col-3'>Wind: 2km/H</div>
   </div>

     <div className='row mt-5'>
    <div className='col-3'>Mon</div>
    <div className='col-2'>Tues</div>
    <div className='col-2'>Wed</div>
    <div className='col-2'>Thurs</div>
    <div className='col-3'>Fri</div>
   </div>
   </div>

   
 <footer>This Project Was Coded by <a href ="https://github.com/Adeolade1st/react-weather-project">Ilavbare Adeola</a>  and Hosted on render.</footer>
    </div>
    

  );
  
}

export default App;

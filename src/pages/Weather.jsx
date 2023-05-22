import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import './weather.css';

function Weather() {
  const [weather, setWeather] = useState({});
  const [city, setCity] = useState('');


  const handleSearch = () => {
    console.log("hello")
    getData(city);
    setCity('');

  }
  const getCity = (e) => {
    const value = e.target.value;
    setCity(value);
    // console.log(city);
  }
  // const enterCity = () =>{
  //   if(city != null) return true;
  //   return false;
  // }

  const getData = async (city) => {
    axios.get('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=58b59e21276f82a18656bae728a73132')
      .then(res => {

        setWeather(res.data);
        console.log(res.data);
      }).catch(err => {
        console.log('error')
      })
  }


  return (
    <div className='search'>
      <div ><InputGroup className="mb-3">
        <Form.Control
          placeholder="Enter city"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          value={city}
          onChange={getCity}
        />
        <Button variant="outline-secondary" id="button-addon2" onClick={ () => handleSearch()} >
          Search
        </Button>
      </InputGroup>
      </div>
     
      <div className='col-md-12 text-center-mt-5'  >
        <div className='weather shadow result' >
          <img src='https://nordicapis.com/wp-content/uploads/5-Best-Free-and-Paid-Weather-APIs-2019-e1587582023501.png'></img>
        
          {Object.keys(weather).length > 0 && (  
              <>
          <h2 className='weathercity'>city : {weather?.name}</h2>
          <h4 className='tempreture'> temp : { ((weather?.main?.temp) - 273.15).toFixed('2') }°C  </h4>
          </>
          )}
     
        </div>

      </div>
      

    </div>
  )
}

export default Weather


























//const apikey = "58b59e21276f82a18656bae728a73132";
/* eslint-disable react/no-unknown-property */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import style from './panel.module.css'
import Form from '../form/form';
import Card from '../Card/card';
import Swal from 'sweetalert2';

export default function panel() {

    let Url = 'https://api.openweathermap.org/data/2.5/weather?&appid=90468f479199346cadc80780cc765cec&lang=es';
    let UrlForecast = 'https://api.openweathermap.org/data/2.5/forecast?&appid=90468f479199346cadc80780cc765cec&lang=es';
    let cityUrl = '&q='

    
    
    const [weather, setWeather] = useState([])
    const [forecast, setForecast] = useState([])
    const [cart, setCart] = useState(false)
    const [location, setLocation] = useState("")
    const [loading, setLoading] = useState(false)
    
    
    
    console.log(loading);
    console.log(weather);
    console.log(forecast);
    
    const responsCity = async (loc) => {
        setLocation(loc)
        Url = Url + cityUrl + loc;
        await fetch(Url)
        .then(response => response.json())
        .then(weatherData => {
            setWeather(weatherData)
            setCart(true)
        })
        .catch(err => {
            console.log(err);
            setLoading(false)
            setCart(false)
            Swal.fire({
                title: "Error",
                text:"There is no city entered." ,
                icon:'error',            
              })
        });

        UrlForecast = UrlForecast + cityUrl + loc;
        await fetch(UrlForecast)
        .then(response => response.json())
        .then(forecastData => {
            setForecast(forecastData)
            setLoading(false)
            setCart(true)
        })
        .catch(err => {
            console.log(err);
            setCart(false)
            setLoading(false)
        })
    }


  return (
    <div className={style.container}>
        <Form newLocation={responsCity}/>
        <Card 
        CartData={cart}
        loadingData={loading}
        weather={weather}
        forecast={forecast}
        />
    </div>
  )
}

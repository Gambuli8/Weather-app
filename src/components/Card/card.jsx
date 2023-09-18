/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import style from './card.module.css'
import Spinner from '../spinner/spinner'
import { motion } from 'framer-motion';
import { useEffect } from 'react';

export default function card({forecast, loadingData, CartData, weather }) {

    if(loadingData){
        return  <Spinner/>
        
    };


    const today = new Date();
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const year = today.getFullYear();
    const date = day + '/' + month + '/' + year;

    let url = ''
    let iconUrl= ''


    if(CartData){
        url = 'http://openweathermap.org/img/w/';
        iconUrl = url + weather.weather[0].icon + '.png'
    }

  return (  
  <>
    {CartData ?
        <motion.div
         className={style.card}
         initial={{x: -400, scale: 0}}
         animate={{ x : 0, scale: 1 }}
         whileFocus={{scale: 1.2}}
         whileHover={{scale: 1.1}}
         whileDrag={{scale:1.5}}
         transition={{
            type: 'spring'
         }}
         >
            <section className={style.section1}>
                <div className={style.card_header}>
                    <span>{weather?.name}</span>
                    <span className={style.date}>{date}</span>
                    <span>{weather?.weather[0]?.description}</span>
                    <div className={style.temperaturas}>
                    <p>Temperatura Maxima: {(weather.main?.temp_max - 273.15).toFixed(0)}°C</p>
                    <p>Temperatura Minima: {(weather.main?.temp_min - 273.15).toFixed(0)}°C</p>
                    <p>Humedad: {weather.main?.humidity}%</p>
                    <p>Velocidad del viento: {weather.wind?.speed}m/s</p>
                    </div>
                </div>
                    <span className={style.temp}>{(weather.main?.temp - 273.15).toFixed(0)}°C</span>
            </section>
                </motion.div>
              : <h1>Ingrese una Ciudad</h1>
             } 
                {/* <motion.div
                className={style.card}
                >
                <div className={style.container}>

                </div>
                </motion.div> */}
            </>
            )
        }
            
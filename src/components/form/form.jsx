/* eslint-disable no-undef */
/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import style from './form.module.css';
import { useState } from 'react';
import { motion } from 'framer-motion'
import Swal from 'sweetalert2';


export default function form({newLocation}) {
    
    const [city, setCity] = useState('');

    const handlerInput = (e) => {
      setCity(e.target.value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(city);
        if(city === '' || null || undefined ){
          Swal.fire({
            title: "Error",
            text:"Please enter a city name" ,
            icon:'error',            
          })
        } else{
          newLocation(city)
        }
    }

  return (
    <div className={style.container}>
        <form action="" className={style.container} onSubmit={onSubmit}>
        <input className={style.input} type="text" placeholder='tu ubicacion...' onChange={(e) => handlerInput(e)}/>
      <motion.button
       type='submit' 
       className={style.btn}
       whileTap={{scale: 0.9}}
       >Search</motion.button>

        </form>
    </div>
  )
}

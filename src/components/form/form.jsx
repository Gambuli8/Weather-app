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
        <div className={style.container_input}>
  <input type="text" placeholder="Miami, Madrid, ..." name="text" onChange={(e) => handlerInput(e)} className={style.input}/>
  <svg fill="#000000" width="20px" height="20px" viewBox="0 0 1920 1920" xmlns="http://www.w3.org/2000/svg">
    <path d="M790.588 1468.235c-373.722 0-677.647-303.924-677.647-677.647 0-373.722 303.925-677.647 677.647-677.647 373.723 0 677.647 303.925 677.647 677.647 0 373.723-303.924 677.647-677.647 677.647Zm596.781-160.715c120.396-138.692 193.807-319.285 193.807-516.932C1581.176 354.748 1226.428 0 790.588 0S0 354.748 0 790.588s354.748 790.588 790.588 790.588c197.647 0 378.24-73.411 516.932-193.807l516.028 516.142 79.963-79.963-516.142-516.028Z" fill-rule="evenodd"></path>
</svg>
</div>
      <motion.button
       type='submit' 
       className={style.btn}
       whileTap={{scale: 0.9}}
       >Search</motion.button>

        </form>
    </div>
  )
}

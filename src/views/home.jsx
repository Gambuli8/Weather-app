/* eslint-disable react-hooks/rules-of-hooks */
import style from './home.module.css'
import Panel from '../components/panelWeather/panel'
import { motion } from 'framer-motion'
import { useState } from 'react';

export default function home() {
  const [isOn, setIsOn] = useState(false);
  const toggleSwitch = () => setIsOn(!isOn);

  const spring = {
  type: "spring",
  stiffness: 700,
  damping: 30
  };


  return (
    <div className={style.container}>
      <div className={style.switch} data-isOn={isOn} onClick={toggleSwitch}>
        <motion.div className={style.handle} layout transition={spring} />
      </div>
        <motion.h1
         initial={{scale: 0}}
         animate={{scale: 1 }}
         transition={{
          duration: 2,
          ease: 'easeInOut',
          type: 'spring',
          delay: 0.5
        }}
        
         >Weather App</motion.h1>
      <Panel/>
    </div>
  )
}

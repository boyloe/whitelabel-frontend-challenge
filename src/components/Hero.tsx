import React from 'react'
import Drone from '../assets/Images/Drone.png';


const Hero:React.FC = () => {
    return (
        <section className="bg-hero">
            <img className="transform scale-50" src={Drone} alt="F-210 drone" /> 
        </section>
    )
}
export default Hero;
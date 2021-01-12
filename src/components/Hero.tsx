import React from 'react'
import Drone from '../assets/Images/Drone_and_Shadow.png';
import Logo from '../assets/Images/Logo.png';
import ModelName from '../assets/Images/F-210.png'
import { Link } from 'gatsby'


const Hero:React.FC = () => {
    return (
        <div className="h-screen flex flex-col bg-hero">
            <div className="mx-auto flex flex-row items-center">
                <nav className="w-1/4">
                    <Link to="/store">Store</Link>
                    <Link to="/tutorials">Tutorials</Link>
                </nav>
                <img className="transform scale-50"src={Logo} alt="Byrd MR"></img>
                <nav className="w-1/4">
                    <Link to="/blog">Blog</Link>
                    <Link to="/contact">Contact</Link>
                </nav>
            </div>
            <body className="mx-auto flex flex-col justify-between">
                <div className="flex flex-col justify-center">
                    <img className="" src={Drone} alt="F-210 drone" /> 
                    <img className="" src={ModelName} alt="F-210" />
                </div>
            </body>            
        </div>
    )
}
export default Hero;
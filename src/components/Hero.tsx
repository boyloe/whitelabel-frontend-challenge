import React from 'react'
import Drone from '../assets/Images/Drone_and_Shadow.png';
import Logo from '../assets/Images/Logo.png';
import ModelName from '../assets/Images/F-210.png'
import { Link } from 'gatsby'


const Hero:React.FC = () => {
    return (
        <div className="h-screen flex flex-col">
            <div className="container mx-auto flex flex-row items-center py-8">
                <nav className="w-1/3 flex justify-start">
                    <Link className="mx-8 font-Archivo tracking-wider" to="/store">STORE</Link>
                    <Link className="mx-8 font-Archivo tracking-wider"to="/tutorials">TUTORIALS</Link>
                </nav>
                <div className="w-1/3">
                    <img className="transform scale-50 mt-6 "src={Logo} alt="Byrd MR"></img>
                </div>
                <nav className="w-1/3 flex justify-end">
                    <Link className="mx-8 font-Archivo tracking-wider" to="/blog">BLOG</Link>
                    <Link className="mx-8 font-Archivo tracking-wider" to="/contact">CONTACT</Link>
                </nav>
            </div>
            <body className="h-screen mx-auto my-4 flex flex-col justify-between">
                <div className="flex flex-col justify-center">
                    <img className="transform scale-y-110 scale-x-75 z-10" src={Drone} alt="F-210 drone" /> 
                    <img className="transform scale-125 -translate-y-3 z-0" src={ModelName} alt="F-210" />
                </div>
                <div className="flex justify-center flex-col xl:mb-24">
                    <q className="mx-auto font-Archivo text-caption opacity-25 text-xl tracking-wider">
                        THE FASTEST DRONE ON THE PLANET
                    </q>
                    <p className="mx-auto font-Archivo text-caption opacity-25">"The- The Wirecutter</p>
                </div>
            </body>            
        </div>
    )
}
export default Hero;
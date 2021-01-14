import React,{ useState } from 'react'
import Drone from '../assets/Images/Drone_and_Shadow.png';
import Logo from '../assets/Images/Logo.png';
import ModelName from '../assets/Images/F-210.png'
import formatClassNames from '../utils/formatClassNames'
import { Link } from 'gatsby'
import Menu from '../assets/Images/Menu.png'


const Hero:React.FC = () => {
    
    const [isClicked, setIsClicked] = useState(false)

    return (
        <div className="h-screen bg-byrd flex flex-col ">
            <div className="container mx-auto flex flex-row items-center py-8 mb-8 lg:mb-0">
                <nav className="w-1/3 flex justify-start">
                        <Link className="invisible lg:visible mx-8 font-Archivo tracking-wider" to="/store">STORE</Link>
                        <Link className="invisible lg:visible mx-8 font-Archivo tracking-wider"to="/tutorials">TUTORIALS</Link>
                </nav>                
                <div className="w-1/3">
                    <img className="transform md:scale-50 lg:mt-6 "src={Logo} alt="Byrd MR"></img>
                </div>
                <nav className="w-1/3 flex justify-end">
                    <Link className="invisible lg:visible mx-8 font-Archivo tracking-wider" to="/blog">BLOG</Link>
                    <Link className="invisible lg:visible mx-8 font-Archivo tracking-wider" to="/contact">CONTACT</Link>
                    <img className="lg:hidden mr-6 md:mr-24 transform scale-75" src={Menu} alt="navigaition menu" />
                </nav>
            </div>
            <div className=" mx-auto lg:my-4 flex flex-col justify-between">
                <div className="flex flex-col justify-center space-y-14">
                    <img className="transform scale-110 sm:scale-y-110 sm:scale-x-75 z-10" src={Drone} alt="F-210 drone" /> 
                    <img className="transform scale-75 lg:scale-125 -translate-y-3 z-0" src={ModelName} alt="F-210" />
                </div>
                <div className="flex justify-center flex-col px-8 text-center 2xl:mt-0 2xl:mb-36">
                    <q className="mx-auto font-Archivo text-caption opacity-25 lg:text-xl lg:tracking-wider">
                        THE FASTEST DRONE ON THE PLANET
                    </q>
                    <p className="mx-auto font-Archivo text-caption opacity-25">"The- The Wirecutter</p>
                </div>
            </div>            
        </div>
    )
}
export default Hero;
import React from 'react';
import Logo from '../assets/Images/Logo.png'
import FBIcon from '../assets/Images/fb-transparent.png'


const Contact:React.FC = () => {
    return (
        <div className="h-screen w-full flex justify-center bg-byrd">        
            <div className="container mx-auto flex flex-row items-center py-8">
                <div className="w-1/3 flex justify-start">
                    <i className="mx-8"/>
                    <i className="mx-8" />
                </div>
                <div className="w-1/3">
                    <img className="transform scale-50 mt-6 "src={Logo} alt="Byrd MR"></img>
                </div>
                <div className="w-1/3 flex justify-end">
                </div>
            </div>
            <form>

            </form>
        </div>
    )
}
export default Contact
import React from 'react';
import Logo from '../assets/Images/Logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookSquare, faTwitter } from '@fortawesome/free-brands-svg-icons';



const Contact:React.FC = () => {
    return (
        <div className="h-screen w-full flex justify-center bg-byrd">        
            <div className="container mx-auto flex flex-row items-center py-8">
                <div className="w-1/3 flex justify-start">
                    <FontAwesomeIcon className="opacity-10"icon={faFacebookSquare} />
                    <FontAwesomeIcon className="opacity-10"icon={faTwitter} />
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
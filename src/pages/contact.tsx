import React from 'react';
import Logo from '../assets/Images/Logo.png';
import MenuIcon from '../assets/Images/Menu.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faFacebookSquare, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { Formik, Form, Field, FormikHelpers } from 'formik'

interface formValues {
    fullName:string,
    email:string,
    message:string
}

const Contact:React.FC = () => {
    return (   
        <div className="h-screen w-full flex flex-col justify-between bg-byrd">
            <div className="container mx-auto py-12 flex items-start">
                <div className="w-1/3 flex justify-start space-x-12">
                    <FontAwesomeIcon className="opacity-20"icon={faFacebookSquare} />
                    <FontAwesomeIcon className="opacity-20"icon={faTwitter} />
                </div>
                <div className="w-1/3">
                    <img className="transform scale-50 -translate-y-4"src={Logo} alt="Byrd MR"></img>
                </div>
                <div className="w-1/3 flex justify-end">
                    <img src={MenuIcon} alt="menu" />
                </div>
            </div>
            <body className="h-screen w-1/3 mx-auto my-12 flex flex-col justify-between">
                <Formik 
                    initialValues={{
                        fullName: "",
                        email: "",
                        message: ""
                    }}
                    onSubmit={(
                        values:formValues,
                        { resetForm }:FormikHelpers<formValues>
                        )=> {
                            fetch("https://www.madeupurl.com",{
                            method: "POST",
                            headers: {
                                "Accept" : "Application/json</body>"
                            },
                            body: JSON.stringify(values)
                        })
                        resetForm()
                        
                        }}
                >       
                    <Form className="flex flex-col space-y-8 w-full">
                        <label className="font-Archivo-md" htmlFor="fullName">Full Name</label>
                        <Field
                            className="bg-byrd border-b border-byrd"
                            id="fullName"
                            name="fullName"
                        />
                        <label className="font-Archivo-md" htmlFor="email">Email</label>
                        <Field
                            className="bg-byrd border-b border-byrd"
                            id="email"
                            name="email"
                        />
                        <label className="font-Archivo-md" htmlFor="messgae">Message</label>
                        <Field
                            className="bg-byrd border-b border-byrd"
                            id="message"
                            name="message"
                            component="textarea"
                        />
                        <button className="w-1/2 bg-byrd-button flex justify-end py-6 rounded-sm" type="submit">
                            <FontAwesomeIcon className="text-white mr-8" icon={faArrowRight} />
                        </button>
                    </Form>
                </Formik>
            </body>
        </div>
    )
}
export default Contact
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from '@emailjs/browser';




const Signin = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMSG, setErrorMSG] = useState("");
    const [errorMSG2, setErrorMSG2] = useState("");
    const navigate = useNavigate()


    return (
        <section className="py-[165px]">
            <div className="container mx-auto">
                <div className="w-full px-4">
                    <div className="bg-primary relative mx-auto max-w-[525px] rounded-lg py-16 px-10 text-center sm:px-12 md:px-[60px]">
                        <input
                            onChange={(e) => { setUsername(e.target.value) }}
                            name="username"
                            placeholder="username"
                            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none mb-4"
                        />

                        <input
                            onChange={(e) => { setPassword(e.target.value) }}
                            placeholder="Password"
                            className="border-[#E9EDF4] w-full rounded-md border bg-[#FCFDFE] py-3 px-5 text-base text-body-color placeholder-[#ACB6BE] outline-none focus:border-primary focus-visible:shadow-none mb-4"

                        />

                        <div>
                            <button
                                className="w-full bg-primary btn text-white cursor-pointer rounded-md border py-3 px-5 transition hover:bg-primary-focus"
                                type="submit"
                                onClick={() => { checkData(username, password, navigate, setErrorMSG, setErrorMSG2) }}
                            >
                                Let's Go
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {errorMSG && <div className="toast toast-center">
                <div className="alert alert-error">
                    <span className="">{errorMSG}</span>
                </div>
                <div className="alert alert-error">
                    <span className="">{errorMSG2}</span>
                </div>
            </div>}

        </section>
    );
};

export default Signin;

const checkData = (username, password, navigate, setErrorMSG, setErrorMSG2) => {
    let myPassword = localStorage.getItem('password');


    if (myPassword === null || myPassword === undefined) {
        if (password == "WonderNancy") {
            localStorage.setItem('username', username)
            localStorage.setItem('password', "kaman wa7da ya rayes")

            let templateParams = {
                name: localStorage.getItem('username'),
                message: "I got in",
            };
            emailjs.send('service_o4g4imn', 'template_q4mzaa4', templateParams, 'u9SC81GOXSfFtUhpf')

            navigate("/home")
        }
        else {
            setErrorMSG("Wrong Password!!");
            setErrorMSG2("Please try again");
            setTimeout(function () {
                setErrorMSG("");;
                setErrorMSG2("");;
            }, 5000);
        }
    }
    else {
        if (password == myPassword) {
            localStorage.setItem('username', username)

            let templateParams = {
                name: localStorage.getItem('username'),
                message: "I got in again",
            };
            emailjs.send('service_o4g4imn', 'template_q4mzaa4', templateParams, 'u9SC81GOXSfFtUhpf')

            navigate("/home")
        }
        else {
            setErrorMSG("Sorry you can only access this website once!!");
            setErrorMSG2("Contact the author if you want another sesssion.");
            setTimeout(function () {
                setErrorMSG("");
                setErrorMSG2("");
            }, 5000);
        }

    }

}
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();
    const [errorMSG, setErrorMSG] = useState("");

    return (
        <>
            <section className="relative z-10 bg-primary py-[120px]">
                <div className=" w-full">
                    <div className="flex">
                        <div className="w-full px-4">
                            <div className="text-center">
                                <h2 className="mb-2 text-[50px] font-bold leading-none text-white sm:text-[80px] md:text-[100px]">
                                    404
                                </h2>
                                <h4 className="mb-3 text-[22px] font-semibold leading-tight text-white">
                                    Sorry! Navigation is Forbidden
                                </h4>
                                <button
                                    onClick={() => { goBack(navigate, setErrorMSG) }}
                                    className="btn bg-primary inline-block px-8 py-3 text-base font-semibold text-center text-white transition border border-white rounded-lg hover:bg-white hover:text-primary"
                                >
                                    Go Back
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="absolute top-0 left-0 flex items-center justify-between w-full h-full space-x-5 -z-10 md:space-x-8 lg:space-x-14">
                    <div className="h-full w-1/3 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]" />
                    <div className="flex w-1/3 h-full">
                        <div className="h-full w-1/2 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]" />
                        <div className="h-full w-1/2 bg-gradient-to-t from-[#FFFFFF14] to-[#C4C4C400]" />
                    </div>
                    <div className="h-full w-1/3 bg-gradient-to-b from-[#FFFFFF14] to-[#C4C4C400]" />
                </div>
            </section>

            {errorMSG && <div className="toast toast-center">
                <div className="alert alert-info">
                    <span>{errorMSG}</span>
                </div>
            </div>}
        </>
    );
};

const goBack = (navigate, setErrorMSG) => {
    let Denied = localStorage.getItem('DeniedVisited');
    let Final = localStorage.getItem('FinalVisited');
    let Home = localStorage.getItem('HomeVisited');
    let Lucky = localStorage.getItem('LuckyVisited');
    let PD = localStorage.getItem('PDVisited');
    let Songs = localStorage.getItem('SongsVisited');
    let Unlucky = localStorage.getItem('UnluckyVisited');

    if (Home === null || Home === undefined) {
        navigate("/home")
    }
    else if (Unlucky === null || Unlucky === undefined) {
        navigate("/unlucky")
    }
    else if (Denied === null || Denied === undefined) {
        navigate("/denied")
    }
    else if (Lucky === null || Lucky === undefined) {
        navigate("/lucky")
    }
    else if (PD === null || PD === undefined) {
        navigate("/p&d")
    }
    else if (Songs === null || Songs === undefined) {
        navigate("/songs")
    }
    else if (Final === null || Final === undefined) {
        navigate("/final")
    }
    else {
        setErrorMSG("You already visited all the pages!! Thank you for your time.");
        setTimeout(function () {
            setErrorMSG("");
            setTimeout(function () {
                navigate("/login");
            }, 500);
        }, 3000);
    }



}

export default Error;

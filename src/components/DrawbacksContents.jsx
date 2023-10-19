import React from 'react'
import { DrawbacksImages } from './ImageArray';
import { DrawbacksText, DrawbacksDetailsText } from './TextArray';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const DrawbacksContents = () => {
    const [counter, setCounter] = useState(0);
    const navigate = useNavigate();
    return (
        <>
            <div className='absolute w-full h-full'>
                <div className='flex flex-col w-full h-full items-center mt-4'>
                    <div className="card lg:card-side bg-secondary shadow-xl w-[80%] h-[90%]">
                        <figure className='lg:w-[40%] pt-4'><img src={DrawbacksImages[counter]} /></figure>
                        <div className="card-body justify-between lg:w-[40%] text-center text-2xl font-semibold font-serif">
                            <h2 dir='rtl'>{DrawbacksText[counter]}</h2>
                            <div className="card-actions flex-col items-center lg:items-end w-full">
                                <h2 dir='rtl' className='text-sm'>{DrawbacksDetailsText[counter]}</h2>
                                <button onClick={() => next(setCounter, counter, navigate)}
                                    className="btn btn-primary w-[60%] lg:w-[30%] bg-secondary-content border-0 text-white hover:bg-secondary-content hover:bg-opacity-80">
                                    {counter < 4 ? "next" : "go back"}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const next = (setCounter, counter, navigate) => {
    setCounter(prevState => prevState + 1)
    if (counter == 4) {
        navigate("/p&d")
    }
}

export default DrawbacksContents;
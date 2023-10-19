import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyImages } from './ImageArray';
import { MyInfoTextArray, MyInfoTextDetails } from './TextArray';
import MarioIcon from '../assets/Mario.svg';

const LuckyContents = () => {
    const [counter, setCounter] = useState(0);
    const navigate = useNavigate();
    return (
        <>

            {counter < 3 ?
                <div>
                    <div className='absolute w-full h-full bg-heart'>
                        <div className='flex flex-col w-full h-full items-center mt-4'>
                            <div className="card lg:card-side bg-secondary shadow-xl w-[80%] h-[80%]">
                                <figure className='lg:w-[40%]'><img src={MyImages[counter]} /></figure>
                                <div className="card-body lg:w-[40%] text-center text-xl lg:text-2xl font-semibold font-serif">
                                    <h2>{MyInfoTextArray[counter]}</h2>
                                    {counter == 1 ?
                                        <div className='flex items-center justify-center'>
                                            <img src={MarioIcon} className='w-[40%] lg:w-[30%]' />
                                        </div>
                                        :
                                        <></>
                                    }
                                    <h2 dir='rtl'>{MyInfoTextDetails[counter]}</h2>
                                </div>
                            </div>
                        </div>

                        <div className='absolute top-[83%] lg:top-[85%] items-center w-full'>
                            <div className='flex flex-col items-center justify-center lg:flex-row w-full'>
                                <button onClick={() => previous(setCounter, counter)} className='bg-secondary-focus btn text-white w-[50%] lg:w-[16%] my-2 lg:my-0 lg:mr-8 hover:bg-secondary-content hover:opacity-80'>
                                    previous
                                </button>
                                <button onClick={() => next(setCounter, counter, navigate)} className='bg-secondary-focus btn text-white w-[50%] lg:w-[16%] my-2 lg:my-0 lg:mr-8 hover:bg-secondary-content hover:opacity-80'>
                                    next
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div>

                </div>
            }
        </>
    );
}

const previous = (setCounter, counter) => {
    if (counter > 0)
        setCounter(prevState => prevState - 1)
}

const next = (setCounter, counter, navigate) => {
    setCounter(prevState => prevState + 1)
    if (counter == 2) {
        localStorage.setItem('LuckyVisited', true);
        navigate("/p&d")
    }
}

export default LuckyContents;
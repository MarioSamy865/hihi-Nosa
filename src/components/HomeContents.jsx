import React from 'react'
import { EngTextArray } from './TextArray';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import MemeImage from '../assets/meme.jpg'
import MemeImage2 from '../assets/meme3.jpg'
import emailjs from '@emailjs/browser';


const HomeContents = () => {
    const [counter, setCounter] = useState(0);
    const navigate = useNavigate();
    return (
        <>
            <div className='text-white m-4 flex flex-col items-center text-center'>
                <h1 className="px-16 font-bold leading-tight text-[24px] lg:text-[38px] cursor-default">
                    {EngTextArray[counter]}
                </h1>
                {/* <h1 dir="rtl" className="text-right text-3xl px-16 font-bold leading-tight text-[38px] cursor-default">
                    {ArbTextArray[counter]}
                </h1> */}
            </div>

            {counter == 1 ? <div className='absolute top-[40%] w-full'>
                <div className='flex flex-col items-center justify-center'>
                    <h2 dir='rtl' className='text-center font-serif font-bold text-xl lg:text-2xl'>جدعة.. اختيار موفق. هااا اللى بعده</h2>
                    <img src={MemeImage}></img>
                </div>
            </div>
                :
                <div></div>}

            {counter == 3 ? <div className='absolute top-[25%] lg:top-[15%] w-full'>
                <div className='flex flex-col items-center justify-center'>
                    <h2 className='font-serif font-bold text-center text-xl lg:text-2xl'>Maybe it won’t work out. But maybe seeing if it does will be the best adventure ever.</h2>
                    <img src={MemeImage2} className='w-[75%] lg:w-[35%]'></img>
                </div>
            </div>
                :
                <div></div>}



            <div className='absolute top-[75%] lg:top-[80%] items-center w-full'>
                <div className='flex flex-col items-center justify-center lg:flex-row w-full'>
                    <button onClick={() => yes(setCounter, counter, navigate)}
                        className='bg-success btn text-white w-[50%] lg:w-[16%] my-4 lg:mr-8 hover:bg-success hover:opacity-80'>
                        yes</button>
                    <button onClick={() => no(setCounter, counter, navigate)}
                        className='bg-error btn text-white w-[50%] lg:w-[16%] my-4 lg:mr-8 hover:bg-error hover:opacity-80'>
                        {counter > 1 ? "No" : "Yes but in red XD"}
                    </button>
                </div>
            </div>
        </>
    );
}

const yes = (setCounter, counter, navigate) => {
    if (counter == 2) {
        localStorage.setItem('HomeVisited', true);
        let templateParams = {
            name: localStorage.getItem('username'),
            message: "I am in a relationship :(",
        };
        emailjs.send('service_o4g4imn', 'template_q4mzaa4', templateParams, 'u9SC81GOXSfFtUhpf')
        navigate("/unlucky")
    }
    if (counter == 3) {
        localStorage.setItem('HomeVisited', true);
        localStorage.setItem('UnluckyVisited', true);
        let templateParams = {
            name: localStorage.getItem('username'),
            message: "You are one lucky motherfucker!! XD (;",
        };
        emailjs.send('service_o4g4imn', 'template_q4mzaa4', templateParams, 'u9SC81GOXSfFtUhpf')
        navigate("/lucky")
    }
    setCounter(prevState => prevState + 1)
}

const no = (setCounter, counter, navigate) => {
    if (counter == 3) {
        localStorage.setItem('HomeVisited', true);
        localStorage.setItem('UnluckyVisited', true);
        let templateParams = {
            name: localStorage.getItem('username'),
            message: "I am not interested :|",
        };
        emailjs.send('service_o4g4imn', 'template_q4mzaa4', templateParams, 'u9SC81GOXSfFtUhpf')
        navigate("/denied")
    }
    setCounter(prevState => prevState + 1)
}

export default HomeContents;
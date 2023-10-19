import React from 'react'
import MemeImage2 from '../assets/meme2.jpg'
import { useNavigate } from 'react-router-dom'

const DeniedContents = () => {
    const navigate = useNavigate();
    const Arbtext1 = "مفيش نوو 😑."
    const Arbtext2 = "كملى لو سمحتى لحد الاخر و بعدين قررى انترستد ولا لا. لو مفيهاش رخامة يعنى."


    return (
        <>
            <div className='absolute text-primary w-full h-full'>
                <div className='m-4 text-center flex flex-col h-full justify-center items-center text-xl lg:text-3xl font-bold leading-tight'>
                    <div className='bg-neutral-800 shadow-2xl shadow-black rounded-2xl border-primary-focus border-2 p-2'>
                        <h1 dir="rtl">
                            {Arbtext1}
                        </h1>
                        <h1 dir="rtl">
                            {Arbtext2}
                        </h1>
                    </div>
                    <div className='mt-4'>
                        <img src={MemeImage2}></img>
                    </div>
                </div>
            </div>



            <div className='absolute top-[75%] lg:top-[80%] items-center w-full'>
                <div className='flex flex-col items-center justify-center lg:flex-row w-full'>
                    <button onClick={() => { navigate("/lucky"); localStorage.setItem('DeniedVisited', true) }}
                        className='bg-success btn text-white w-[50%] lg:w-[16%] my-4 lg:mr-8 hover:bg-success hover:opacity-80'>
                        continue
                    </button>
                    <button onClick={() => { navigate("/lucky"); localStorage.setItem('DeniedVisited', true) }}
                        className='bg-error btn text-white w-[50%] lg:w-[16%] my-4 lg:mr-8 hover:bg-error hover:opacity-80'>
                        continue
                    </button>
                </div>
            </div>
        </>
    );
}

export default DeniedContents;
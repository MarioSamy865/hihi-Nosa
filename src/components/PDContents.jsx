import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import PerksIcon from '../assets/Perks.png';
import DrawbacksIcon from '../assets/Drawbacks.png';
import PDIcon from '../assets/PD.png';
import SongIcon from '../assets/song.jpg';
import AnghamiIcon from '../assets/anghami.svg';
import SpotifyIcon from '../assets/spotify.svg';
import YoutubeIcon from '../assets/youtube.svg';
import MovieIcon from '../assets/movie.jpg';
import SeriesIcon1 from '../assets/series1.jpg';
import SeriesIcon2 from '../assets/series2.jpg';






const PDContents = () => {
    const navigate = useNavigate();
    return (
        <>
            <div className='absolute flex flex-col w-full h-full justify-between'>
                <div className='bg-heart flex flex-col lg:flex-row w-full items-center justify-between p-2 lg:p-4'>
                    <div className="card card-compact my-2 lg:my-0 w-[90%] lg:w-[30%] bg-secondary shadow-xl flex-row">
                        <figure className='ml-4'><img src={PerksIcon} /></figure>
                        <div className="card-body">
                            <div className="card-actions justify-end">
                                <button onClick={() => { navigate("/perks") }}
                                    className="btn btn-primary w-[60%] bg-secondary-content border-0 text-white hover:bg-secondary-content hover:bg-opacity-80">
                                    Perks</button>
                            </div>
                        </div>
                    </div>

                    <div className='w-[50%] lg:w-[15%] my-2 lg:my-0 lg:h-7 bg-secondary rounded-xl flex justify-center'>
                        <h2 className=' font-bold text-secondary-content'>👈 dating me be like 👉</h2>
                    </div>


                    <div className="card card-compact my-2 lg:my-0 w-[90%] lg:w-[30%] bg-secondary shadow-xl flex-row">
                        <figure className='ml-4'><img src={DrawbacksIcon} /></figure>
                        <div className="card-body">
                            <div className="card-actions justify-end">
                                <button onClick={() => { navigate("/drawbacks") }}
                                    className="btn btn-primary w-[60%] bg-secondary-content border-0 text-white hover:bg-secondary-content hover:bg-opacity-80">
                                    Drawbacks</button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className='bg-heart flex flex-col lg:flex-row w-full text-secondary-content items-center justify-around p-2 lg:p-4'>
                    <div className="card bg-secondary shadow-xl w-[80%] lg:w-[20%] h-[30%] lg:h-[85%]">
                        <figure className='h-[55%]'><img src={SongIcon} /></figure>
                        <div className="card-body h-[45%]">
                            <h2 className="card-title justify-center">My favorite song</h2>
                            <p className='card-actions justify-center'>Creep - Radiohead</p>
                            <div className="card-actions justify-center">
                                <Link to={"https://play.anghami.com/song/15086745?adj_t=dgl0aa8_64v1dnl&adj_campaign=web&adj_adgroup=song&adj_creative=96878950"} target="_blank" rel="noopener noreferrer"><img src={AnghamiIcon} /></Link>
                                <Link to={"https://open.spotify.com/track/70LcF31zb1H0PyJoS1Sx1r?si=7a552e2cd5cd4be8"} target="_blank" rel="noopener noreferrer"><img src={SpotifyIcon} /></Link>
                                <Link to={"https://www.youtube.com/watch?v=XFkzRNyygfk"} target="_blank" rel="noopener noreferrer"><img src={YoutubeIcon} /></Link>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-secondary shadow-xl w-[80%] lg:w-[20%] h-[30%] lg:h-[85%]">
                        <figure className='h-[70%]'><img src={MovieIcon} /></figure>
                        <div className="card-body">
                            <h2 className="card-title justify-center">My favorite Movie</h2>
                            <p className='card-actions justify-center'>Harry Potter</p>
                        </div>
                    </div>

                    <div className="flex flex-col card bg-secondary shadow-xl w-[80%] lg:w-[35%] h-[30%] lg:h-[85%]">
                        <h2 className="card-title text-lg self-center text-center lg:text-xl lg:no-underline underline underline-offset-8">My favorite TV Series</h2>
                        <div className='flex flex-row lg:flex-col h-[94%]'>
                            <figure className='flex flex-col lg:flex-row lg:h-[70%] pt-4 lg:pt-0 justify-between'><img src={SeriesIcon1} className='lg:w-[50%]' /><img src={SeriesIcon2} className='lg:w-[45%]' /></figure>
                            <div className="card-body">
                                <div className='flex flex-col lg:flex-row h-full justify-between'>
                                    <p className='card-actions text-center lg:justify-center pt-12 lg:pt-0 lg:pr-12'>Sherlock</p>
                                    <p className='card-actions text-center lg:justify-center pt-12 lg:pt-0 lg:pl-12'>House M.D.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className='bg-heart flex w-full justify-center text-secondary-content'>
                    <button onClick={() => { navigate("/songs"); localStorage.setItem('PDVisited', true); }}
                        className='bg-secondary-focus btn text-white w-[40%] lg:w-[15%] m-4 hover:bg-secondary-content hover:opacity-80'>
                        next
                    </button>
                </div>
                <p className='bg-primary mt-0.5 w-full text-center font-bold'>you won't be able to come back here so make sure to check both tabs ( perks & drawbacks ) before going forward.</p>
            </div>
        </>
    );
}

export default PDContents;
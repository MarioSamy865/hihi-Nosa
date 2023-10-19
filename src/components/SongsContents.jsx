import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import RecommendationIcon1 from '../assets/Recommendation1.jpg';
import RecommendationIcon2 from '../assets/Recommendation2.jpg';
import AnghamiIcon from '../assets/anghami.svg';
import SpotifyIcon from '../assets/spotify.svg';
import YoutubeIcon from '../assets/youtube.svg';






const SongsContents = () => {
    const navigate = useNavigate();
    const headertext = " بما انك بتحبى تعملى ميموريز بالاغانى و انا كمان ف حبيت احطلك كام اغنية ف الصفحة دى تسمعيهم";
    return (
        <>
            <h2 dir='rtl' className='text-primary shadow-2xl shadow-black rounded-2xl text-2xl m-4 bg-neutral-800 font-serif font-extrabold text-center '>{headertext}</h2>
            <div className='absolute bg-heart w-full h-full'>
                <div className=' w-full h-[90%]'>

                    <div className='flex flex-col h-[100%] lg:h-[75%] lg:flex-row w-full text-secondary-content items-center justify-evenly p-2 lg:p-4'>
                        <div className="card bg-secondary shadow-xl w-[75%] lg:w-[20%] h-[45%] lg:h-[90%]">
                            <figure><img src={RecommendationIcon1} /></figure>
                            <div className="card-body">
                                <h2 className="card-title justify-center">Recommendation 1</h2>
                                <p className='card-actions justify-center'>Enty El Sabab - BigSam</p>
                                <div className="card-actions justify-center">
                                    <Link to={"https://play.anghami.com/song/1046047067?adj_t=dgl0aa8_64v1dnl&adj_campaign=web&adj_adgroup=song&adj_creative=96878950"} target="_blank" rel="noopener noreferrer"><img src={AnghamiIcon} /></Link>
                                    <Link to={"https://open.spotify.com/track/1ruuItwvqs8isoAZAs0a68?si=6c3b8a1388bb41c1"} target="_blank" rel="noopener noreferrer"><img src={SpotifyIcon} /></Link>
                                    <Link to={"https://www.youtube.com/watch?v=6pHiSuEuFFA"} target="_blank" rel="noopener noreferrer"><img src={YoutubeIcon} /></Link>
                                </div>
                            </div>
                        </div>

                        <div className="card bg-secondary shadow-xl w-[75%] lg:w-[20%] h-[45%] lg:h-[90%]">
                            <figure><img src={RecommendationIcon2} /></figure>
                            <div className="card-body">
                                <h2 className="card-title justify-center">Recommendation 2</h2>
                                <p className='card-actions justify-center'>Just The Two Of Us</p>
                                <div className="card-actions justify-center">
                                    <Link to={"https://play.anghami.com/song/455222?adj_t=dgl0aa8_64v1dnl&adj_campaign=web&adj_adgroup=song&adj_creative=96878950"} target="_blank" rel="noopener noreferrer"><img src={AnghamiIcon} /></Link>
                                    <Link to={"https://open.spotify.com/track/5fdNHVZHbWB1AaXk4RBGVD?si=2e6128228d8d4607"} target="_blank" rel="noopener noreferrer"><img src={SpotifyIcon} /></Link>
                                    <Link to={"https://www.youtube.com/watch?v=v8oqbWrP1QY&t=51s"} target="_blank" rel="noopener noreferrer"><img src={YoutubeIcon} /></Link>
                                </div>
                            </div>
                        </div>
                    </div>



                    <div className='flex w-full justify-center text-secondary-content'>
                        <button onClick={() => { navigate("/final"); localStorage.setItem('SongsVisited', true); }}
                            className='bg-secondary-focus btn text-white w-[40%] lg:w-[15%] m-4 hover:bg-secondary-content hover:opacity-80'>
                            next
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SongsContents;
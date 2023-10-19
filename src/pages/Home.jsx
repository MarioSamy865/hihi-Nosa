import React, { useEffect } from 'react';
import HomeContents from "../components/HomeContents"
import { useNavigate } from 'react-router-dom';

export default function Home() {
    let navigate = useNavigate();
    let visited = localStorage.getItem('HomeVisited');
    useEffect(() => {
        if (visited) {
            navigate("/error");
        }
    }, []);

    return (
        <div className='bg-primary w-full h-full overflow-auto bg-heart'>
            <HomeContents />
        </div>
    );
}



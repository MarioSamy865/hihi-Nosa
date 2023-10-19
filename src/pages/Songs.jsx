import React, { useEffect } from 'react';
import SongsContents from "../components/SongsContents"
import { useNavigate } from 'react-router-dom';

export default function Songs() {
    let navigate = useNavigate();
    let visited = localStorage.getItem('SongsVisited');
    useEffect(() => {
        if (visited) {
            navigate("/error");
        }
    }, []);

    return (
        <div className='bg-primary w-full h-full overflow-auto bg-heart'>
            <SongsContents />
        </div>
    );
}
import React, { useEffect } from 'react';
import FinalContents from "../components/FinalContents"
import { useNavigate } from 'react-router-dom';

export default function Final() {
    let navigate = useNavigate();
    let visited = localStorage.getItem('FinalVisited');
    useEffect(() => {
        if (visited) {
            navigate("/error");
        }
    }, []);

    return (
        <div className='bg-primary w-full h-full overflow-auto bg-heart'>
            <FinalContents />
        </div>
    );
}
import React, { useEffect } from 'react';
import LuckyContents from "../components/LuckyContents"
import { useNavigate } from 'react-router-dom';

export default function Lucky() {
    let navigate = useNavigate();
    let visited = localStorage.getItem('LuckyVisited');
    useEffect(() => {
        if (visited) {
            navigate("/error");
        }
    }, []);

    return (
        <div className='bg-primary w-full h-full overflow-auto'>
            <LuckyContents />
        </div>
    );
}
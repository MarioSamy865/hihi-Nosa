import React, { useEffect } from 'react';
import PerksContents from "../components/PerksContents"
import { useNavigate } from 'react-router-dom';

export default function Perks() {
    let navigate = useNavigate();
    let visited = localStorage.getItem('PDVisited');
    useEffect(() => {
        if (visited) {
            navigate("/error");
        }
    }, []);

    return (
        <div className='h-screen bg-heart'>
            <PerksContents />
        </div>
    );
}
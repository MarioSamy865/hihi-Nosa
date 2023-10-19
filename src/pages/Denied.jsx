import React, { useEffect } from 'react';
import DeniedContents from "../components/DeniedContents"
import { useNavigate } from 'react-router-dom';

export default function Denied() {
    let navigate = useNavigate();
    let visited = localStorage.getItem('DeniedVisited');
    useEffect(() => {
        if (visited) {
            navigate("/error");
        }
    }, []);

    return (
        <div className='h-screen bg-broken-heart'>
            <DeniedContents />
        </div>
    );
}
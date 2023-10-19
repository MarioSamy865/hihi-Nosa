import React, { useEffect } from 'react';
import UnluckyContents from "../components/UnluckyContents"
import { useNavigate } from 'react-router-dom';

export default function Unlucky() {
    let navigate = useNavigate();
    let visited = localStorage.getItem('UnluckyVisited');
    useEffect(() => {
        if (visited) {
            navigate("/error");
        }
    }, []);

    return (
        <div className='h-screen bg-broken-heart'>
            <UnluckyContents />
        </div>
    );
}
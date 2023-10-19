import React, { useEffect } from 'react';
import DrawbacksContents from "../components/DrawbacksContents"
import { useNavigate } from 'react-router-dom';

export default function Drawbacks() {
    let navigate = useNavigate();
    let visited = localStorage.getItem('PDVisited');
    useEffect(() => {
        if (visited) {
            navigate("/error");
        }
    }, []);

    return (
        <div className='h-screen bg-heart'>
            <DrawbacksContents />
        </div>
    );
}
import React, { useEffect } from 'react';
import PDContents from "../components/PDContents"
import { useNavigate } from 'react-router-dom';

export default function PD() {
    let navigate = useNavigate();
    let visited = localStorage.getItem('PDVisited');
    useEffect(() => {
        if (visited) {
            navigate("/error");
        }
    }, []);

    return (
        <div>
            <PDContents />
        </div>
    );
}
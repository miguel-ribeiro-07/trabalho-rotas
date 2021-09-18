import React from 'react'
import novotec from '../../assets/img/novotec.jpg'
import { Link } from "react-router-dom";
import '../style.css'

export default function Novotec() {
    return (
        <div>
            <div className="images">
            <img src={novotec} alt="M" className="alertimg"></img>
            </div>
            <div className="voltar">
            <Link to = "/fatec"> Voltar </Link>
            </div>
        </div>
    )
}
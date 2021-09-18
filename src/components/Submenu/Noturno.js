import React from 'react'
import not from '../../assets/img/noturno.jpg'
import { Link } from "react-router-dom";
import '../style.css'

export default function Noturno() {
    return (
        <div>
            <div className="images">
            <img src={not} alt="M" className="alertimg"></img>
            </div>
            <div className="voltar">
            <Link to = "/fatec"> Voltar </Link>
            </div>
        </div>
    )
}
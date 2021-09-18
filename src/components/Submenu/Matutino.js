import React from 'react'
import mat from '../../assets/img/matutino.jpg'
import { Link } from "react-router-dom";
import '../style.css'

export default function Matutino() {
    return (
        <div>
            <div className='images'>
            <img src={mat} alt="M" className="alertimg"></img>
            </div>
            <div className="voltar">
            <Link to = "/fatec"> Voltar </Link>
            </div>
        </div>
    )
}
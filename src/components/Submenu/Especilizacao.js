import React from 'react'
import espec from '../../assets/img/especializacao.jpg'
import { Link } from "react-router-dom";
import '../style.css'

export default function Especializacao() {
    return (
        <div>
            <div className='images'>
            <img src={espec} alt="M" className="alertimg"></img>
            </div>
            <div className="voltar">
            <Link to = "/fatec"> Voltar </Link>
            </div>
        </div>
    )
}
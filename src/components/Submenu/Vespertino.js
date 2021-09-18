import React from 'react'
import vesp from '../../assets/img/vespertino.jpg'
import { Link } from "react-router-dom";
import '../style.css'

export default function Vespertino() {
    return (
        <div>
            <div className="images">
            <img src={vesp} alt="M" className="alertimg"></img>
            </div>
            <div className="voltar">
            <Link to = "/fatec"> Voltar </Link>
            </div>
        </div>
    )
}
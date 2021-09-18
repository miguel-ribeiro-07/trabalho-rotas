import React from 'react'
import { useHistory } from 'react-router-dom'
import { Link } from "react-router-dom";
import './Hearders.css'

export default function Header(props) {
    const history = useHistory()

    return (
        <header className="menu">
        <nav className="navMenu">
            <ul>
                <li> <Link to = "/matutino" className="mat"> Matutino </Link> </li>
                <li> <Link to = "/vespertino" className="vesp"> Vespertino </Link> </li>
                <li> <Link to = "/noturno" className="not"> Noturno </Link> </li>
                <li> <Link to = "/novotec" className="novotec"> Novotec </Link> </li>
                <li> <Link to = "/especializacao" className="espec"> Especialização </Link> </li>
            </ul>
        </nav>
    </header>
    )
}
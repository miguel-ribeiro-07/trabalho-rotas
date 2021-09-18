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
                <li> <Link to = "/fafibe" className="fafibe"> FAFIBE </Link> </li>
                <li> <Link to = "/fatec" className="fatec"> FATEC </Link> </li>
                <li> <Link to = "/ufscar" className="ufscar"> UFSCAR </Link> </li>
                <li> <Link to = "/unifran" className="unifran"> UNIFRAN </Link> </li>
                <li> <Link to = "/usp" className="usp"> USP </Link> </li>
            </ul>
        </nav>
    </header>
    )
}
import React from 'react'
import { useHistory } from 'react-router'
import { Link } from "react-router-dom";
import '../../style.css'

export default function Fafibe() {
    const history = useHistory()

    return(
        <>
            <div className='images'>
                <img className='logoPage' alt='fafibe' src={require('../../../assets/img/fafibe.jpg').default} />   
            </div>
            <div className="inicio">
            <Link to = "/"> Inicio </Link>
            </div>     
        </>
    )
}
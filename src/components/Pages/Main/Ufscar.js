import React from 'react'
import { useHistory } from 'react-router'
import { Link } from "react-router-dom";
import '../../style.css'

export default function Ufscar() {
    const history = useHistory()

    return(
        <>
            <div className='images'>
                <img className='logoPage' alt='ufscar' src={require('../../../assets/img/ufscar.png').default} />
                
            </div>
            <div className="inicio">
            <Link to = "/"> Inicio </Link>
            </div>    
        </>
    )
}
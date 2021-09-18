import React from 'react'
import '../style.css'

export default function Homepage() {
    return(
        <>
            <div className='images'>
                <img alt='ensinosuperior' src={require('../../assets/img/ensinosuperior.jpg').default} />
            </div>
        </>
    )
}
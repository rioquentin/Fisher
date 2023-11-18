import React from 'react'
import '../Styles/Play.css'
import './Game.js'
import { Link } from 'react-router-dom'


function Play() {
    return ( 
        <div className='PlayScreen'>
            <div className='ButtonContainer'>
                <Link className='Button' to='/game'>Play</Link>
            </div> 
        </div>
     );
}

export default Play;
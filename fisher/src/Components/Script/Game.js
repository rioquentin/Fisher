import React from 'react'
import '../Styles/Game.css'
import '../Functions/ToggleMenu.js'
import { Link } from 'react-router-dom'
import ToggleMenu from '../Functions/ToggleMenu.js';

function Game() {
    return ( 
        <div className='GameScreen'>
            <div className='GameContainer'>
                <nav className='GameNav'>
                    <ul className='GameNavList'>
                        <li className='GameNavItem'>Level : </li>
                        <li className='GameNavItem'>Money : </li>
                    </ul>
                    <h1>SeaKer</h1>
                    <Link className='Settings' to="#">Settings</Link>
                </nav>
                <div className='GameBoard'>
                    <button className='G' onClick={ToggleMenu}>PARTIR EN EXPEDITION !</button>
                </div>
                <div className='ExpeditionMenu'>
                    <h1 className='MenuTitle'>Expeditions</h1>
                    <ul className='MenuList'>
                        <li className='ListContent'><p>Lieu : ??? Destination : ???</p><button href='#'>Partir</button></li>
                        <li className='ListContent'><p>Lieu : ??? Destination : ???</p><button href='#'>Partir</button></li>
                        <li className='ListContent'><p>Lieu : ??? Destination : ???</p><button href='#'>Partir</button></li>
                    </ul>
                    <button className='BackButton' onClick={ToggleMenu}>Retour</button>
                </div>
            </div>
        </div>
     );
}

export default Game;
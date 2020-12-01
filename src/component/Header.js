import React from 'react'
import { Link } from 'react-router-dom'
import {ReactComponent as Dog} from '../Assets/dogs.svg'

function Header() {
    return (      
        <header className="header">
          
            <nav className="container">
            <Link to="/" aroa-aria-label="dogs" className="logo"> <Dog /></Link>      
        
            <Link to="/login" className="login">Login</Link>      
            </nav>               
        </header>
    )
    }
export default Header

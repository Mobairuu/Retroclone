import React from 'react';
import './header.styles.css';
import { Button } from '@material-ui/core';



const Header = (props) =>{
   return ( 
        <div className="header-container">
            <nav className="header-nav">
            <ul className="navbar-left">
                <li><span className="title">RetroCrush</span></li>
                <li>BROWSE</li>
            </ul>
            <ul className="navbar-right">
                <li><Button id="prem-btn"  variant="contained" color="primary">TRY PREMIUM</Button></li>
                <li>RANDOM</li>
                <li>SEARCH</li>
                <li><Button variant="contained" color="primary">LOGIN</Button></li>
                            
            </ul>
            </nav>
        </div>
       
    )
}; export default Header; 

import React from 'react';
import {NavLink} from 'react-router-dom';
import "./style.css";

export default function Header() {
    
    return (
        <div class="header">
            <NavLink to="/" exact className="link" activeClassName="active">SKATERS</NavLink>
            <NavLink to="/addnew" className="link" activeClassName="active">ADDNEW</NavLink>
        </div>
    )
}

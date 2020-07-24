import React from 'react';
import "./style.css";

export default function Header(props) {
    return (
        <div class="header">
            <a href="/skaters" class="link">SKATERS</a>
            <a href="/add" class="link active">ADDNEW</a>
        </div>
    )
}

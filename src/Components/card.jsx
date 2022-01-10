import React from "react";
import '../App.css';

function Card(props) {
    return (
        <div className="card" style={{ width: '14rem' }}>
            <img src={props.src} className="card-img" alt="..." />
        </div>
    );
}

export default Card;
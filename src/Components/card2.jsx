import React from "react";

function Card(props) {
    console.log(props.venue);
    return (
        <div className="card-width col-lg-3 col-md-6 col-sm-10">
            <div className="card">
                <img src={props.src} alt="..." />
                <div className="card-body">
                    <h5 className="card-title" style={{ textAlign: 'center' }} >{props.venue.title}</h5>
                    <span className="card-text">capacity: 50</span>
                    <br />
                    <span className="card-text">Area: Shahra e Faisal</span>
                </div>
            </div>
        </div>
    );
}

export default Card;

import React from "react";
import {Link} from 'react-router-dom';

function Card2(props) {

    let venue = props.venue.id;
    return (
        <div className="card-width col-lg-3 col-md-6 col-sm-10">
            <div className="card2">
                <img className="card-img" src={props.src} alt="..." />
                {/* <i class="fas fa-heart"></i> */}
                <div className="card-body">
                    <h5 className="card-title" style={{ textAlign: 'center' }} >{props.venue.title}</h5>
                    <span className="card-text cardText">capacity: 50</span>
                    <br />
                    <span className="card-text cardText">Area: Shahra e Faisal</span>
                    <Link to="/venueDetail"><button type="button" class="btn btn-secondary btn-block mt-1 selectButton">Select</button></Link>
                </div>
            </div>
        </div>
    );
}

export default Card2;
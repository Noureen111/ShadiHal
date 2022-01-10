import React from "react";

function Dropdown() {
    return (
        <div className="search">
            <div class="dropdown dopdownVenues">
                <button class="dropbtn dropButton"><i className="fa fa-search"></i>Search According to</button>
                <div class="dropdown-content dropdownContent">
                    <a href="#">Venue</a>
                    <a href="#">Rating</a>
                    <a href="#">Max Capacity</a>
                    <a href="#">Area</a>
                </div>
            </div>
        </div>
    );
}

export default Dropdown;
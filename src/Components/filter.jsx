import React from "react";

function Filter() {
    return (
        <div>
            <label className="container filterContainer">Rating
                <input type="checkbox" defaultChecked="checked" />
                <span className="checkmark" />
            </label>
            <label className="container filterContainer">Max Capacity
                <input type="checkbox" />
                <span className="checkmark" />
            </label>
            <label className="container filterContainer">Area
                <input type="checkbox" />
                <span className="checkmark" />
            </label>
            <label className="container filterContainer">Venue Type
                <input type="checkbox"  />
                <span className="checkmark" />
            </label>
        </div>
    );
}

export default Filter;
import React from "react";

function Radio() {
    return (
        <div>
            <label className="container">One
                <input type="radio" defaultChecked="checked" name="radio" />
                <span className="checkmark" />
            </label>
            <label className="container">Two
                <input type="radio" name="radio" />
                <span className="checkmark" />
            </label>
            <label className="container">Three
                <input type="radio" name="radio" />
                <span className="checkmark" />
            </label>
            <label className="container">Four
                <input type="radio" name="radio" />
                <span className="checkmark" />
            </label>
        </div>
    );
}

export default Radio;
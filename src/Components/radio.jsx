import React from "react";

function Radio() {
    return (
        <div>
            <label className="container radioContainer">One
                <input type="radio" defaultChecked="checked" name="radio" />
                <span className="checkmark" />
            </label>
            <label className="container radioContainer">Two
                <input type="radio" name="radio" />
                <span className="checkmark" />
            </label>
            <label className="container radioContainer">Three
                <input type="radio" name="radio" />
                <span className="checkmark" />
            </label>
            <label className="container radioContainer">Four
                <input type="radio" name="radio" />
                <span className="checkmark" />
            </label>
        </div>
    );
}

export default Radio;
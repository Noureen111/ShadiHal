import React from "react";

function Filter(props) {
    return (
        <label class="container">{props.labelValue}
            <input type="checkbox" />
            <span class="checkmark"></span>
        </label>
    );
}

export default Filter;
import React from "react";

function Comment(props) {
    return (
        <div>
            <div className="row">
                <i className="userIcon fa fa-user"></i>
                <span><h5 className="username">{props.username}</h5></span>
            </div>

            <div className="row title justify-content-between mt-2">
                <h5 className="col">{props.title}</h5>

                <div className="col mt-1">
                    <div className="row justify-content-end mt-1">
                        <span class="fa fa-star checkedStars"></span>
                        <span class="fa fa-star checkedStars"></span>
                        <span class="fa fa-star checkedStars"></span>
                        <span class="fa fa-star stars"></span>
                        <span class="fa fa-star stars"></span>
                    </div>
                </div>
            </div>

            <div className="row comment">
                <p>{props.comment}</p>
            </div>
            <hr />
        </div>
    );
}

export default Comment;
import React from "react";

function CommentForm() {
    return (
        <div>
            <form action="">
                <input className="email" type="email" name="" id="" placeholder="Email" />
                <select required id="position" className="drop">
                    <option className="opt" value="Selected">Rate</option>
                    <option className="opt" value="">1</option>
                    <option className="opt" value="">2</option>
                    <option className="opt" value="">3</option>
                    <option className="opt" value="">4</option>
                    <option className="opt" value="">5</option>
                </select>
                <textarea className="email" name="" id="" cols="30" rows="4"></textarea>
            </form>
        </div>
    );
}

export default CommentForm;
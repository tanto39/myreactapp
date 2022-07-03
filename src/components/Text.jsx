import React, {useState} from "react";

const Text = function() {
    const [text, setText] = useState('text');

    function changeText(event) {
         setText(event.target.value);
    };

    return(
        <div className="text">
            <h2>{text}</h2>
            <input
                type = "text"
                value = {text}
                onChange = {changeText}
            />
        </div>
    );
};

export default Text;
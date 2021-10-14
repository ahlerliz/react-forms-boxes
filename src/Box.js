import React from "react";

function Box({ removeBox, height, width, color, id }) {
    function removeMe() {
        removeBox(id);
    };

    const style = {
        height: height,
        width: width,
        backgroundColor: color
    };
    
    return (
        <div key={id}>
            <div style={style}></div>
            <button onClick={removeMe}>Delete this Box!</button>
        </div>
    )
}

export default Box;
import React, { useState } from "react";
import NewBoxForm from "./NewBoxForm";
import { v4 as uuid } from "uuid";
import Box from "./Box";


function BoxList() {
    const [boxList, setBoxList] = useState([]);

    function addBox(box) {
        let newBox = { ...box, id: uuid() }
        setBoxList((boxes => [...boxes, newBox]));
    };

    function removeBox(id) {
        setBoxList(boxes => boxes.filter(box => box.id !== id))
    };

    function renderBoxes() {
        return (
            <div>
                {boxList.map(({id,width, height, color}) => (<Box id={id} height={height} width={width} color={color} removeBox={removeBox} />))}
            </div>
        )
    }

    return (
        <div>
            <NewBoxForm addBox={addBox} />
            {renderBoxes()}
        </div>
    )
}

export default BoxList;
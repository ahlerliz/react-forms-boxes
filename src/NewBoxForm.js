import React, {useState} from "react";

const INITIAL_STATE = { height: "",
                        width: "",
                        color: ""};

                        
                        

function NewBoxForm({addBox}){
    const [ formData, setFormData ] = useState(INITIAL_STATE);
    
    function handleSubmit(evt){
        evt.preventDefault();
        addBox(formData);
        setFormData(INITIAL_STATE);
    }

    function handleChange(evt){
        const {name, value} = evt.target
        setFormData( oldData => ({
            ...oldData,
            [name]: value
        }))
    }
    
    return (
        <form onSubmit={handleSubmit}>
          <label htmlFor="height">Height:</label>
          <input
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
          />

        <label htmlFor="width">Width:</label>
          <input
            id="width"
            name="width"
            value={formData.width}
            onChange={handleChange}
          />
    
          <label htmlFor="color">Background color:</label>
          <input
            id="color"
            name="color"
            value={formData.color}
            onChange={handleChange}
          />
    
          <button>Add a new box!</button>
        </form>
      );

}



export default NewBoxForm;
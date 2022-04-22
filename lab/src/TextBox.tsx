import React from 'react';
type propsType = {
    label: string;
    change: any;
}
function TextBox(props : propsType) {
    return (
        <div>
            <label>{props.label}</label>
            <input type="text" onChange={event => props.change(event.target.value)}></input>
        </div>
    );
}

export default TextBox

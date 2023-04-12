import React from 'react';

const Form2 = (props) => {
    return (
        <>
            <input type='text' value={props.value} onChange={props.whenChanged} />
        </>
    )
}

export default Form2;
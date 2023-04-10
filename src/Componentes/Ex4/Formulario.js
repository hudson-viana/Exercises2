import React from 'react';

const Formulario = () => {
    return (
        <>
            <form>
                <label for="name"></label>
                <input id="name" type="text" name="name">
                    
                <label for="ano"></label>
                <input id="ano" type="text" name="ano" >
                    
                <label for="prateleira"></label>
                <input id="prateleira" type="text" name="prateleira" >
            </form>
        </>
    )
};

export default Formulario


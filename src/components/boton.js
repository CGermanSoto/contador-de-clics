import React from "react";

function Boton({texto, clickButton, eventClick}){
    return (
        <button
            className={clickButton ? 'click-button' : 'reset-button'}
            onClick={eventClick}>
            {texto}
        </button>
    );
}

export default Boton;
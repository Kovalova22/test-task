import React from 'react'
import './ModalAdd.css'



const ButtonAdd = ( {buttonRef, showModal} ) => {
        return (
     
            <button className="main-modal-button" ref={buttonRef} onClick= {showModal}>Add hot-dog</button>

                
        );
    };
                  
export default ButtonAdd;

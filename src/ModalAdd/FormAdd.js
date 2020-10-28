import React, {useState} from 'react';
import './ModalAdd.css';


export const Modal = ({   
  modalRef,
  buttonRef,
  closeModal,
  
  
}) => { 

  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [description, setDescripton] = useState('');
  const [image, setImage] = useState('');
  
  
  const onSubmit = async e => {
    e.preventDefault();
    try {
      const body = {name, title, description, image};
      
      const response = await fetch("http://localhost:3000/hotdogs", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body)
        
      });
      console.log(response);
      
      window.location = "/";
    } catch (err) {
      console.error(err.message);
      
    }
  }

    return (
  
   
    <div className='modal-addHD' ref={modalRef}>
    <div className='modal-body-addHD'>
    <h4>Add new hot-dog</h4>
    
                            <form onSubmit={onSubmit}>
                              <div className = "modal-add-input">
                             <input style={{margin:"5px"}} type="text" placeholder="Name" value= {name} 
                             onChange = {e => setName(e.target.value) }/>
                             <input style={{margin:"5px"}} type="text" placeholder="Title" value= {title}
                             onChange = {e => setTitle(e.target.value) }/>
                             <input style={{margin:"5px"}} type="text" placeholder="Description" value= {description}
                             onChange = {e => setDescripton(e.target.value) }/>
                             <input style={{margin:"5px"}} type="text" placeholder="Image" value= {image}
                             onChange = {e => setImage(e.target.value) }/>
                             </div>
                    
                    <div className="modal-button" ref={modalRef}>
                    <button type='button' className="modal-button-item" ref={buttonRef} onClick={closeModal}>No thanks</button>
                    <button type='submit' className="modal-button-item" onSubmit={onSubmit} >Add</button> 
                    
      </div>
      </form>
       </div> 
       
       </div>
    
    
    );        
};
export default Modal;
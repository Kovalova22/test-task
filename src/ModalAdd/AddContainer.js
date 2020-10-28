import React, { Component } from 'react';
import { Modal } from './FormAdd';
import ButtonAdd from './ModalAdd';


export class Container extends Component {
  state = { isShown: false };
  showModal = () => {
    this.setState({ isShown: true }, () => {
      this.closeButton.focus();
    });
  
  };
  closeModal = () => {
    this.setState({ isShown: false });
    this.ButtonAdd.focus();
   
  };
  onClickOutside = (event) => {
    if (this.modal && this.modal.contains(event.target)) return;
    this.closeModal();
  };


  render() {
    return (
      <React.Fragment>
        <ButtonAdd
          showModal={this.showModal}
          buttonRef={(n) => (this.ButtonAdd = n)}
      
        />
        {this.state.isShown ? (
          <Modal
            
            modalRef={(n) => (this.modal = n)}
            buttonRef={(n) => (this.closeButton = n)}
            closeModal={this.closeModal}
            onClickOutside={this.onClickOutside}
            
          />
        ) : null}
      </React.Fragment>
    );
  }
}

export default Container;

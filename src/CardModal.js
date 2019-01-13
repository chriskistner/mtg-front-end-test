import React, { Component } from 'react';
import './CardData.css';
import Modal from 'react-modal';

export default class CardModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
    }

    closeModal = () => {
        this.setState({
            isOpen: false
        });
      }

    render() {
        const customStyles = {
            content : {
              top                   : '50%',
              left                  : '50%',
              right                 : 'auto',
              bottom                : 'auto',
              marginRight           : '-50%',
              transform             : 'translate(-50%, -50%)'
            }
          };

        return (
            <Modal>
            <h2>{card}</h2>
            <button onClick={this.closeModal}>close</button>
            <div>I am a modal</div>
            <form>
              <input />
              <button>tab navigation</button>
              <button>stays</button>
              <button>inside</button>
              <button>the modal</button>
            </form>
            </Modal>
        )
    }
}
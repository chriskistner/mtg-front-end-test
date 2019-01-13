import React, { Component } from 'react';
import './CardData.css';
import Modal from 'react-modal';

export default class CardData extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }

    closeModal = () => {
        this.setState({
            isOpen: false
        });
      }

      openModal = () => {
          this.setState({
              isOpen: true
          })
      }

    generateManaTags(element) {
        const type ={
            dark: './images/dark.png',
            light: './images/light.png',
            fire: './images/fire.png',
            life: './images/life.png',
            water: './images/water.png'
        }

        switch (element) {
            case "R":
                return (<img style={{marginLeft: 3}} src='https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/8/87/R.svg?version=3b5a5cc001a7ae6282b24606e9e99715' alt="fire" height="15" width="15" />)

            case "U":
                return <img style={{marginLeft: 3}} src='https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/9/9f/U.svg?version=99a0e26dd02040b072e33af91a6ab198' alt="water" height="15" width="15" />
                
            case "G":
                return <img style={{marginLeft: 3}} src='https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/8/88/G.svg?version=6ebca1fee33aaf3c3fc1cd39a4f782df' alt="life" height="15" width="15" />
                
            case "W":
                return <img style={{marginLeft: 3}} src='https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/8/8e/W.svg?version=6e6c411768c4bf5a947dfa973207799b' alt="light" height="15" width="15" />
                
            case "B":
                return <img style={{marginLeft: 3}} src='https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/2/2f/B.svg?version=0a87a78acd60c4f2074a0c9e4eb651a5' alt="dark" height="15" width="15" />
    
            default:
                return <span className="label label-warning"><b>{element}</b></span>
        } 
    }

    generateManaCost(cost) {
        const points = cost.replace(/[^A-Z0-9 ]/g, "");
        const displayCosts = points.split('')
        return displayCosts.map((point) => this.generateManaTags(point))
    }

    render() {
        const manaCost = this.props.cardData.manaCost;
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
            <div className="row border">
                <div className="col-3"><b><a onClick={() => this.openModal()} href="#">{this.props.cardData.name}</a></b></div>
                <Modal isOpen={this.state.IsOpen} onRequestClose={this.closeModal} style={customStyles} contentLabel="Example Modal">
                    <button onClick={this.closeModal}>close</button>
                    <img style={{marginLeft: 3}} src={this.props.cardData.imageUrl} alt="Card" height="150" width="100" />
                </Modal>
                <div className="col-3"><b>Cost: </b>{this.generateManaCost(manaCost)}</div>
                <div className="col-3"><b>Color: </b>{this.props.cardData.colors}</div>
                <div className="col-3"><b>Type: </b>{this.props.cardData.type}</div>
            </div>
        )
    }
}
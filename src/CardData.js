import React, { Component } from 'react'

export default class CardData extends Component {
    constructor(props) {
        super(props)
        this.state = {}
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
                return (<img src='https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/8/87/R.svg?version=3b5a5cc001a7ae6282b24606e9e99715' alt="fire" height="15" width="15" />)

            case "U":
                return <img src='https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/9/9f/U.svg?version=99a0e26dd02040b072e33af91a6ab198' alt="water" height="15" width="15" />
                
            case "G":
                return <img src='https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/8/88/G.svg?version=6ebca1fee33aaf3c3fc1cd39a4f782df' alt="life" height="15" width="15" />
                
            case "W":
                return <img src='https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/8/8e/W.svg?version=6e6c411768c4bf5a947dfa973207799b' alt="light" height="15" width="15" />
                
            case "B":
                return <img src='https://d1u5p3l4wpay3k.cloudfront.net/mtgsalvation_gamepedia/2/2f/B.svg?version=0a87a78acd60c4f2074a0c9e4eb651a5' alt="dark" height="15" width="15" />
    
            default:
                return element
        } 
    }

    generateManaCost(cost) {
        const points = cost.replace(/[^A-Z0-9 ]/g, "");
        const displayCosts = points.split('')
        return displayCosts.map((point) => this.generateManaTags(point))
    }

    render() {
        const manaCost = this.props.cardData.manaCost;
        return (
            <div className="row border">
                <div className="col-3"><b>Name: </b>{this.props.cardData.name}</div>
                <div className="col-3"><b>Cost: </b>{this.generateManaCost(manaCost)}</div>
                <div className="col-3"><b>Color: </b>{this.props.cardData.colors}</div>
                <div className="col-3"><b>Type: </b>{this.props.cardData.type}</div>
            </div>
        )
    }
}
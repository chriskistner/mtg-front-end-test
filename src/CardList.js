import React from 'react'
import CardData from './CardData.js'

export default function cardRow(props) {
    const cards = props.foundCards;

    return (
        <div className="container">
        {
            cards.slice(0,20).map(card => <CardData cardData={card} />)
            }
        </div>
    )

}
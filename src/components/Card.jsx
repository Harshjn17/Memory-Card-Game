import React from 'react'

const Card = ({ card, onClick }) => {
  return (
    <div className={`card ${card.isFlipped ? "flipped" : ""}`} onClick={() => onClick(card)}>
        <div id='front-card' className='card'>?</div>
        <div id='back-card' className='card'>{card.value}</div>
    </div>
  )
}

export default Card
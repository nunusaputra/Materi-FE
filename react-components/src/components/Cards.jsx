import React from 'react'

const Cards = ({ item }) => {
    return (
        <div className='card' key={item.id} style={{ backgroundColor: item.color }}>
            <div className='card-img'>
                <img src={item.image} alt={item.name} />
            </div>
            <div className='card-detail'>
                <h2>{item.name}</h2>
                <span>{item.type}</span>
            </div>
        </div>
    )
}

export default Cards

import React from 'react'
import './Card.css'
const Card = ({cardData}) => {
  return (<>
  <div className='cards'>
    <div className='cardName'>{`${cardData.name.first} ${cardData.name.last}`}</div>
    <div className='cardBody'>
        <p>{cardData.location.street.number}<br/>
        {cardData.location.street.name}
        <br/>
        {cardData.location.city}<br/>
        {cardData.location.postcode}<br/>
        {cardData.location.state}<br/>
        {cardData.location.country}
        </p>
        <p className='cellPhone'>
            Cell: {cardData.cell}<br/>
            Phone: {cardData.phone}
        </p>
        <div className='cardBodyImg'>
            <img src={cardData.picture.medium}/>
        </div>
    </div>
    </div>
</>
  )
}

export default Card
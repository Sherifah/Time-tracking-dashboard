import React from 'react'

function Card(props) {
  return (
    <div className='report-card' style={{"backgroundColor": `${props.color}`}}>
        <img src={props.icon} className='card-icon'/>
        <div className='card-details'>
            <div className='options'>
                <p className='card-title'>{props.title}</p>
                <img src='/images/icon-ellipsis.svg' className='card-menu' />
            </div>
            <div className='timeframes'>
              <h2 className='current-time'>{props.currentTime}hrs</h2>
              <p className='previous-time'>Last Week - {props.previousTime}hrs</p>
            </div>
            
        </div>
    </div>
  )
}

export default Card

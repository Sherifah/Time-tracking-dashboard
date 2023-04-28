import React from 'react'

function Card(props) {
  return (
    <div className='report-card' style={{"backgroundColor": `${props.color}`}}>
        <img src={props.icon} className='card-icon'/>
        <div className='card-details'>
            <div>
                <p className='card-title'>Work</p>
                <img src='/images/icon-ellipsis.svg' className='card-menu' />
            </div>
            <h2 className='current-time'>32hrs</h2>
            <p className='previous-time'>Last Week - 36hrs</p>
        </div>
    </div>
  )
}

export default Card

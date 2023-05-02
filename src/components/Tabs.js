import React from 'react'


function Tabs(props) {
    const status = props.isPressed ? "active" : "";
    
    return (
    <button 
        className={`tab ${status}`} 
        onClick={() => props.setFilter(props.name)}>{props.name}</button>
    )
}

export default Tabs

import React from 'react'
import Card from './components/Card'

function App() {
  return (
    <div className='dashboard'>
      <div className='intro'>
        <div>
          <div className='worker'>
            <img src='/images/image-jeremy.png' className='worker-photo'/>
            <div>Report for</div>
            <h1 className='worker-name'>Jeremy Robinson</h1>
          </div>
          <div className='report-tabs'>
            <button className='tab'>Daily</button>
            <button className='tab active'>Weekly</button>
            <button className='tab'>Monthly</button>
          </div> 
        </div>
      </div>
      <div className='cards'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default App

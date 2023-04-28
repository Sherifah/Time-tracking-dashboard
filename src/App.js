import React, {useState} from 'react'
import Card from './components/Card'
import data from './data.js'

function App() {

  const [cardTime, setCardTime] = useState('Daily');

  function changeTime() {

  }

  const cardList = data.map((item, index) =>
    <Card 
      key={index}
      icon={item.icon}
      title={item.title}
      color={item.color}
       />
  )


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
        {cardList}
      </div>
    </div>
  )
}

export default App

import React, {useState} from 'react'
import Card from './components/Card'
import data from './data.js'
import Tabs from './components/Tabs';

const tabs=["Daily", "Weekly", "Monthly"];

function App() {

  const [filter, setFilter] = useState("Daily")

  const cardList = data.map((item, index) => {
    if (filter === "Daily") {
      return <Card 
      key={index}
      icon={item.icon}
      title={item.title}
      color={item.color}
      currentTime={item.timeframes.daily.current}
      previousTime={item.timeframes.daily.previous}
       />
    } 
    else if (filter === "Weekly") {
      return <Card 
      key={index}
      icon={item.icon}
      title={item.title}
      color={item.color}
      currentTime={item.timeframes.weekly.current}
      previousTime={item.timeframes.weekly.previous}
       />
    }
    else if(filter === "Monthly") {
      return <Card 
      key={index}
      icon={item.icon}
      title={item.title}
      color={item.color}
      currentTime={item.timeframes.monthly.current}
      previousTime={item.timeframes.monthly.previous}
       />
    }
  }
  )

  const tablist = tabs.map((name, index) => 
      <Tabs
        key={index}
        name={name}
        isPressed={ name === filter }
        setFilter={setFilter} />
  )

  return (
    <div className='dashboard'>
      <div className='intro'>
        <div>
          <div className='worker'>
            <img src='/images/image-jeremy.png' className='worker-photo'/>
            <div>
              <div>Report for</div>
              <h1 className='worker-name'>Jeremy Robinson</h1>
            </div>
          </div>
          <div className='report-tabs'>
            {tablist}
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

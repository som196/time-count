import {useState, useEffect} from 'react'
import Header from '../Header'
import './index.css'

const Normaltime = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000) // Update every second

    return () => clearInterval(intervalId)
  }, [])

  const formattedTime = currentTime.toLocaleTimeString()

  return (
    <div className="current-time-container">
      <Header />
      <div className="current-time-inner-container">
        <h1 className="current-time-heading">Current Time:</h1>
        <p className="current-time-para">{formattedTime}</p>
      </div>
    </div>
  )
}

export default Normaltime

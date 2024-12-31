import {useState, useEffect} from 'react'
import Header from '../Header'
import './index.css'

const Remainingtime = () => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000) // Update every second

    return () => clearInterval(intervalId)
  }, [])

  const hours = currentTime.getHours()
  const minutes = currentTime.getMinutes() / 60 // Convert minutes to hours
  const seconds = currentTime.getSeconds() / 3600 // Convert seconds to hours

  const totalCurrentHours = hours + minutes + seconds

  const remainingHours = 24 - totalCurrentHours

  const remainingMinutes = Math.floor(
    (remainingHours - Math.floor(remainingHours)) * 60,
  )

  const remainingSeconds =
    Math.round((remainingHours - Math.floor(remainingHours)) * 60 * 60) % 60

  const spentHours = Math.floor(totalCurrentHours)
  const spentMinutes = Math.floor((totalCurrentHours - spentHours) * 60)
  const spentSeconds = Math.round(
    (totalCurrentHours - spentHours - spentMinutes / 60) * 3600,
  )

  const formatTime = time => time.toString().padStart(2, '0')

  return (
    <div className="remaining-time-container">
      <Header />
      <h1 className="remaining-time-heading">
        Remaining in your day: {formatTime(Math.floor(remainingHours))}:
        {formatTime(remainingMinutes)}:{formatTime(remainingSeconds)}
      </h1>
      <h1 className="remaining-time-heading">
        You have already spent: {formatTime(spentHours)}:
        {formatTime(spentMinutes)}:{formatTime(spentSeconds)} in your day
      </h1>
    </div>
  )
}

export default Remainingtime

import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const App = () => {
  const [timeLeft, setTimeLeft] = useState(60 * 60 * 24)

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime > 0 ? prevTime - 1 : 0)
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const hours = Math.floor(timeLeft / 3600)
  const minutes = Math.floor((timeLeft % 3600) / 60)
  const seconds = Math.floor(timeLeft % 60)
  return (
    <div>
      <h1>Countdown Indonesia VS Arab Saudi</h1>
      {timeLeft !== 0 ? (
        <h2>{hours} Hours : {minutes} Minutes : {seconds} Seconds</h2>
      ) : (
        <h1 className='show'>Acara Sudah Dimulai 🎉</h1>
      )}
    </div>
  )
}

export default App

import React, { useState, useEffect } from 'react';

const App = () => {

  const [count, setCount] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [mousePosition, setMousePosition] = useState({x: null,y: null});
  const [status, setStatus] = useState(navigator.onLine)

  useEffect( () => {
    document.title = `You have clicked ${count} times`;
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('online', handleOnline)
    window.addEventListener('offline', handleOffline)


    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.addEventListener('online', handleOnline)
      window.addEventListener('offline', handleOffline)
    }
  }, [count])

  const incrementCount = () => {
    setCount(prevCount => prevCount + 1)
  }

  const handleMouseMove = event => {
    setMousePosition({
      x: event.pageX,
      y: event.pageY
    })
  }

  const toggleLight = () => {
    setIsOn(prevIsOn => !prevIsOn)
  }

  const handleOnline = () => {
    setStatus(true)
  }

  const handleOffline = () => {
    setStatus(false)
  }
  return(
    <>
      <h2>Counter</h2>
      <button onClick={incrementCount}>
        I was clicked {count} times
      </button>

      <h2>Toggle Light</h2>
        <img
          src={
            isOn ? 
            'https://icon.now.sh/highlight/fd0' 
            : 'https://icon.now.sh/highlight/aaa'

          }
          style={{
            height: '50px',
            width: '50px'            
          }}
          alt="Flashlight"
          onClick={toggleLight}
        />

        <h2>Mouse Position</h2>
        {/* <p>X position: {mousePosition.x}</p> */}
        {/* <p>Y position: {mousePosition.y}</p> */}
        {JSON.stringify(mousePosition, null, 2)}
        <br />

        <h2>Network Status</h2>
        <p>You are <strong>{status ? "online" : "offline"}</strong></p>
    </>
  )
}

export default App;

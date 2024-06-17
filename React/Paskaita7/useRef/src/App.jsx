import { useState, useEffect, useRef } from 'react'
import './App.css'
import Timer from './components/Timer/Timer';
import VideoPlayer from './components/VideoPlayer/VideoPlayer';
import FocusInput from './components/FocusInput/FocusInput';
import AudioPlayer from './components/AudioPlayer/AudioPlayer';

function App() {
  const [count, setCount] = useState(0);
  const [showTimer, setshowTimer] = useState(true)

  const persistentValue = useRef();

  useEffect(() => {
    // console.log("count changed", count);
  }, [count])

  useEffect(() => {
    // console.log("tuscias useEffect array");

    return () => {
      // console.log("Cleanup");
    }
  }, [])

  function handleClick() {
    setCount((prev) =>  prev + 1)
    setCount((prev) =>  prev + 1)
  }

  return (
    <div>
      <button onClick={() => persistentValue.current = 9}>Change useRef value</button>
      <button onClick={() => console.log(persistentValue.current)}>Log persistentValue</button>
      <button onClick={handleClick}>click me</button>
      <h1>{count}</h1>
      <button onClick={() => setshowTimer(!showTimer)}>Toggle Timer</button>
      {
        showTimer && <Timer />
      }
      <VideoPlayer />
      <br />
      <FocusInput />
      <AudioPlayer />
    </div>
  )
}

export default App

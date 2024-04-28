import { useState,useEffect,useRef } from 'react'

import './App.css'

function App() {
  const [run, setRun] = useState(false);
  const[e,setE]=useState(0);
  const intervalIdref=useRef(null);
  const startRef=useRef(0);
  useEffect(()=>
{ 
  if(run)
  {
    intervalIdref.current=setInterval(()=>
  {
    setE(Date.now()-startRef.current);
  },10);
  }
  return ()=>
  {clearInterval(intervalIdref.current);
  }

},[run]);
  function start()
  {
    setRun(true);
    startRef.current=Date.now()-e;

  }
  function stop()
  {
    setRun(false);
  }
  function reset()
  {
     setE(0);
     setRun(false);
  }
  function format()
  {  
    
    let h=Math.floor(e/(1000*60*60));
    let m=Math.floor(e/(1000*60)%60);
    let s=Math.floor(e/(1000)%60);
    let ms=Math.floor((e%1000)/10);
    
    h=String(h).padStart(2,"0");
    m=String(m).padStart(2,"0");
    s=String(s).padStart(2,"0");
    ms=String(ms).padStart(2,"0");
  

    
    return `${h}:${m}:${s}:${ms}`;
  }

  return (
    <>
      <div className="full">
        <div className='box'>
          <div className='f'> {format()}</div>
          <div className="time">
          <button className='start' onClick={start}>
            Start
          </button>
          <button className='stop' onClick={stop}>
            Stop
          </button>
          <button className='re' onClick={reset}>
            Reset
          </button>
        </div>
        </div>
       </div>
    </>
  )
}

export default App

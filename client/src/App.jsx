import { useState, useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

 function App() {
  const [comic, setComic] = useState('');
  const [comicTitle, setTitle] = useState('');
  //const [data, setData] = useState({});

  //UseEffect for Fetch
  useEffect(() => {
   
    const fetchData = async () => {
      const response = await fetch('/functions/api/comic');
      const newData = await response.json();

      const {month, num, link, year, news,
      safe_title, transcript, alt, img, title, day} = newData;

    
      setComic(img);
      //setNum(num);
      setTitle(title);

    }
    
    fetchData();
 
  },[]);

  return (
    <div id="App">
      <div id="header">
        <h1>{comicTitle}</h1>
      </div>
      <div id="comic-box">
      <img src={comic} id="picture"></img>
      </div>
      
    </div>
  )
}

export default App

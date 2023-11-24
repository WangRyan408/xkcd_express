import { useState, useEffect } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
import './App.css'

 function App() {
  const [comic, setComic] = useState('');
  const [comicNum, setNum] = useState(0);
  const [comicTitle, setTitle] = useState('');

  //UseEffect for Fetch
  useEffect(() => {
   
    const fetchData = async () => {
      const response = await fetch('http://localhost:3001/api/comic');
      const newData = await response.json();

      const {month, num, link, year, news,
      safe_title, transcript, alt, img, title, day} = newData;

    

      setComic(img);
      setNum(num);
      setTitle(title);

    }
    
    fetchData();
 
  },[]);

  return (
    <div id="comic-box">
      <h1>{comicTitle}</h1>
      <img src={comic} id="picture"></img>
    </div>
  )
}

export default App

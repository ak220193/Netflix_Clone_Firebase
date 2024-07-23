import React, { useState ,useEffect } from 'react'
import "./PlayerPage.css"
import BackArrow from "../../assets/back_arrow_icon.png"

const PlayerPage = () => {


  const [apiData, setApiData] = useState({
    name: "",
    key:"",
    published_at:"",
    type:""
  })

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzlhMzk5MmE0ZDQyNDE3OTUxODIyMDVlMzU5YTY4ZSIsIm5iZiI6MTcyMTc1NzU0My44MzYwOTcsInN1YiI6IjY2OWZlZTRjZmJjNTllZTVmNDAxZjIzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M3zPp7eyzPUhpWCZYHHWKWQWEHO0m2bCl1WmlHWJc-s'
    }
  };

  useEffect(()=>{
    fetch('https://api.themoviedb.org/3/movie/693134/videos?language=en-US', options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
  },[])
  
  

    
  return (
    <div className='player'>
    <img src={BackArrow} alt="" className='' />
    <iframe width="90%" height="90%" src={`https://www.youtube.com/embed/{$apiData.key}`} title='trailer' frameBorder="0" allowFullScreen></iframe>
    <div className="player-info">
    <p>{apiData.published_at}</p>
    <p>{apiData.name}</p>
    <p>{apiData.type}</p>
    </div>
    </div>
  )
}

export default PlayerPage
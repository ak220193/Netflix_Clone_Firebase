import React, { useState, useEffect } from 'react';
import "./PlayerPage.css";
import BackArrow from "../../assets/back_arrow_icon.png";
import { useParams } from 'react-router-dom';

const PlayerPage = () => {
  const { id } = useParams();
  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: ""
  });

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzlhMzk5MmE0ZDQyNDE3OTUxODIyMDVlMzU5YTY4ZSIsIm5iZiI6MTcyMTc1NzU0My44MzYwOTcsInN1YiI6IjY2OWZlZTRjZmJjNTllZTVmNDAxZjIzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M3zPp7eyzPUhpWCZYHHWKWQWEHO0m2bCl1WmlHWJc-s'
    }
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
      .then(response => response.json())
      .then(response => {
        if (response.results && response.results.length > 0) {
          setApiData(response.results[0]);
        } else {
          console.error("No video results found");
        }
      })
      .catch(err => console.error(err));
  }, [id]);

  return (
    <div className='player'>
      <img src={BackArrow} alt="Back Arrow" className='back-arrow' />
      <iframe 
        width="90%" 
        height="90%" 
        src={`https://www.youtube.com/embed/${apiData.key}`} 
        title='trailer' 
        frameBorder="0" 
        allowFullScreen
      ></iframe>
      <div className="player-info">
        <p>{new Date(apiData.published_at).toLocaleDateString()}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
}

export default PlayerPage;

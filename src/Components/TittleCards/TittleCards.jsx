import React, { useEffect, useRef, useState } from "react";
import "./TittleCards.css";
import { Link } from "react-router-dom";
// import Data from "../../assets/cards/Cards_data";
// import cards_data from "../../assets/cards/Cards_data";

const TittleCards = ({ title, category }) => {

  const [apiData, setApidata] = useState([]);
  const cardRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5MzlhMzk5MmE0ZDQyNDE3OTUxODIyMDVlMzU5YTY4ZSIsIm5iZiI6MTcyMTc1NzU0My44MzYwOTcsInN1YiI6IjY2OWZlZTRjZmJjNTllZTVmNDAxZjIzYiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.M3zPp7eyzPUhpWCZYHHWKWQWEHO0m2bCl1WmlHWJc-s'
    }
  };
  


  const handleWheel = (event) => {
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response =>setApidata(response.results))
    .catch(err => console.error(err));
    cardRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="titlecards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardRef}>
        {apiData.map((card, idx) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={idx}>
              <img src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TittleCards;

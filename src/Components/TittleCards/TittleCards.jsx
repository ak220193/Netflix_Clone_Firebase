import React, { useEffect, useRef } from "react";
import "./TittleCards.css";
import Data from "../../assets/cards/Cards_data";
import cards_data from "../../assets/cards/Cards_data";

const TittleCards = ({ title, category }) => {
  const cardRef = useRef();

  const handleWheel = (event) => {
    event.preventDefault();
    cardRef.current.scrollLeft += event.deltaY;
  };

  useEffect(() => {
    cardRef.current.addEventListener("wheel", handleWheel);
  }, []);

  return (
    <div className="titlecards">
      <h2>{title ? title : "Popular on Netflix"}</h2>
      <div className="card-list" ref={cardRef}>
        {Data.map((card, idx) => {
          return (
            <div className="card" key={idx}>
              <img src={card.image} alt="" />
              <p>{card.name}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TittleCards;

import React, { useState, useEffect } from "react";
import TinderCard from "react-tinder-card";
import "./styles/Card.css";
import axios from "../axios";

function Card() {
  const [choices, setChoices] = useState([]);
  const [people, setPeople] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get("/users");

      setPeople(request.data);
    }
    fetchData();
  }, []);

  function checkWinner(array) {
    if (array.length === 10) {
      return "You win!";
    } else {
      return "Keep playing!";
    }
  }
  function swiped(direction, name, team) {
    if (direction == "right") {
      choices.push(team);
      console.log(checkWinner(choices));
    }
    console.log(choices);
  }

  const outOfFrame = (name) => {};

  return (
    <div className="tinderCards">
      <div className="tinderCards--cardContainer">
        {people.map((person) => (
          <TinderCard
            className="swipe"
            key={person.name}
            preventSwipe={["up", "down"]}
            onSwipe={(dir) => swiped(dir, person.name, person.team)}
            onCardLeftScreen={() => outOfFrame(person.name)}
          >
            <div
              style={{ backgroundImage: `url(${person.imgUrl})` }}
              className="card"
            >
              <h3>{person.name}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
}

export default Card;

import React, { useState } from "react";
import TinderCard from "react-tinder-card";
import "./styles/Card.css";

function Card() {
  const [choices, setChoices] = useState([]);
  const [people, setPeople] = useState([
    {
      name: "Drop",
      url: "https://pbs.twimg.com/media/FGhoEmvXwAA70xp?format=png&name=small",
      team: "Netshoes Miners",
    },
    {
      name: "Tinowns",
      url: "https://pbs.twimg.com/media/FJuXeHyXMAQnrB-?format=jpg&name=large",
      team: "LOUD",
    },
    {
      name: "Cariok",
      url: "https://pbs.twimg.com/profile_images/1471152882070208516/PxzMRpy5_400x400.jpg",
      team: "Pain",
    },

    {
      name: "Ranger",
      url: "https://pbs.twimg.com/profile_images/1464262213829545990/G8IANV30_400x400.jpg",
      team: "Furia",
    },
    {
      name: "Boal",
      url: "https://pbs.twimg.com/media/FCVnAohXEAog7ST?format=png&name=small",
      team: "Flamengo",
    },
    {
      name: "Revolta",
      url: "https://pbs.twimg.com/media/EryIEO1XcAQabAK?format=jpg&name=large",
      team: "INTZ",
    },
    {
      name: "brTT",
      url: "https://cdn.ome.lt/mk7v0YySwu31SB_VQbGsZPi-2D4=/770x0/smart/uploads/conteudo/fotos/brtt-capa-1024x702.jpg",
      team: "Pain",
    },
    {
      name: "Micao",
      url: "https://pbs.twimg.com/profile_images/1456002425651929097/fWHy0lNN_400x400.jpg",
      team: "INTZ",
    },
    {
      name: "Titan",
      url: "https://pbs.twimg.com/media/FGxjJmxXsAQI4YW?format=jpg&name=medium",
      team: "Red Canids",
    },
    {
      name: "TitaS",
      url: "https://pbs.twimg.com/media/FGxjJmxXsAQI4YW?format=jpg&name=medium",
      team: "Red Canids",
    },
  ]);

  function checkWinner(array) {
    if (array.length === 10) {
      return "You win!";
    } else {
      return "Keep playing!";
    }
  }
  function swiped(direction, name, team) {
    // console.log("removing: " + name, direction);
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
              style={{ backgroundImage: `url(${person.url})` }}
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

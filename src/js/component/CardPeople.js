import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Context } from "../store/appContext";
import ToggleButton from "react-bootstrap/ToggleButton";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CardPeople({ person, handleAdd }) {
  const { store, actions } = useContext(Context);
  const [personDetails, setPersonDetails] = useState(null);
  const isFavorite = store.favorites.some(
    (fav) => fav.type === "person" && fav.uid === person.uid
  );
  const [checked, setChecked] = useState(isFavorite);

  useEffect(() => {
    actions.loadPerson(person.uid).then((data) => setPersonDetails(data));
  }, [person.uid]);

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top holder.js/100px180"
        src={`https://starwars-visualguide.com/assets/img/characters/${person.uid}.jpg`}
      />
      <Card.Body>
        <Card.Title>{person.name}</Card.Title>
        <Card.Text>
        <p className="font-weight-bold">Gender: {personDetails && personDetails.gender}</p>
        <p className="font-weight-bold">Hair Color: {personDetails && personDetails.hair_color}</p>
        <p className="font-weight-bold">Eye Color: {personDetails && personDetails.eye_color}</p>
        </Card.Text>
        <Link to={`character/${person.uid}`}>
          <button
            type="button"
            class="btn btn-outline-info"
            onClick={() => actions.loadPerson(person.uid)}
          >
            Learn More!
          </button>
        </Link>

        <ToggleButton
          className="mb-2 mx-2 float-end"
          width="16"
          height=""
          id={`toggle-check-character-${person.uid}`}
          type="checkbox"
          variant="outline-warning"
          checked={checked}
          value="1"
          onChange={() => handleAdd("character", person.uid, person.name)}
        >
          <FontAwesomeIcon icon="fa fa-heart" />
        </ToggleButton>
      </Card.Body>
    </Card>
  );
}
export default CardPeople;

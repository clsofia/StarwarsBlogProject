import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import "../../styles/character.css";
import { Card } from "react-bootstrap";


export const Character = () => {
  const params = useParams();

  const title = "Characters";

  const { store, actions } = useContext(Context);

  const [person, setPerson] = useState(null);

  const [character, setCharacter] = useState("")

  
  useEffect(() => {
    actions.loadPerson(params.id).then((data) => setPerson(data));
  }, [params.id]);

  useEffect(() => {
    actions.loadCharacter(params.id).then((data) => setCharacter(data));
  }, [params.id]);


  return (
    <>
      <h1>{title}</h1>
      {person ? (
        <>
        
          
          <div className="d-flex justify-content-between">
          <img
            src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`}
          ></img>
            <Card.Body>
        <Card.Title><h2>{person.name}</h2></Card.Title>
          <Card.Text><h4><p className="font-weight-bold">Description:</p>{character.description}</h4>
          </Card.Text>
          </Card.Body>
          </div>
          <hr></hr>
          <div className="timeline-horizontal">
          <ol>
          <li><p className="font-weight-bold">Height:</p>{person.height}</li>
          <li><p className="font-weight-bold">Gender:</p>{person.gender}</li>
          <li><p className="font-weight-bold">Mass:</p>{person.mass}</li>
          <li><p className="font-weight-bold">Birth Year:</p>{person.birth_year}</li>
          <li><p className="font-weight-bold">Hair Color:</p>{person.hair_color}</li>
          <li><p className="font-weight-bold">Eye Color:</p>{person.eye_color}</li>
         </ol>
         </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

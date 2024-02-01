import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";
import "../../styles/character.css";
import { Card } from "react-bootstrap";

export const Vehicle = () => {
  const params = useParams();

  const title = "Vehicle";

  const { store, actions } = useContext(Context);

  const [vehicle, setVehicle] = useState(null);

  const [viatura, setViatura] = useState("")

  useEffect(() => {
    actions.loadVehicle(params.id).then((data) => setVehicle(data));
  }, [params.id]);

  useEffect(() => {
    actions.loadViatura(params.id).then((data) => setViatura(data));
  }, [params.id]);




  return (

  <>
      <h1>{title}</h1>
      {vehicle ? (
        <>
          <h2>{vehicle.name}</h2>
          <div className="d-flex justify-content-between">
          <img
            src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`}
          ></img>
           <Card.Body>
        <Card.Title><h2>{vehicle.name}</h2></Card.Title>
        <Card.Text><h4><p className="font-weight-bold">Description:</p>{viatura.description}</h4>
          </Card.Text>
          </Card.Body>
          </div>
          <hr></hr>
          <div className="timeline-horizontal">
          <ol>
          <li><p className="font-weight-bold">Model:</p>{vehicle.model}</li>
          <li><p className="font-weight-bold">Vehicle Class:</p>{vehicle.vehicle_class}</li>
          <li><p className="font-weight-bold">Manufacturer:</p>{vehicle.manufacturer}</li>
          <li><p className="font-weight-bold">Crew:</p>{vehicle.crew}</li>
          <li><p className="font-weight-bold">Length:</p>{vehicle.length}</li>
          <li><p className="font-weight-bold">Consumables:</p>{vehicle.consumables}</li>
          </ol>
          </div>
        </>
      ) : (
        <></>
      )}
    </>
  );
};

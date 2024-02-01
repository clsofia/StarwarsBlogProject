import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Context } from "../store/appContext";
import ToggleButton from "react-bootstrap/ToggleButton";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


function CardVehicle({ vehicle, handleAdd }) {

  const { store, actions } = useContext(Context);
  const [vehicleDetails, setVehicleDetails] = useState(null);
  const isFavorite = store.favorites.some(
    (fav) => fav.type === "vehicle" && fav.uid === vehicle.uid
  );
  const [checked, setChecked] = useState(isFavorite);
  

  useEffect(() => {
    actions.loadVehicle(vehicle.uid).then((data) => setVehicleDetails(data));
  }, [vehicle.uid]);

  

  return (
    <Card style={{ width: "18rem" }}>
      <Card.Img
        variant="top holder.js/100px180"
        src={`https://starwars-visualguide.com/assets/img/vehicles/${vehicle.uid}.jpg`}
      />
      <Card.Body>
        <Card.Title>{vehicleDetails && vehicleDetails.name}</Card.Title>
        <Card.Text>Manufacturer: {vehicleDetails && vehicleDetails.manufacturer}</Card.Text>
        <Card.Text>Model: {vehicleDetails && vehicleDetails.model}</Card.Text>
        <Link to={`vehicle/${vehicle.uid}`}>
          <button
            type="button"
            class="btn btn-outline-info"
            onClick={() => actions.loadVehicle(vehicle.uid)}
          >
            Learn More!
          </button>
        </Link>

        <ToggleButton
          className="mb-2 mx-2 float-end"
          width="16"
          height=""
          id={`toggle-check-vehicle-${vehicle.uid}`}
          type="checkbox"
          variant="outline-warning"
          checked={checked}
          value="1"
          onChange={() => handleAdd("vehicles", vehicle.uid, vehicle.name)}
        >
          <FontAwesomeIcon icon="fa fa-heart" />
        </ToggleButton>
      </Card.Body>
    </Card>
  );
}
export default CardVehicle;

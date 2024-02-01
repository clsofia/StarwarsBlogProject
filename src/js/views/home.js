import React, { useState, useEffect, useContext } from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.css";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";
import favoriteToggle from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import Card from "react-bootstrap/Card";
import ToggleButton from "react-bootstrap/ToggleButton";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CardPeople from "../component/CardPeople";
import CardVehicle from "../component/CardVehicle";

export const Home = (props) => {
  const { store, actions } = useContext(Context);
  const isFavorite = store.favorites.some(
    (fav) => fav.type === "person" && fav.uid === person.uid
  );
  const [checked, setChecked] = useState(isFavorite);

  const handleAdd = (type, uid, name) => {
    actions.addFav(type, uid, name);
  };

  return (
    <>
      <div className="text-danger">
        <h1>Characters</h1>
      </div>
      <div className="card-group card-group-scroll">
        {store.people?.map((person) => {
          const favoriteToggle = () => {
            if (!checked) {
              actions.addFavPerson(person.uid, person.name);
              actions.addFavVehicle(vehicles.uid, vehicles.name);
            } else {
              actions.removeFavPerson(person.uid);
              actions.removeFavVehicle(vehicles.uid);
            }
            setChecked(!checked);
          };

          return (
            <>
              <CardPeople person={person} handleAdd={handleAdd} />
            </>
          );
        })}
      </div>
      <p></p>
      <p></p>
      <div className="text-danger">
        <h1>Vehicles</h1>
      </div>
      <div className="card-group card-group-scroll">
        {store.vehicles?.map((vehicle) => {
          return (
            <>
              <CardVehicle vehicle={vehicle} handleAdd={handleAdd} />
            </>
          );
        })}
      </div>
    </>
  );
};

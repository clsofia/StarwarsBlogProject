import React from "react";
import { useContext, useEffect, useState } from "react";
import { Navbar } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router";

export const NavbarMenu = () => {
  const { store, actions } = useContext(Context);
  const [favCounter, setFavCounter] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (store.favorites) {
      const counter = store.favorites.length;
      setFavCounter(counter);
    }
  }, [store.favorites]);

  const handleDelete = (type, uid) => {
    console.log(type);
    actions.removeFav(type, uid);
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <Link to="/">
        <img
          className="card-img-top"
          src="https://www.freepnglogos.com/uploads/star-wars-logo-31.png"
          alt="brand"
          style={{ height: 100, width: 100 }}
        />
      </Link>
      <div className="mr-auto"></div>

      <DropdownButton id="dropdown-favorites" title={`Favorites ${favCounter}`}>
        {store.favorites &&
          store.favorites.map((fav, index) => {
            const linkTo =
              fav.type === "character"
                ? `/character/${fav.uid}`
                : `/vehicle/${fav.uid}`;
            return (
              <Dropdown.Item key={index}>
                <div className="d-flex justify-content-between align-items-center">
                <div className="text-primary"><Link to={linkTo}>{fav.name}</Link></div>
                  <div onClick={(e) => handleDelete(fav.type, fav.uid)}>
                    <FontAwesomeIcon icon="fa-solid fa-trash" />
                  </div>
                </div>
              </Dropdown.Item>
            );
          })}
      </DropdownButton>
    </nav>
  );
};

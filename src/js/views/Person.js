import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";
import { useNavigate } from "react-router";

export const Person = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	return (
		


			
	
	);
};

Single.propTypes = {
	match: PropTypes.object
};

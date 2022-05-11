import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const PrivatePage = ({ children }) => {
	const { currentUser } = useContext(AuthContext);
	return <div>{currentUser ? children : <Navigate to="/signup" />}</div>;
};

export default PrivatePage;

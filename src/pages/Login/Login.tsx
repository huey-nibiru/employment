import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import cube from "../../assets/cube.gif";

const Login: React.FC = () => {
	return (
		<>
			<div className="login-container">
				<h1>Login</h1>
				<div className="cube-container">
					<img src={cube} alt="Loading animation" className="cube-gif" />
				</div>
				<button className="twitter-login-btn">Connect with Twitter</button>
			</div>
		</>
	);
};

export default Login;

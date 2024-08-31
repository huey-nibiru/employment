// src/Home.tsx
import "../styles.css";
import { Link } from "react-router-dom";
import cube from "../assets/cube.gif";
import Ticker from "../components/Ticker";

const Home = () => {
	return (
		<div>
			<Ticker />
			<div className="container">
				<h1>Employment</h1>
				<div className="cube-container">
					{/* Display loading animation with CSS styling */}
					{/* This needs to be fixed to adjust for different window sizes */}
					<img src={cube} alt="Loading animation" className="cube-gif" />{" "}
				</div>
				{/* this button will connect to the twitter api*/}
				<Link to="/login">
					<button>Login</button>
				</Link>
				<Link to="/explore">
					<button>Explore</button>
				</Link>
			</div>
		</div>
	);
};

export default Home;

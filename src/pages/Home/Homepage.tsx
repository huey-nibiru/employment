// src/Home.tsx
import { Link } from "react-router-dom";
import cube from "../../assets/cube.gif";
import Ticker from "../../components/Ticker/Ticker";
import "./Homepage.css";

const Home = () => {
	return (
		<div>
			<nav className="navbar">
				<div className="nav-left">
					<Link to="/" className="nav-link">
						Home
					</Link>
					<Link to="/explore" className="nav-link">
						Explore
					</Link>
				</div>
				<div className="nav-center">EMPLOYMENT</div>
				<div className="nav-right"></div>
			</nav>
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

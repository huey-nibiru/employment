// src/Home.tsx
import { Link } from "react-router-dom";
import cube from "../../assets/cube.gif";
import Ticker from "../../components/Ticker/Ticker";
import Navbar from "../../components/Navbar/Navbar";
import "./Homepage.css";

const Home = () => {
	return (
		<div>
			<Navbar />
			<Ticker />
			<div className="homepage-container">
				<h1>Employment</h1>
				<div className="cube-container">
					<img src={cube} alt="Spinning Cube" className="cube-gif" />{" "}
				</div>

				<Link to="/login">
					<button>Login With Twitter</button>
				</Link>
			</div>
		</div>
	);
};

export default Home;

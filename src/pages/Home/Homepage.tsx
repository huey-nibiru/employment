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
				<h1 color="black">Employment</h1>
				<div className="cube-container">
					<img src={cube} alt="Spinning Cube" className="cube-gif" />{" "}
				</div>
			</div>
		</div>
	);
};

export default Home;

import cube from "../../assets/cube.gif";
import Ticker from "../../components/Ticker/Ticker";
import "./Homepage.css";

const Home = () => {
	return (
		<div>
			<Ticker />
			<div className="homepage-container">
				<h1 color="black">Employment</h1>
				<div className="cube-container">
					<img src={cube} alt="Spinning Cube" className="cube-gif" />{" "}
				</div>
				<button
					className="new-listing-button"
					style={{ backgroundColor: "gold", color: "black" }}
				>
					New Listing
				</button>
			</div>
		</div>
	);
};

export default Home;

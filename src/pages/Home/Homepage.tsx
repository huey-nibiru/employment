import boss from "../../assets/boss.gif";
import Ticker from "../../components/Ticker/Ticker";
import "./Homepage.css";

const Home = () => {
	return (
		<div>
			<Ticker />
			<div className="homepage-container">
				<h1 color="black">Employment</h1>
				<img src={boss} alt="boss gif" className="boss-gif" />{" "}
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

import boss from "../../assets/boss.gif";
import Ticker from "../../components/Ticker/Ticker";
import "./Homepage.css";
import Navbar from "../../components/Navbar/Navbar";
const Home = () => {
	return (
		<div>
			<Navbar />
			<Ticker />
			<div className="homepage-container">
				<h1 color="white">E</h1>
				<img
					src={boss}
					alt="boss gif"
					style={{ width: "50%", height: "auto" }}
				/>
			</div>
		</div>
	);
};

export default Home;

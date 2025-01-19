import boss from "../../assets/boss.gif";
import Ticker from "../../components/Ticker/Ticker";
import "./Homepage.css";
import { Link } from "react-router-dom";
const Home = () => {
	return (
		<div>
			<Ticker />
			<div className="homepage-container">
				<h1 color="white">Employment</h1>
				<img src={boss} alt="boss gif" />
				<button>
					<Link to="/register">Login/Register</Link>
				</button>
			</div>
		</div>
	);
};

export default Home;

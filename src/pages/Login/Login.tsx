import { Link } from "react-router-dom";
import xLogo from "../../assets/x.gif";
import Ticker from "../../components/Ticker/Ticker";
import Navbar from "../../components/Navbar/Navbar";
import "./Login.css";

const Login = () => {
	return (
		<div>
			<Navbar />
			<Ticker />
			<div className="login-container">
				<h1>Employment</h1>
				<div className="x-container">
					<img src={xLogo} alt="X Logo" className="x-gif" />{" "}
				</div>
			</div>
		</div>
	);
};

export default Login;

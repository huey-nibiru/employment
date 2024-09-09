import xLogo from "../../assets/x.gif";
import Ticker from "../../components/Ticker/Ticker";
import Navbar from "../../components/Navbar/Navbar";
import "./Login.css";
import TwitterAuth from "../../components/Twitter/TwitterAuth";
import { useState } from "react"; // Import useState

const Login = () => {
	const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup

	const toggleLoginSignup = () => {
		setIsLogin(!isLogin); // Toggle state
	};

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

			<div>
				<label>
					<input type="checkbox" onChange={toggleLoginSignup} />
					{isLogin ? "Switch to Signup" : "Switch to Login"}
				</label>
			</div>

			<div className="credentials">
				{" "}
				{/* New container for credentials */}
				<input type="text" placeholder="Username" /> {/* Username field */}
				{!isLogin && <input type="email" placeholder="Email" />}{" "}
				{/* Email field for signup */}
				<input type="password" placeholder="Password" /> {/* Password field */}
			</div>

			<div className="twitter-auth-container">
				<TwitterAuth />
			</div>
		</div>
	);
};

export default Login;

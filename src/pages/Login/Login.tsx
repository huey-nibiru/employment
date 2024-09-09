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

			<div className="login-signup-toggle">
				{/* Display text based on state */}
				<span style={{ marginBottom: "10px" }}>
					{isLogin ? "Login" : "Sign Up"}
				</span>{" "}
				<label className="toggle">
					{/* Moved span above the slider */}
					<input
						type="checkbox"
						checked={!isLogin}
						onChange={toggleLoginSignup} // Update state on change
					/>{" "}
					<span className="slider"></span>
				</label>
				{/* Display text based on state */}
			</div>

			<div className="credentials">
				{" "}
				{/* New container for credentials */}
				{!isLogin && (
					<input
						type="email"
						placeholder="Email"
						onChange={(e) => {
							const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email validation
							if (!emailRegex.test(e.target.value)) {
								// Handle invalid email
								console.log("Invalid email format");
							}
						}}
					/>
				)}{" "}
				{/* Email field for signup */}
				<input type="text" placeholder="Username" /> {/* Username field */}
				<input type="password" placeholder="Password" /> {/* Password field */}
				<button className="login-signup-button">
					{isLogin ? "Login" : "Sign Up"}
				</button>
			</div>

			<div className="twitter-auth-container">
				<TwitterAuth />
			</div>
		</div>
	);
};

export default Login;

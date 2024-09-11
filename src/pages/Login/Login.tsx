import xLogo from "../../assets/x.gif";
import Ticker from "../../components/Ticker/Ticker";
import Navbar from "../../components/Navbar/Navbar";
import "./Login.css";
import TwitterAuth from "../../components/Twitter/TwitterAuth";
import { useState, useRef } from "react"; // Import useState and useRef

const Login = () => {
	const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup
	const emailRef = useRef<HTMLInputElement>(null); // Create a ref for email input

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
				{/* New container for credentials */}
				{!isLogin && (
					<input
						type="email"
						placeholder="Email"
						ref={emailRef} // Reference for email input
					/>
				)}
				{/* Email field for signup */}
				<input type="text" placeholder="Username" /> {/* Username field */}
				<input type="password" placeholder="Password" /> {/* Password field */}
				<button
					className="login-signup-button"
					onClick={() => {
						const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Regex for email validation
						if (emailRef.current && !emailRegex.test(emailRef.current.value)) {
							// Check if emailRef.current is not null
							// Handle invalid email
							alert("Invalid email format");
						}
					}}
				>
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

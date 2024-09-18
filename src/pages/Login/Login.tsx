import "./Login.css";
//import { supabase } from "../../client"; // MUST BE FIXED
import xLogo from "../../assets/x.gif";
import Ticker from "../../components/Ticker/Ticker";
import Navbar from "../../components/Navbar/Navbar";
import { useState, useRef } from "react"; // Import useState and useRef
import TwitterAuth from "../../components/Twitter/TwitterAuth";

const Login = ({
	onSubmit,
}: {
	onSubmit: (data: {
		email?: string;
		username: string;
		password: string;
	}) => void;
}) => {
	const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup
	const emailRef = useRef<HTMLInputElement>(null); // Create a ref for email input
	const usernameRef = useRef<HTMLInputElement>(null); // Create a ref for username input
	const passwordRef = useRef<HTMLInputElement>(null); // Create a ref for password input
	const toggleLoginSignup = () => {
		setIsLogin(!isLogin); // Toggle state
	};
	const handleSubmit = async () => {
		// Make handleSubmit async
		const { data, error } = await supabase.auth.signUp({
			email: emailRef.current?.value || "", // Use empty string if email is undefined
			password: passwordRef.current?.value || "", // Use empty string if email is undefined
		});
		// Use data if needed, or remove the variable if not used
		if (data) {
			console.log("Sign up successful:", data); // Log data for confirmation
		}
		// Handle error if needed
		if (error) {
			console.error(error);
			return; // Exit if there's an error
		}
		// Call the onSubmit function with the collected data
		onSubmit({
			email: emailRef.current ? emailRef.current.value : undefined,
			username: usernameRef.current?.value || "", // Ensure username is passed correctly
			password: passwordRef.current ? passwordRef.current.value : "", // Ensure password is passed correctly
		});
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
					onClick={handleSubmit} // Use handleSubmit instead
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

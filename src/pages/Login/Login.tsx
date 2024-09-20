import "./Login.css";
import { supabase } from "../../client"; // MUST BE FIXED
import xLogo from "../../assets/x.gif";
import Ticker from "../../components/Ticker/Ticker";
import Navbar from "../../components/Navbar/Navbar";
import { useState, useRef } from "react"; // Import useState and useRef
import TwitterAuth from "../../components/Twitter/TwitterAuth";

const Login = ({}) => {
	const [isLogin, setIsLogin] = useState(true); // State to toggle between login and signup
	const emailRef = useRef<HTMLInputElement>(null); // Create a ref for email input
	const usernameRef = useRef<HTMLInputElement>(null); // Create a ref for username input
	const passwordRef = useRef<HTMLInputElement>(null); // Create a ref for password input

	const toggleLoginSignup = () => {
		setIsLogin(!isLogin); // Toggle state
	};

	const handleSubmit = async () => {
		alert("Email:" + emailRef.current?.value); // Access the value of email input
		alert("Username:" + usernameRef.current?.value); // Access the value of username input
		alert("Password:" + passwordRef.current?.value); // Access the value of password input
		const { data, error } = await supabase.auth.signUp({
			email: emailRef.current?.value || "", // Use the email input value or default to an empty string
			password: passwordRef.current?.value || "", // Use the password input value or default to an empty string
		});
		if (error) {
			alert(error.message); // Handle error by displaying the error message
		} else {
			alert("Please confirm account creation in email."); // Handle success case
			const { data: userData, error: userError } = await supabase
				.from("user")
				.insert([
					{
						email: emailRef.current?.value,
						password_hash: passwordRef.current?.value,
					},
				]) // Use actual values
				.select();
			if (userError) {
				alert(userError.message); // Handle error for user insertion
			} else {
				alert("Rows Updated");
			}
		}
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
				{!isLogin && <input type="email" placeholder="Email" ref={emailRef} />}
				<input type="text" placeholder="Username" ref={usernameRef} />{" "}
				<input type="password" placeholder="Password" ref={passwordRef} />{" "}
				<button className="login-signup-button" onClick={handleSubmit}>
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

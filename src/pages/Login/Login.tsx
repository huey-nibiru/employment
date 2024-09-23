import "./Login.css";
import { supabase } from "../../client"; // MUST BE FIXED

import { AuthChangeEvent, Session } from "@supabase/supabase-js";
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

	// Sign up the user
	const handleSubmit = async () => {
		const { error } = await supabase.auth.signUp({
			email: emailRef.current?.value || "", // Use the email input value or default to an empty string
			password: passwordRef.current?.value || "", // Use the password input value or default to an empty string
		});

		if (error) {
			alert(error.message);
			return; // Exit if there's an error
		} else {
			alert("Please confirm account creation in email."); // Handle success case
		}

		// Add user to the custom table after verification
		const addUserToTable = async (u_id: BigInt, u_email: string | null) => {
			// {{ edit_1 }} - Fixed function declaration
			const { data, error } = await supabase
				.from("user")
				.insert([{ user_id: u_id, email: u_email }]);

			if (error) {
				console.error("Error adding user to table:", error.message);
			} else {
				alert("User added successfully!"); // {{ edit_1 }} - Alert user after adding
				console.log("User added successfully:", data);
			}
		};

		// Optional polling for email verification
		const checkEmailVerified = async () => {
			const { data, error } = await supabase.auth.getUser();

			// Handle any errors fetching the user
			if (error) {
				console.error("Error fetching user:", error.message, error); // {{ edit_1 }} - Added detailed error logging
				return;
			}

			// Extract the user object from the response
			const user = data?.user;

			if (!user) {
				console.error("User does not exist."); // {{ edit_1 }} - Added check for user existence
				return; // Exit if user does not exist
			}

			if (user.email_confirmed_at) {
				console.log("Email verified. Adding user to the database.");
				await addUserToTable(BigInt(user.id), user.email ?? null); // {{ edit_2 }} - Convert user.id to BigInt
			} else {
				console.log("Email not verified yet. Retrying in 5 seconds...");
				setTimeout(checkEmailVerified, 5000);
			}
		};

		checkEmailVerified(); // Start checking for email verification
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

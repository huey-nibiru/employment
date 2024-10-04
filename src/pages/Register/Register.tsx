import "./Register.css";
import { supabase } from "../../client"; // MUST BE FIXED
import xLogo from "../../assets/x.gif";
import Ticker from "../../components/Ticker/Ticker";
import { useState, useRef } from "react"; // Import useState and useRef
import TwitterAuth from "../../components/Twitter/TwitterAuth";

const Register = ({}) => {
	const [isRegister, setIsRegister] = useState(true); // State to toggle between Register and signup
	const emailRef = useRef<HTMLInputElement>(null); // Create a ref for email input
	const usernameRef = useRef<HTMLInputElement>(null); // Create a ref for username input
	const passwordRef = useRef<HTMLInputElement>(null); // Create a ref for password input

	const toggleRegisterSignup = () => {
		setIsRegister(!isRegister); // Toggle state
	};

	// Sign up the user
	const handleSubmit = async () => {
		const { error } = await supabase.auth.signUp({
			email: emailRef.current?.value || "", // Use the email input value or default to an empty string
			password: passwordRef.current?.value || "", // Use the password input value or default to an empty string
		});

		if (error) {
			alert(error.message);
			console.log(error.message, error);
			return; // Exit if there's an error
		} else {
			console.log("Confirm account creation in email."); // Handle success case
		}

		// Add user to the custom table after verification
		const addUserToTable = async (u_email: string | null) => {
			// {{ edit_1 }} - Fixed function declaration
			const { data, error } = await supabase.from("user").insert([
				{
					email: u_email,
					password_hash: passwordRef.current?.value,
					username: usernameRef.current?.value,
				},
			]);

			if (error) {
				console.error("Error adding user to table:", error.message);
			} else {
				//alert("User added successfully!"); // {{ edit_1 }} - Alert user after adding
				console.log("User added successfully:", data);
			}
		};

		// Optional polling for email verification
		const checkEmailVerified = async () => {
			const { data, error } = await supabase.auth.getUser();

			// Extract the user object from the response
			const user = data?.user;
			// Handle any errors fetching the user

			if (error) {
				//alert("Error fetching user:"); // {{ edit_1 }} - Added detailed error logging
				console.error("Error fetching user:", error.message, error); // {{ edit_1 }} - Added detailed error logging
			}

			if (!user) {
				console.error("User does not exist yet. Check email for confirmation."); // {{ edit_1 }} - Added check for user existence
			}
			console.log(user);
			if (user && user.email_confirmed_at) {
				// {{ edit_1 }} - Added null check for user
				console.log("Email verified. Adding user to the database.");
				await addUserToTable(user?.email ?? null); // {{ edit_2 }} - Convert user.id to BigInt
			} else {
				console.log("Email not verified yet. Retrying in 5 seconds...");
				setTimeout(checkEmailVerified, 5000);
			}
		};

		checkEmailVerified(); // Start checking for email verification
	};
	return (
		<div>
			<Ticker />
			<div className="Register-container">
				<h1>Employment</h1>
				<div className="x-container">
					<img src={xLogo} alt="X Logo" className="x-gif" />{" "}
				</div>
			</div>

			<div className="Register-signup-toggle">
				{/* Display text based on state */}
				<span style={{ marginBottom: "10px" }}>
					{isRegister ? "Login" : "Register"}
				</span>{" "}
				<label className="toggle">
					{/* Moved span above the slider */}
					<input
						type="checkbox"
						checked={!isRegister}
						onChange={toggleRegisterSignup} // Update state on change
					/>{" "}
					<span className="slider"></span>
				</label>
				{/* Display text based on state */}
			</div>

			<div className="credentials">
				{!isRegister && (
					<input type="email" placeholder="Email" ref={emailRef} />
				)}
				<input type="text" placeholder="Username" ref={usernameRef} />{" "}
				<input type="password" placeholder="Password" ref={passwordRef} />{" "}
				<button className="Register-signup-button" onClick={handleSubmit}>
					{isRegister ? "Login" : "Register"}
				</button>
			</div>

			<div className="twitter-auth-container">
				<TwitterAuth />
			</div>
		</div>
	);
};

export default Register;

import "./Register.css";
import { supabase } from "../../client"; // MUST BE FIXED
import xLogo from "../../assets/x.gif";
import Ticker from "../../components/Ticker/Ticker";
import { useState, useRef, useEffect } from "react"; // Import useState and useRef
import TwitterAuth from "../../components/Twitter/TwitterAuth";
import { useNavigate } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
//import { updateAppState } from "path/to/updateAppState"; // FIX

const Register = () => {
	const navigate = useNavigate();
	const [modalState, setModalState] = useState("SignIn");
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const stateUpdater = (field, value) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));
	};

	const handleSignIn = async (e) => {
		e.preventDefault();

		try {
			if (!formData.email || !formData.password) return;

			const { data, error } = await supabase.auth.signInWithPassword({
				email: formData.email,
				password: formData.password,
			});

			if (error) {
				const message = error.message;
				// Handle error (e.g., show alert)
				alert(message);
				return; // Exit if there's an error
			}

			// Sign in successful
			navigate("/explore"); // Only navigate if sign in is successful
		} catch (error) {
			console.error(error);
			alert(error);
		}
	};

	const handleSignUp = async (e) => {
		e.preventDefault();

		try {
			if (!formData.email || !formData.password) return;

			const { data, error } = await supabase.auth.signUp({
				email: formData.email,
				password: formData.password,
			});

			if (error) {
				const message = error.message;

				switch (message) {
					case "To signup, please provide your email":
						alert("To signup, please provide your email");
						return;
					case "Unable to validate email address: invalid format":
						alert("Invalid email");
						return;
					case "Password should be at least 6 characters.":
						alert("Password should be at least 6 characters");
						return;
					case "Signup requires a valid password":
						alert("Signup requires a valid password");
						return;
					default:
						alert(error);
						return;
				}
			}

			// add user to table
			if (data.user) {
				const { error: insertError } = await supabase
					.from("user") // Assuming 'users' is the table name
					.insert([
						{ email: formData.email, password_hash: formData.password },
					]);

				if (insertError) {
					console.error("Error inserting user data:", insertError);
					return;
				}
			}
			// Redirect to profile
			navigate("/profile");
		} catch (error) {
			console.error(error);
		}
	};

	const handleTwitterSignIn = async () => {
		try {
			const { data, error } = await supabase.auth.signInWithOAuth({
				provider: "twitter",
			});
		} catch (err) {
			console.error(err);
			alert(err);
		}
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
			<form className="auth-form">
				<h2>{modalState === "SignIn" ? "Sign In" : "Create Account"}</h2>
				<fieldset>
					<input
						type="text"
						placeholder="Enter your email address"
						onInput={(e) => stateUpdater("email", e.target.value)}
					/>
				</fieldset>
				<fieldset>
					<input
						type="password"
						placeholder="Enter your password"
						onInput={(e) => stateUpdater("password", e.target.value)}
					/>
				</fieldset>
				<span className="toggle-span">
					{modalState === "SignIn" ? "No account yet?" : "Have an account?"}
					<span
						className="sign-span"
						onClick={() =>
							setModalState((prev) => (prev === "SignIn" ? "SignUp" : "SignIn"))
						}
					>
						{modalState === "SignIn" ? "Sign Up" : "Sign In"}
					</span>
				</span>
				{modalState === "SignIn" && (
					<button className="form-cta" onClick={handleSignIn}>
						Continue
					</button>
				)}
				{modalState === "SignUp" && (
					<button className="form-cta" onClick={handleSignUp}>
						Create Account
					</button>
				)}

				<FaXTwitter className="twitter-cta" onClick={handleTwitterSignIn} />
			</form>
		</div>
	);
};

export default Register;

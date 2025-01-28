import "./Register.css";
import { supabase } from "../../client.tsx"; // MUST BE FIXED
import boss from "../../assets/boss.gif";
import Ticker from "../../components/Ticker/Ticker";
import { useState, useCallback } from "react"; // Import useState, useCallback, and useMemo
import { useNavigate } from "react-router-dom";
import { FaXTwitter } from "react-icons/fa6";
import Navbar from "../../components/Navbar/Navbar";

const Register = () => {
	const navigate = useNavigate();
	const [modalState, setModalState] = useState("SignIn");
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

	const stateUpdater = useCallback((field: string, value: any) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));
	}, []); // Memoize stateUpdater

	const handleAuth = useCallback(
		async (isSignIn: boolean) => {
			if (!formData.email || !formData.password) return;

			const { data, error } = isSignIn
				? await supabase.auth.signInWithPassword({
						email: formData.email,
						password: formData.password,
				  })
				: await supabase.auth.signUp({
						email: formData.email,
						password: formData.password,
				  });

			if (error) {
				alert(error.message);
				return; // Exit if there's an error
			}

			if (!isSignIn && data.user) {
				const { error: insertError } = await supabase
					.from("user")
					.insert([
						{ email: formData.email, password_hash: formData.password },
					]);

				if (insertError) {
					console.error("Error inserting user data:", insertError);
					return;
				}
			}

			navigate(isSignIn ? "/explore" : "/profile");
		},
		[formData, navigate]
	); // Memoize handleAuth

	const handleSignIn = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		handleAuth(true);
	};

	const handleSignUp = (e: { preventDefault: () => void }) => {
		e.preventDefault();
		handleAuth(false);
	};

	async function handleTwitterAuth() {
		try {
			await supabase.auth.signInWithOAuth({
				provider: "twitter",
				options: {
					redirectTo: "http://localhost:5173/profile",
				},
			});
			// Handle success (e.g., navigate or show a message)
		} catch (error) {
			console.error("Error during Twitter authentication:", error);
			// Handle error (e.g., show an alert)
		}
	}

	return (
		<div>
			<Navbar />
			<Ticker />
			<div className="Register-container">
				<img src={boss} alt="boss Logo" className="boss-gif" />{" "}
				<form className="auth-form">
					<h2>{modalState === "SignIn" ? "Sign In" : "Sign Up"}</h2>
					<fieldset>
						<input
							type="text"
							placeholder="Enter your email address"
							onInput={(e) =>
								stateUpdater("email", (e.target as HTMLInputElement).value)
							}
						/>
					</fieldset>
					<fieldset>
						<input
							type="password"
							placeholder="Enter your password"
							onInput={(e) =>
								stateUpdater("password", (e.target as HTMLInputElement).value)
							}
						/>
					</fieldset>
					<span className="toggle-span">
						{modalState === "SignIn" ? "No account yet? " : "Have an account? "}
						<span
							className="sign-span"
							onClick={() =>
								setModalState((prev) =>
									prev === "SignIn" ? "SignUp" : "SignIn"
								)
							}
						>
							{modalState === "SignIn" ? "Sign Up" : "Sign In"}
						</span>

						{modalState === "SignIn" && (
							<div className="registration-box">
								<button className="auth-btn" onClick={handleSignIn}>
									Sign In with Email
								</button>

								<div className="auth-btn" onClick={handleTwitterAuth}>
									<p>Sign In with </p>
									<FaXTwitter />
								</div>
							</div>
						)}
						{modalState === "SignUp" && (
							<div className="registration-box">
								<button className="auth-btn" onClick={handleSignUp}>
									Sign Up with Email
								</button>
								<div className="auth-btn" onClick={handleTwitterAuth}>
									<p>Sign Up with </p>
									<FaXTwitter />
								</div>
							</div>
						)}
					</span>
				</form>
			</div>
		</div>
	);
};

export default Register;

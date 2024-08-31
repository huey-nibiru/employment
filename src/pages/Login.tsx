import React from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import cube from "../assets/cube.gif";

const Login: React.FC = () => {
	const navigate = useNavigate();

	const handleTwitterLogin = () => {
		// Twitter OAuth 2.0 configuration
		const clientId = "YOUR_TWITTER_CLIENT_ID";
		const redirectUri = encodeURIComponent("YOUR_REDIRECT_URI");
		const scope = encodeURIComponent("tweet.read users.read");
		const state = generateRandomString(32);
		const codeChallenge = generateCodeChallenge();

		// Store state and code verifier in localStorage for later verification
		localStorage.setItem("twitter_oauth_state", state);
		localStorage.setItem("twitter_oauth_code_verifier", codeChallenge.verifier);

		// Construct the authorization URL
		const authUrl = `https://twitter.com/i/oauth2/authorize?response_type=code&client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scope}&state=${state}&code_challenge=${codeChallenge.challenge}&code_challenge_method=S256`;

		// Redirect the user to Twitter's authorization page
		window.location.href = authUrl;
	};

	return (
		<div className="login-container">
			<h1>Login</h1>
			<div className="cube-container">
				<img src={cube} alt="Loading animation" className="cube-gif" />
				</div>
			<button onClick={handleTwitterLogin} className="twitter-login-btn">
				Sign in with Twitter
			</button>
		</div>
	);
};

export default Login;

// Helper functions for OAuth 2.0 PKCE
function generateRandomString(length: number) {
	let text = "";
	const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
	for (let i = 0; i < length; i++) {
		text += possible.charAt(Math.floor(Math.random() * possible.length));
	}
	return text;
}

async function generateCodeChallenge() {
	const verifier = generateRandomString(128);
	const encoder = new TextEncoder();
	const data = encoder.encode(verifier);
	const digest = await window.crypto.subtle.digest("SHA-256", data);
	const challenge = btoa(String.fromCharCode(...new Uint8Array(digest)))
		.replace(/=/g, "")
		.replace(/\+/g, "-")
		.replace(/\//g, "_");
	return { verifier, challenge };
}

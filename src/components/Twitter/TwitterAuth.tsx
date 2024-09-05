import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";
import "./TwitterAuth.css";

// Initialize Supabase client
const supabaseUrl = "https://amtxwkqlouwsxedgcdvh.supabase.co";
const supabaseKey =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFtdHh3a3Fsb3V3c3hlZGdjZHZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjI4MTk4MzIsImV4cCI6MjAzODM5NTgzMn0.-MKb9jVx8QcT9NDfM8rYNFbjd7rfPmWbWExvSgF5cms";
const supabase = createClient(supabaseUrl, supabaseKey);

interface TwitterUser {
	username: string;
	profilePicture: string;
}

const TwitterAuth: React.FC = () => {
	const [user, setUser] = useState<TwitterUser | null>(null);

	useEffect(() => {
		const { data: authListener } = supabase.auth.onAuthStateChange(
			(event, session) => {
				if (event === "SIGNED_IN" && session?.user) {
					const twitterUser: TwitterUser = {
						username: session.user.user_metadata.full_name || "",
						profilePicture: session.user.user_metadata.avatar_url || "",
					};
					setUser(twitterUser);
					saveUserToSupabase(session.user.id, twitterUser);
				}
			}
		);

		return () => {
			authListener.subscription.unsubscribe();
		};
	}, []);

	const signInWithTwitter = async () => {
		try {
			const { error } = await supabase.auth.signInWithOAuth({
				provider: "twitter",
			});
			if (error) throw error;
		} catch (error) {
			console.error("Error signing in with Twitter:", error);
		}
	};

	const saveUserToSupabase = async (userId: string, userData: TwitterUser) => {
		try {
			const { error } = await supabase.from("users").upsert({
				id: userId,
				username: userData.username,
				profile_picture: userData.profilePicture,
			});
			if (error) throw error;
			console.log("User data saved to Supabase");
		} catch (error) {
			console.error("Error saving user data:", error);
		}
	};

	const signOut = async () => {
		try {
			const { error } = await supabase.auth.signOut();
			if (error) throw error;
			setUser(null);
		} catch (error) {
			console.error("Error signing out:", error);
		}
	};

	return (
		<div className="twitter-auth-container">
			{user ? (
				<div>
					<h2>Welcome, {user.username}!</h2>
					<img
						src={user.profilePicture}
						alt="Profile"
						width="50"
						height="50"
						onError={(e) => {
							e.currentTarget.alt = "Auth error";
						}}
					/>
					<button onClick={signOut}>Sign Out</button>
				</div>
			) : (
				<button className="twitter-sign-in-button" onClick={signInWithTwitter}>
					Sign in with Twitter
				</button>
			)}
		</div>
	);
};

export default TwitterAuth;

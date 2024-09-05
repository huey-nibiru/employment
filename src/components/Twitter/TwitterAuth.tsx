import React, { useState, useEffect } from "react";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = "YOUR_SUPABASE_URL";
const supabaseKey = "YOUR_SUPABASE_ANON_KEY";
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
		<div>
			{user ? (
				<div>
					<h2>Welcome, {user.username}!</h2>
					<img src={user.profilePicture} alt="Profile" width="50" height="50" />
					<button onClick={signOut}>Sign Out</button>
				</div>
			) : (
				<button onClick={signInWithTwitter}>Sign in with Twitter</button>
			)}
		</div>
	);
};

export default TwitterAuth;

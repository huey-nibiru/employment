import { useEffect, useState } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./Profile.css";
import Bio from "../../components/Bio/Bio";
import ProfileNav from "../../components/ProfileNav/ProfileNav";
import ProfileMain from "../../components/ProfileMain/ProfileMain";
import Achievements from "../../components/Achievements/Achievements";
import { supabase } from "../../client"; // MUST BE FIXED

const Profile = () => {
	const [user, setUser] = useState<User | null>(null); // Update the state type to allow User or null
	const [email, setEmail] = useState<string | null>(null); // Add state for email

	useEffect(() => {
		const fetchUser = async () => {
			const {
				data: { user },
				error,
			} = await supabase.auth.getUser();
			if (error) console.error("Error fetching user:", error);
			else {
				setUser(user); // This will now accept User or null
				if (user) {
					// Fetch email from 'user' table where user.id matches the authenticated user's UID
					const { data, error: emailError } = await supabase
						.from("user")
						.select("email")
						.eq("id", user.id)
						.single();
					if (emailError) console.error("Error fetching email:", emailError);
					else setEmail(data?.email || null); // Set email state
				}
			}
		};

		fetchUser();
	}, []);

	return (
		<div>
			<Navbar />

			{user ? (
				<Bio
					name={email || "Anonymous"} // Change name to use email instead
					profilePicture={
						user.user_metadata.profilePicture || "/path/to/default-pic.jpg"
					}
					basicInfo={user.user_metadata.basicInfo || "No info available"}
					description={
						user.user_metadata.description || "No description available"
					}
					rating={user.user_metadata.rating || 0}
				/>
			) : (
				<p>Please log in to see your profile.</p>
			)}

			<div className="middleComponents">
				<ProfileNav />
				<ProfileMain />
				<Achievements />
			</div>
		</div>
	);
};

export default Profile;

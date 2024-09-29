import React from "react";
import "./Profile.css"; // Assuming the same CSS file is used
import Navbar from "../../components/Navbar/Navbar";
import { supabase } from "../../client";

const Profile: React.FC = () => {
	const [username, setUsername] = React.useState<string | undefined>(undefined); // State to hold the username

	const retrieveUser = async () => {
		// Assuming user ID or email is available for querying
		const { data: userData, error } = await supabase
			.from("user")
			.select("username")
			.single();

		if (error) {
			console.error("Error retrieving user data:", error);
		} else {
			setUsername(userData?.username); // Set the username in state
		}
	};

	React.useEffect(() => {
		retrieveUser(); // Call retrieveUser on component mount
	}, []);

	return (
		<div className="profile-container">
			<Navbar />
			<h1>WELCOME TO EMPLOYMENT {username}</h1>
		</div>
	);
};

export default Profile;

// src/pages/Settings/Settings.tsx
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import { supabase } from "../../client";
import { useNavigate } from "react-router-dom";
const Settings: React.FC = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState(""); // New state for confirm password
	const [profilePicture, setProfilePicture] = useState<File | null>(null);

	const handleProfilePictureChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		if (event.target.files) {
			setProfilePicture(event.target.files[0]);
		}
	};

	const handleUpdate = async () => {
		if (password !== confirmPassword) {
			alert("Passwords do not match!"); // Alert if passwords do not match
			return;
		}

		const updates: any = {};
		if (username) updates.username = username; // Update username if not empty
		if (password) updates.password = password; // Update password if not empty

		// Logic to update username and password in Supabase
		const { error } = await supabase
			.from("user") // Assuming 'users' is the table name
			.update(updates)
			.eq("id", supabase.auth.user()?.id); // Update the current user's record

		if (error) {
			alert("Error updating profile: " + error.message);
		} else {
			alert("Profile updated successfully!");
		}
	};

	return (
		<div>
			<Navbar />
			<h1 style={{ color: "white" }}>User Profile Settings</h1>
			<table>
				<tbody>
					<tr>
						<td>Profile Picture:</td>
						<td>
							<input type="file" onChange={handleProfilePictureChange} />
						</td>
					</tr>
					<tr>
						<td>Username:</td>
						<td>
							<input
								type="text"
								value={username}
								onChange={(e) => setUsername(e.target.value)}
							/>
						</td>
					</tr>
					<tr>
						<td>Password:</td>
						<td>
							<input
								type="password"
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</td>
					</tr>
					<tr>
						<td>Confirm Password:</td> {/* New input for confirm password */}
						<td>
							<input
								type="password"
								value={confirmPassword}
								onChange={(e) => setConfirmPassword(e.target.value)}
							/>
						</td>
					</tr>
				</tbody>
			</table>
			<button onClick={handleUpdate}>Update Profile</button>
		</div>
	);
};

export default Settings;

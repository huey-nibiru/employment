// src/pages/Settings/Settings.tsx
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";

const Settings: React.FC = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [profilePicture, setProfilePicture] = useState<File | null>(null);

	const handleProfilePictureChange = (
		event: React.ChangeEvent<HTMLInputElement>
	) => {
		if (event.target.files) {
			setProfilePicture(event.target.files[0]);
		}
	};

	const handleUpdate = () => {
		// Logic to update username, password, and profile picture in Supabase
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
				</tbody>
			</table>
			<button onClick={handleUpdate}>Update Profile</button>
		</div>
	);
};

export default Settings;

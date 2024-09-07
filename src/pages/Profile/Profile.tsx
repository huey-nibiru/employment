import Navbar from "../../components/Navbar/Navbar";
import "./Profile.css";
import Bio from "../../components/Bio/Bio";

// In your render method or functional component

const Profile = () => {
	return (
		<div>
			<Navbar />
			<Bio
				name="Based Dom"
				profilePicture="/path/to/profile-pic.jpg"
				basicInfo="Niggabutt Enjoyer | Atlanta"
				description="Passionate about Nigger ass."
				rating={4.5}
			/>
		</div>
	);
};

export default Profile;

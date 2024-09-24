import Navbar from "../../components/Navbar/Navbar";
import "./Profile.css";
import Bio from "../../components/Bio/Bio";
import ProfileNav from "../../components/ProfileNav/ProfileNav";
import ProfileMain from "../../components/ProfileMain/ProfileMain";
import Achievements from "../../components/Achievements/Achievements";
// In your render method or functional component

const Profile = () => {
	return (
		<div>
			<Navbar />

			<Bio
				name="Cyberking"
				profilePicture="/path/to/profile-pic.jpg"
				basicInfo="Real Nigga | NYC"
				description="There are no peasants in the kingdom of Heaven."
				rating={4.5}
			/>

			<div className="middleComponents">
				<ProfileNav />
				<ProfileMain />
				<Achievements />
			</div>
		</div>
	);
};

//export default Profile;

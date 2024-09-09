import Navbar from "../../components/Navbar/Navbar";
import "./Profile.css";
import Bio from "../../components/Bio/Bio";
import ProfileNav from "../../components/ProfileNav/ProfileNav";
import ProfileMain from "../../components/ProfileMain/ProfileMain";
// In your render method or functional component

const Profile = () => {
	return (
		<div>
			<Navbar />
			{/* <div className="bioContainer">
				<Bio
					name="Cyberking"
					profilePicture="/path/to/profile-pic.jpg"
					basicInfo="Real Nigga | NYC"
					description="There are no peasants in the kingdom of Heaven."
					rating={4.5}
				/>
			</div>
			*/}
			{/*
			<div className="profileNavContainer">
				<ProfileNav />
			</div>
			*/}
			<ProfileMain />
		</div>
	);
};

export default Profile;

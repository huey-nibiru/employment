import "./Profile.css";
import { supabase } from "../../client"; // MUST BE FIXED
import { useEffect, useState } from "react";
import Bio from "../../components/Bio/Bio";
import Navbar from "../../components/Navbar/Navbar";
import ProfileNav from "../../components/Profile/Nav";
import ProfileMain from "../../components/Profile/Main";
import Achievements from "../../components/Achievements/Achievements";

const Profile = () => {
	return (
		<div>
			<Navbar />
			<Bio />
		</div>
	);
};

export default Profile;

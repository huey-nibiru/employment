import React, { useEffect, useState } from "react";
import { Box, Avatar, Typography } from "@mui/material";
import "./Dashboard.css";
import { fetchUsername, fetchUserRating } from "./GetValues";
import { ThreeDE } from "../ThreeDe/ThreeDe";
import sol from "../../assets/solana.jpg";

const Dashboard: React.FC = () => {
	const [username, setUsername] = useState("Data Unavailable");
	const [userRating, setUserRating] = useState("Data Unavailable");

	useEffect(() => {
		const getUsername = async () => {
			const fetchedUsername = await fetchUsername();
			if (fetchedUsername) setUsername(fetchedUsername);
		};

		const getUserRating = async () => {
			const fetchedRating = await fetchUserRating();
			if (fetchedRating) {
				setUserRating(" 💼 ".repeat(fetchedRating));
			}
			// Handle fetchedRating as needed
		};

		getUsername();
		getUserRating();
	}, []);

	return (
		<div className="dashboard">
			<div className="ThreeDe">
				<ThreeDE size={100} color="black" />
			</div>
			<Box
				display="flex"
				flexDirection="column"
				alignItems="center"
				sx={{ mb: 4 }}
			>
				<Avatar src="path/to/image.jpg" alt={username} />
				<Typography variant="h6">{username}</Typography>
				<Typography variant="h6">{userRating}</Typography>

				<Box display="flex" alignItems="center">
					<img
						src={sol}
						alt="Solana"
						style={{ width: 20, height: 20, marginRight: 5 }}
					/>
					<Typography variant="body1">10.000</Typography>
				</Box>
				<Typography variant="body1">$EMPLOYMENT: 30000000.00</Typography>
			</Box>
		</div>
	);
};

export default Dashboard;

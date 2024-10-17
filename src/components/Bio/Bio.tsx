import React from "react";
import { Box, Avatar, Typography, Rating } from "@mui/material";
import "./Bio.css";
import { CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";

interface BioProps {
	name: string;
	profilePicture: string;
	basicInfo: string;
	description: string;
	rating: number;
}

const Bio: React.FC<BioProps> = ({
	name,
	profilePicture,
	basicInfo,
	description,
	rating,
}) => {
	return (
		<Box className="bioContainer">
			<Box className="headerContainer">
				<Avatar src={profilePicture} alt={name} className="avatar" />

				<Box className="nameContainer">
					<Typography variant="h4" color="white">
						{name}
					</Typography>
					<Typography variant="body2" color="white">
						{basicInfo}
					</Typography>
				</Box>
			</Box>
			<Typography variant="body1" gutterBottom color="white">
				{description}
			</Typography>
			<Rating value={rating} readOnly max={5} />
			<Link to="/settings" className="settings">
				<button
					style={{
						display: "flex",
						alignItems: "center",
						backgroundColor: "#ffd700",
					}}
				>
					<CiSettings size={30} /> Profile Settings
				</button>
			</Link>
		</Box>
	);
};

export default Bio;

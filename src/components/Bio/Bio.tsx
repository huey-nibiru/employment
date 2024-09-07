import React from "react";
import { Box, Avatar, Typography, Rating } from "@mui/material";
import "./Bio.css";

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
				<Box>
					<Typography variant="h5">{name}</Typography>
					<Typography variant="body2" color="white">
						{basicInfo}
					</Typography>
				</Box>
			</Box>
			<Typography variant="body1" paragraph color="white">
				{description}
			</Typography>
			<Rating value={rating} readOnly max={5} />
		</Box>
	);
};

export default Bio;

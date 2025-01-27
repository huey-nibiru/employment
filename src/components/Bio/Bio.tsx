import React, { useEffect } from "react";
import { Box, Avatar, Typography, Rating } from "@mui/material";
import "./Bio.css";
import { CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
import { supabase } from "../../client";
import { ThreeDE } from "../ThreeDe/ThreeDe";

const Bio: React.FC = () => {
	return (
		<div className="glassmorphism">
			<div className="ThreeDe">
				<ThreeDE size={100} color="black" />
			</div>
			<Box
				className="dashboard"
				display="flex"
				flexDirection="column"
				alignItems="center"
				sx={{ mb: 4 }} // Add margin bottom
			>
				<Avatar src="path/to/image.jpg" alt="Username PFP" />
				<Typography variant="h6">Username</Typography>
				<Typography variant="body1">Solana Balance: 0.00</Typography>
				<Typography variant="body1">Employment Balance: 0.00</Typography>
			</Box>
		</div>
	);
};

export default Bio;

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
				<Avatar src="path/to/image.jpg" alt="Anon" />
				<Typography variant="h6">Anon</Typography>
				<Typography variant="body1">Sol: 10.000</Typography>
				<Typography variant="body1">$Employment: 30000000.00</Typography>
			</Box>
		</div>
	);
};

export default Bio;

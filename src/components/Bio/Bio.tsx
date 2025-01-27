import React, { useEffect } from "react";
import { Box, Avatar, Typography, Rating } from "@mui/material";
import "./Bio.css";
import { CiSettings } from "react-icons/ci";
import { Link } from "react-router-dom";
import { supabase } from "../../client";
import { ThreeDE } from "../ThreeDe/ThreeDe";
import sol from "../../assets/solana.png";

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

export default Bio;

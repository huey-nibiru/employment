import React, { useEffect, useState } from "react";
import { Box, Avatar, Typography } from "@mui/material";
import "./Bio.css";
import { supabase } from "../../client";
import { ThreeDE } from "../ThreeDe/ThreeDe";
import sol from "../../assets/solana.jpg";

const Bio: React.FC = () => {
	const [username, setUsername] = useState("Anon");

	useEffect(() => {
		const fetchUsername = async () => {
			try {
				// Get authenticated user
				const {
					data: { user: authUser },
					error: authError,
				} = await supabase.auth.getUser();

				if (authError || !authUser) {
					throw new Error("Not authenticated");
				}

				// Fetch username from your 'user' table
				const { data, error } = await supabase
					.from("user") // Use '"user"' if table name is a reserved keyword
					.select("username")
					.eq("id", authUser.id)
					.single();

				if (error) throw error;
				if (data?.username) setUsername(data.username);
			} catch (error) {
				console.error("Error fetching username:", error);
			}
		};

		fetchUsername();
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

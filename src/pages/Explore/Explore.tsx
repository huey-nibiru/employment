import "./Explore.css";
import agartha from "../../assets/agartha.jpg";
import aLogo from "../../assets/aLogo.jpg";
import HoneyCombProp from "../../components/Honeycomb/Honeycomb";
import Navbar from "../../components/Navbar/Navbar";
import { useState } from "react";
import { Link } from "react-router-dom";
//import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

const Explore = () => {
	const jobListings = [
		{
			title: "Rust Developer",
			username: "@cryptoDev1",
			price: "5 SOL",
			image: "https://via.placeholder.com/150",
		},
		{
			title: "3d Artist",
			username: "@nftArtist",
			price: "3 SOL",
			image: "https://via.placeholder.com/150",
		},
		{
			title: "Marketing Specialist",
			username: "@cryptoMarketer",
			price: "4 SOL",
			image: "https://via.placeholder.com/150",
		},
		{
			title: "Bitch Wife",
			username: "@blockchainGuru",
			price: "7 SOL",
			image: "https://via.placeholder.com/150",
		},
		{
			title: "Chief Vibes Officer",
			username: "@auditMaster",
			price: "6 SOL",
			image: "https://via.placeholder.com/150",
		},
		{
			title: "Timeline Strategist",
			username: "@defiKing",
			price: "8 SOL",
			image: "https://via.placeholder.com/150",
		},
		{
			title: "Analytics Specialist",
			username: "@cryptoDev1",
			price: "5 SOL",
			image: "https://via.placeholder.com/150",
		},
		{
			title: "NFT Artist for Collection",
			username: "@nftArtist",
			price: "3 SOL",
			image: "https://via.placeholder.com/150",
		},

		{
			title: "Consultant",
			username: "@blockchainGuru",
			price: "7 SOL",
			image: "https://via.placeholder.com/150",
		},

		{
			title: "Move Dev",
			username: "@cryptoDev1",
			price: "5 SOL",
			image: "https://via.placeholder.com/150",
		},
		{
			title: "Security",
			username: "@nftArtist",
			price: "3 SOL",
			image: "https://via.placeholder.com/150",
		},
		{
			title: "Pro Retard",
			username: "@nftArtist",
			price: "3 SOL",
			image: "",
		},
		{
			title: "Supplier",
			username: "@nftArtist",
			price: "3 SOL",
			image: "https://via.placeholder.com/150",
		},
		{
			title: "Girl",
			username: "@nftArtist",
			price: "3 SOL",
			image: "https://via.placeholder.com/150",
		},
	];

	return (
		<div>
			<Navbar />
			<HoneyCombProp jobListings={jobListings} />
			<div className="footer"></div>
		</div>
	);
};

export default Explore;

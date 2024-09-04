import "./Explore.css";
import agartha from "../../assets/agartha.jpg";
import aLogo from "../../assets/aLogo.jpg";
import HoneyCombProp from "../../components/Honeycomb/Honeycomb";

import { useState } from "react";
import { Link } from "react-router-dom";
//import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

declare global {
	interface Window {
		solana?: any;
	}
}

// These are place holder job listings for the explore page
// There will be a backend that will be used to fetch the job listings

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
			title: "Poster/Chief Vibes Officer",
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
			title: "Event Coordinator",
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

	const [walletAddress, setWalletAddress] = useState(null);

	// Function to connect to Phantom wallet
	const connectWallet = async () => {
		if (window.solana && window.solana.isPhantom) {
			try {
				await window.solana.connect({ onlyIfTrusted: false });
				const publicKey = window.solana.publicKey.toString();
				console.log("Connected with Public Key:", publicKey);
				setWalletAddress(publicKey);
			} catch (err) {
				console.error("Wallet connection failed:", err);
			}
		} else {
			alert(
				"Phantom wallet not found. Please install it from https://phantom.app"
			);
		}
	};

	// Function to disconnect the wallet
	const disconnectWallet = () => {
		setWalletAddress(null);
	};

	return (
		<div>
			{/* Navbar Component */}
			<nav className="navbar">
				<Link to="/">
					<img src={aLogo} alt="Logo" className="navbar-logo" />
				</Link>
				<div className="navbar-title">AGARTHA</div>
				<button
					className="navbar-button"
					onClick={walletAddress ? disconnectWallet : connectWallet}
				>
					{walletAddress ? "Disconnect" : "Connect wallet"}
				</button>
			</nav>

			<HoneyCombProp jobListings={jobListings} />
			<div className="footer"></div>
		</div>
	);
};

export default Explore;

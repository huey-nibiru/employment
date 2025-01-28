import React, { useState, useEffect } from "react";
import { Connection, PublicKey } from "@solana/web3.js";

// Extend Window interface to include Phantom
declare global {
	interface Window {
		solana?: any;
	}
}

const Connect: React.FC = () => {
	const [publicKey, setPublicKey] = useState<string | null>(null);
	const [balance, setBalance] = useState<number | null>(null);
	const [error, setError] = useState<string>("");
	const [isPhantomAvailable, setIsPhantomAvailable] = useState(false);

	// Check if Phantom is available on component mount
	useEffect(() => {
		setIsPhantomAvailable(!!window.solana?.isPhantom);
	}, []);

	// Connect to Phantom Wallet
	const connectWallet = async () => {
		try {
			const resp = await window.solana?.connect();
			if (resp?.publicKey) {
				setPublicKey(resp.publicKey.toString());
				setError("");
			}
		} catch (err) {
			setError("Failed to connect to Phantom Wallet");
			console.error(err);
		}
	};

	// Disconnect from Phantom Wallet
	const disconnectWallet = async () => {
		try {
			await window.solana?.disconnect();
			setPublicKey(null);
			setBalance(null);
			setError("");
		} catch (err) {
			setError("Failed to disconnect from Phantom Wallet");
			console.error(err);
		}
	};

	// Fetch SOL balance when publicKey changes
	useEffect(() => {
		const fetchBalance = async () => {
			if (publicKey) {
				try {
					const connection = new Connection(
						"https://api.mainnet-beta.solana.com"
					);
					const balanceInLamports = await connection.getBalance(
						new PublicKey(publicKey)
					);
					setBalance(balanceInLamports / 10 ** 9);
				} catch (err) {
					setError("Failed to fetch balance");
					console.error(err);
				}
			}
		};

		fetchBalance();
	}, [publicKey]);

	// Handle account change events
	useEffect(() => {
		const listener = window.solana?.on(
			"accountChanged",
			(newPublicKey: PublicKey) => {
				if (newPublicKey) {
					setPublicKey(newPublicKey.toString());
				} else {
					disconnectWallet();
				}
			}
		);

		return () => {
			if (listener) listener.remove();
		};
	}, []);

	return (
		<div style={{ padding: "20px", fontFamily: "Arial" }}>
			{!isPhantomAvailable ? (
				<p>
					Phantom Wallet not detected. Please install Phantom from{" "}
					<a
						href="https://phantom.app/"
						target="_blank"
						rel="noopener noreferrer"
					>
						their website
					</a>
				</p>
			) : publicKey ? (
				<div>
					<p>Wallet Address: {publicKey}</p>
					{balance !== null && <p>Balance: {balance} SOL</p>}
					<button
						onClick={disconnectWallet}
						style={{
							padding: "10px",
							backgroundColor: "#ff4444",
							color: "white",
							border: "none",
							borderRadius: "5px",
							cursor: "pointer",
						}}
					>
						Disconnect
					</button>
				</div>
			) : (
				<button
					onClick={connectWallet}
					style={{
						padding: "10px",
						backgroundColor: "#4CAF50",
						color: "white",
						border: "none",
						borderRadius: "5px",
						cursor: "pointer",
					}}
				>
					Connect to Phantom
				</button>
			)}
			{error && <p style={{ color: "red" }}>Error: {error}</p>}
		</div>
	);
};

export default Connect;

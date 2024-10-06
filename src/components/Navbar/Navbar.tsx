import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { AuthContext } from "../../utils/AuthProvider"
import {supabase} from "../../client" 

const Navbar: React.FC = () => {
	const { isAuthenticated } = useContext(AuthContext);
	const [isConnected, setIsConnected] = useState(false);
	const [walletAddress, setWalletAddress] = useState("");

	const connectWallet = async () => {
		// Implement Phantom wallet connection logic here
		setIsConnected(true);
		setWalletAddress("ABC...XYZ");
	};

	const disconnectWallet = () => {
		setIsConnected(false);
		setWalletAddress("");
	};


	const handleLogout = async () => {
		try {
		  const { error } = await supabase.auth.signOut();
		  if (error) {
			throw new Error(error);
		  }
		  window.location.reload();
		} catch (err) {
		  console.error(err);
		}
	  };

	return (
		<nav className="navbar">
			<div className="navbar-container">
				<div className="navbar-left">
					<Link to="/" className="navbar-link">
						Home
					</Link>
					<Link to="/explore" className="navbar-link">
						Explore
					</Link>
					{isConnected ? (
						<>
							<Link to="/profile" className="navbar-link">
								Profile
							</Link>
							<button
								onClick={disconnectWallet}
								className="navbar-link navbar-button logoff-button"
							>
								Logoff
							</button>
						</>
					) : (
						<Link to="/Register" className="navbar-link">
							Register/Login
						</Link>
					)}
				</div>
				<div className="navbar-center">
					<span className="navbar-title">EMPLOYMENT</span>
				</div>
				<div className="navbar-right">
					{isAuthenticated ? <button className="sign-out" onClick={handleLogout}>Sign Out</button> : null}
					{isConnected ? (
						<button
							onClick={disconnectWallet}
							className="navbar-button disconnect-button"
						>
							{walletAddress}
						</button>
					) : (
						<button
							onClick={connectWallet}
							className="navbar-button connect-button"
						>
							Connect Wallet
						</button>
					)}
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

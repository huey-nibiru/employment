import React from "react";
import "./Main.css";

// New ProfileMain component with glassmorphism
const ProfileMain: React.FC = () => {
	return (
		<div className="profile-main">
			{/* User Bio Section with glassmorphism */}
			<div className="user-bio glassmorphism">
				<h2 className="glassmorphism-header">User Bio</h2>

				<div className="skills-icons">
					{/* Icons for key skills */}
					<ul>
						<li>🎨 Design</li>
						<li>💻 Coding</li>
					</ul>
				</div>
			</div>

			{/* Skills & Endorsements Section with glassmorphism */}
			<div className="skills-endorsements glassmorphism">
				<h2 className="glassmorphism-header">Skills & Endorsements</h2>
				<div className="skills-tags">
					{/* Example tags for skills */}
					<ul>
						<li className="tag">JavaScript</li>
						<li className="tag">React</li>
					</ul>
				</div>
			</div>

			{/* Earnings & Escrow Balance Section with glassmorphism */}
			<div className="earnings-escrow glassmorphism">
				<h2 className="glassmorphism-header">Earnings & Escrow Balance</h2>
				<ul>
					<li>Total Earnings: 10 SOL</li>
					<li>Escrow Balance: 2 SOL</li>
					<li>Pending Payments: 1 SOL</li>
				</ul>
			</div>

			{/* Available Services Section with glassmorphism */}
			<div className="available-services glassmorphism">
				<div className="services">
					<h2 className="glassmorphism-header">Available Services</h2>
					<ul>
						<li>Web Development</li>
						<li>Graphic Design</li>
						<li>Content Writing</li>
					</ul>
				</div>
				<button className="hire-me-btn glassmorphism-btn">Hire Me</button>
			</div>
		</div>
	);
};

export default ProfileMain;

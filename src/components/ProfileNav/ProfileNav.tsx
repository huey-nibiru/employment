import React from "react";
import "./ProfileNav.css";

const ProfileNav = () => {
	const [activeTab, setActiveTab] = React.useState("overview");

	const renderTabContent = () => {
		switch (activeTab) {
			case "overview":
				return <div> {/* Overview content here */} </div>;
			case "portfolio":
				return <div> {/* Portfolio content here */} </div>;
			case "reviews":
				return <div> {/* Reviews content here */} </div>;
			case "bids":
				return <div> {/* Bids & Proposals content here */} </div>;
			default:
				return null;
		}
	};

	return (
		<div className="profile-tabs">
			<div className="tab-buttons">
				<button onClick={() => setActiveTab("overview")}>Overview</button>
				<button onClick={() => setActiveTab("portfolio")}>Portfolio</button>
				<button onClick={() => setActiveTab("reviews")}>Reviews</button>
				<button onClick={() => setActiveTab("bids")}>Bids & Proposals</button>
			</div>
			<div className="tab-content">{renderTabContent()}</div>
		</div>
	);
};

export default ProfileNav;

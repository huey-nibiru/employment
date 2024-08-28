// src/Ticker.tsx

import "./Ticker.css"; 

const Ticker = () => {
	return (
		<div className="ticker">
			{" "}
			{/* Container for the ticker */}
			<div className="ticker-content">
				{" "}
				{/* Inner container for mantras */}
				<span>
					{/* EMPLOYMENT MANTRAS  */}
					💼 "Employment is your only path to freedom." | 📉 "Without work,
					society crumbles." | 🔒 "Job security: your safeguard against chaos."
					| ⏳ "Time is money; don’t waste it." | 🌍 "Your labor is your value
					in this world." | 🚨 "No job? No future!" | 📊 "Stay employed, stay
					alive." | 💪 "Contribute or be forgotten." | ⚠️ "Survival of the
					employed." | 🏢 "Work defines your existence."
				</span>
			</div>
		</div>
	);
};

export default Ticker;

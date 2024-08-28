// src/App.tsx

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router and routing components
import Home from "./pages/Homepage"; // Import the Home component
import Explore from "./pages/Explore"; // Import the login component

const App = () => {
	return (
		<Router>
			{" "}
			<Routes>
				{" "}
				<Route path="/" element={<Home />} />
				<Route path="/explore" element={<Explore />} />{" "}
			</Routes>
		</Router>
	);
};

export default App;

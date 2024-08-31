// src/App.tsx

import { BrowserRouter as Router, Route, Routes } from "react-router-dom"; // Import Router and routing components
import Home from "./pages/Homepage"; // Import the Home component
import Login from "./pages/Login"; // Import the login component
import Explore from "./pages/Explore"; // Import the login component
import TwitterCallback from "./components/TwitterCallback";

const App = () => {
	return (
		<Router>
			{" "}
			<Routes>
				{" "}
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/explore" element={<Explore />} />{" "}
				<Route path="/callback" element={<TwitterCallback />} />
			</Routes>
		</Router>
	);
};

export default App;

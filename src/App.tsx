// src/App.tsx

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Homepage";
import Login from "./pages/Login/Login";
import Explore from "./pages/Explore/Explore";
import TwitterCallback from "./components/Twitter/TwitterCallback";

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

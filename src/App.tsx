import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Homepage";
import Login from "./pages/Login/Login";
import Explore from "./pages/Explore/Explore";
import Profile from "./pages/Profile/Profile2";

const App = () => {
	return (
		<Router>
			{" "}
			<Routes>
				{" "}
				<Route path="/" element={<Home />} />
				<Route path="/login" element={<Login />} />
				<Route path="/explore" element={<Explore />} />
				<Route path="/profile" element={<Profile />} />
			</Routes>
		</Router>
	);
};

export default App;

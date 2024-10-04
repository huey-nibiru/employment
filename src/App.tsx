import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Homepage";
import Register from "./pages/Register/Register";
import Explore from "./pages/Explore/Explore";
import Profile from "./pages/Profile/Profile2";
import Welcome from "./components/Welcome/Welcome";
import Navbar from "./components/Navbar/Navbar";

const App = () => {
	return (
		<Router>
			<Navbar/>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/register" element={<Register />} />
				<Route path="/explore" element={<Explore />} />
				<Route path="/profile" element={<Profile />} />
				<Route path="/welcome" element={<Welcome />} />
			</Routes>
		</Router>
	);
};

export default App;

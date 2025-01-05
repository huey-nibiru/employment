import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Homepage";
import Register from "./pages/Register/Register";
import Explore from "./pages/Explore/Explore";
import Profile from "./pages/Profile/Profile";
import Welcome from "./components/Welcome/Welcome";
import Navbar from "./components/Navbar/Navbar";
import AuthProvider from "./utils/AuthProvider";
import Settings from "./pages/Settings/Settings";

const App = () => {
	return (
		<AuthProvider>
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" element={<Register />} />
					<Route path="/register" element={<Register />} />
					<Route path="/explore" element={<Explore />} />
					<Route path="/profile" element={<Profile />} />
					<Route path="/welcome" element={<Welcome />} />
					<Route path="/settings" element={<Settings />} />
					<Route path="/home" element={<Home />} />
				</Routes>
			</Router>
		</AuthProvider>
	);
};

export default App;

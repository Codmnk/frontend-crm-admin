import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login/Login";
import "./App.scss";
import Register from "./pages/register/register";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
	return (
		<Router>
			<ToastContainer />
			<Routes>
				<Route exact path="/dashboard" element={<Dashboard />} />

				<Route path="/register" element={<Register />} />
				<Route path="/" element={<Login />} />
			</Routes>
		</Router>
	);
}

export default App;

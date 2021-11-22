import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./pages/login/Login";
import "./App.scss";
import Register from "./pages/register/register";

function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<Login />} />
				<Route path="/register" element={<Register />} />
			</Routes>
		</Router>
	);
}

export default App;

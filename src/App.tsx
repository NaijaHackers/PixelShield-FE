import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "@pages/home/page";

function App() {
	return (
		<Router>
			<nav className="flex gap-2">
				<Link to="/">Home</Link>
			</nav>
			<Routes>
				<Route path="/" element={<Home />} />
			</Routes>
		</Router>
	);
}

export default App;

import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import Portfolio from "../Pages/Portfolio";

export default function HomeRoute() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/blog" element={<Blog />} />
			<Route path="/portfolio" element={<Portfolio />} />
		</Routes>
	);
}

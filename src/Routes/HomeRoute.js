import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Blog from "../Pages/Blog";
import Portfolio from "../Pages/Portfolio";
import NotFound from "../Pages/Errors/NotFound";
import UnderDevelopment from "../Pages/Errors/UnderDevelopment";

export default function HomeRoute() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/portfolio" element={<Portfolio />} />
			{/* <Route path="/blog" element={<Blog />} /> */}
			<Route path="/blog" element={<UnderDevelopment />} />

			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

import { Routes, Route } from "react-router-dom";
import Home from "../Pages/User/Home";
import Blog from "../Pages/User/Blog";
import BlogDetail from "../Pages/User/Blog/detail";
import Portfolio from "../Pages/User/Portfolio";
import NotFound from "../Pages/User/Errors/NotFound";
import UnderDevelopment from "../Pages/User/Errors/UnderDevelopment";

export default function HomeRoute() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/portfolio" element={<Portfolio />} />
			<Route path="/blog" element={<Blog />} />
			<Route path="/blog/:slug" element={<Blog />} />
			<Route path="/blog/detail/:slug" element={<BlogDetail />} />

			{/* <Route path="/blog" element={<UnderDevelopment />} /> */}
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
}

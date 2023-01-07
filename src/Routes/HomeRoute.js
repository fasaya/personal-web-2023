import { Routes, Route } from "react-router-dom";
import Home from "../Pages/User/Home";
import Blog from "../Pages/User/Blog";
import BlogDetail from "../Pages/User/Blog/detail";
import Portfolio from "../Pages/User/Portfolio";
import NotFound from "../Pages/User/Errors/NotFound";
import UnderDevelopment from "../Pages/User/Errors/UnderDevelopment";
import Login from "../Pages/Admin/Auth/Login";

const HomeRoute = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/portfolio" element={<Portfolio />} />
			<Route path="/blog" element={<Blog />} />
			<Route path="/blog/:slug" element={<BlogDetail />} />

			<Route path="/admin/login" element={<Login />} />

			{/* <Route path="/blog" element={<UnderDevelopment />} /> */}
			<Route path="*" element={<NotFound />} />
		</Routes>
	);
};

export default HomeRoute;

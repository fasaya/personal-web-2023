import React, { useEffect, useState } from "react";
import Pagination from "../../../Components/Pagination";
import Contents from "./Contents";
import Side from "./Side";
import { Link, useLocation } from "react-router-dom";
import axios from "axios";
import { API, LOCAL_STORAGE } from "../../../Constants";

const Blog = () => {
	const queryParams = new URLSearchParams(window.location.search);

	const location = useLocation();
	const [posts, setPosts] = useState([]);
	const [meta, setMeta] = useState(null);

	const cat = queryParams.get("category");
	const page = queryParams.get("page");

	useEffect(() => {
		getPosts(cat, page);
	}, [location]);

	function getPosts(category, page = 1) {
		setPosts([]);
		setMeta(null);
		axios
			.get(API.POSTS, {
				params: {
					category: category,
					page: page,
				},
			})
			.then((response) => {
				// console.log("response", response.data);
				if (response.status == 200) {
					setPosts(response.data.data);
					setMeta(response.data.meta);
				}
			});
	}

	return (
		<section className="bg-custom-grey h-full mt-24 mb-20 md:mt-40 md:mb-32 mx-20">
			<div className="mx-auto grid grid-cols-4 gap-4 w-4/5">
				<div className="col-span-4">
					<div className="content text-center sm:text-left">
						<div className="title">
							<div className="title_inner !text-xl">Blog</div>
							<p className="text-md text-gray-400">
								Some writings...
							</p>
						</div>
					</div>
				</div>

				<div className="col-span-1">
					{sessionStorage.getItem("jwtToken") !== null && (
						<Link to="/admin/blog">
							<button
								type="button"
								className="btn fill mb-3"
								style={{ width: "100%" }}
							>
								Create
							</button>
						</Link>
					)}

					<Side />
				</div>

				<div className="col-span-3">
					<Contents posts={posts} />

					<div className="mt-4">
						<Pagination meta={meta} category={cat} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blog;

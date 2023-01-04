import React, { useEffect, useState } from "react";
import Pagination from "../../../Components/Pagination";
import Contents from "./Contents";
import Side from "./Side";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { API } from "../../../Constants";

const Blog = () => {
	const location = useLocation();
	const [posts, setPosts] = useState([]);

	const queryParams = new URLSearchParams(window.location.search);
	let cat = queryParams.get("category");

	useEffect(() => {
		getPosts(cat);
	}, [location]);

	function getPosts(category) {
		setPosts([]);
		axios
			.get(API.POSTS, {
				params: {
					category: category,
				},
			})
			.then((response) => {
				console.log("response", response.data.data);
				if (response.status == 200) {
					setPosts(response.data.data);
				}
			});
	}

	return (
		<section className="bg-custom-grey h-full mt-24 mb-20 md:mt-40 md:mb-32 mx-20">
			<div className="mx-auto grid grid-cols-4 gap-4 w-4/5">
				<div className="col-span-4 mb-2">
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
					<Side />
				</div>

				<div className="col-span-3">
					<Contents posts={posts} />

					<div className="mt-4">
						<Pagination />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Blog;

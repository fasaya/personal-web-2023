import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { API } from "../../../Constants";

const Side = ({}) => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		axios.get(API.CATEGORIES).then((response) => {
			// console.log("response", response.data.data);
			if (response.status == 200) {
				setCategories(response.data.data);
			}
		});
	}, []);

	return (
		<div
			className="p-3"
			style={{
				border: "1px solid #f26b38",
			}}
		>
			<div className="content text-center sm:text-left">
				<h1 className="text-custom-white-1 underline">CATEGORIES</h1>

				<div className="mt-2">
					<Link to={"/blog?page=1"}>
						<div className="text-gray-300 mb-0.5">All</div>
					</Link>
					{categories.map((category) => (
						<Link
							to={"/blog?category=" + category.slug + "&page=1"}
							key={category.slug}
						>
							<div
								className="text-gray-300 mb-0.5"
								key={category.slug}
							>
								{category.name}
								{/* {category.is_private && (
									<span className="fa fa-lock ml-1"></span>
								)} */}
							</div>
						</Link>
					))}
				</div>
			</div>
		</div>
	);
};

export default Side;

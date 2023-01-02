import React from "react";
import { Link } from "react-router-dom";

const Content = ({ posts }) => {
	let myDate = new Date().toLocaleDateString();

	return (
		<dl className="grid gap-4 ml-3">
			{posts.map((post) => (
				<Link to={"/blog/detail/" + post.slug}>
					<div
						key={post.name}
						className="border-b border-custom-grey-light pb-4"
					>
						<dt className="font-medium text-custom-white-1">
							{post.name}
						</dt>
						<dd className="mt-1 text-sm text-gray-400 mb-0.5">
							{post.description}
						</dd>
						<small className="text-gray-400">{myDate}</small>
					</div>
				</Link>
			))}
		</dl>
	);
};

export default Content;

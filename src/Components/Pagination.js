import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { API } from "../Constants";

const Pagination = ({ meta, category }) => {
	// const [links, setLinks] = useState(null);
	// console.log("meta", meta);
	// console.log("category", category);

	// useEffect(() => {
	// 	setLinks(meta.links ?? null);
	// }, [links]);

	return (
		<>
			{meta?.links && (
				<ul className="inline-flex space-x-2 ml-3">
					{meta.links.map(
						(item, key) =>
							item.url && (
								<Link
									key={key}
									to={
										"/blog" +
										item.url.replace(API.POSTS, "")
									}
								>
									<li>
										<button
											className={
												"w-10 h-10 transition-colors duration-150 focus:shadow-outline " +
												(item.active
													? "text-white border border-custom-orange-1"
													: "text-custom-orange-1 hover:bg-custom-white-1")
											}
										>
											{item.label}
										</button>
									</li>
								</Link>
							)
					)}
					{/* 
					<li>
						<button className="flex items-center justify-center w-10 h-10 text-custom-orange-1 transition-colors duration-150 focus:shadow-outline hover:bg-custom-white-1">
							<svg
								className="w-4 h-4 fill-current"
								viewBox="0 0 20 20"
							>
								<path
									d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
									clipRule="evenodd"
									fillRule="evenodd"
								/>
							</svg>
						</button>
					</li>
					<li>
						<button className="w-10 h-10 transition-colors duration-150 focus:shadow-outline text-custom-orange-1 hover:bg-custom-white-1">
							1
						</button>
					</li>
					<li>
						<button className="w-10 h-10 transition-colors duration-150 focus:shadow-outline text-custom-orange-1 hover:bg-custom-white-1">
							2
						</button>
					</li>
					<li>
						<button className="w-10 h-10 transition-colors duration-150 focus:shadow-outline text-white border border-custom-orange-1 ">
							3
						</button>
					</li>
					<li>
						<button className="flex items-center justify-center w-10 h-10 text-custom-orange-1 transition-colors duration-150 bg-white focus:shadow-outline hover:bg-custom-white-1">
							<svg
								className="w-4 h-4 fill-current"
								viewBox="0 0 20 20"
							>
								<path
									d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
									clipRule="evenodd"
									fillRule="evenodd"
								/>
							</svg>
						</button>
					</li> */}
				</ul>
			)}
		</>
	);
};

export default Pagination;

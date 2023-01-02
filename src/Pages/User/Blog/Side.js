import React, { useEffect, useState } from "react";

const myCategories = [
	{ id: 1, slug: "tutorials", name: "Tutorials", is_public: true },
	{ id: 2, slug: "curhat", name: "Curhat", is_public: false },
	{ id: 3, slug: "other", name: "Other", is_public: true },
];

const Side = () => {
	const [categories, setCategories] = useState(myCategories);

	useEffect(() => {
		//
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
					{categories.map((category) => (
						<div key={category.id} className="text-gray-300 mb-0.5">
							<a href="#">
								{category.name}
								{!category.is_public && (
									<span className="fa fa-lock ml-1"></span>
								)}
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Side;

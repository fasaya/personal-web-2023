import React from "react";

const Side = () => {
	let categories = [
		{ slug: "tutorial", name: "Tutorial" },
		{ slug: "curhat", name: "Curhat" },
		{ slug: "other", name: "Other" },
	];

	return (
		<div
			className="p-3"
			style={{
				border: "1px solid #f26b38",
			}}
		>
			<div className="content text-center sm:text-left">
				<h1 className="text-custom-white-1">CATEGORIES</h1>

				<div className="mt-2">
					{categories.map((category) => (
						<div className="text-gray-300 mb-0.5">
							{category.name}
						</div>
					))}
				</div>
			</div>
			{/* <img
				src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-01.jpg"
				alt="Walnut card tray with white powder coated steel divider and 3 punchout holes."
				className="rounded-lg bg-gray-100"
			/>
			<img
				src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-02.jpg"
				alt="Top down view of walnut card tray with embedded magnets and card groove."
				className="rounded-lg bg-gray-100"
			/>
			<img
				src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-03.jpg"
				alt="Side of walnut card tray with card groove and recessed card area."
				className="rounded-lg bg-gray-100"
			/>
			<img
				src="https://tailwindui.com/img/ecommerce-images/product-feature-03-detail-04.jpg"
				alt="Walnut card tray filled with cards and card angled in dedicated groove."
				className="rounded-lg bg-gray-100"
			/> */}
		</div>
	);
};

export default Side;

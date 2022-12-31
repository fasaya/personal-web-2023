import React from "react";
import Side from "./Side";

const posts = [
	{ name: "Origin", description: "Designed by Good Goods, Inc." },
	{
		name: "Material",
		description:
			"Solid walnut base with rare earth magnets and powder coated steel card cover",
	},
	{ name: "Dimensions", description: '6.25" x 3.55" x 1.15"' },
	{
		name: "Finish",
		description: "Hand sanded and finished with natural oil",
	},
	{ name: "Includes", description: "Wood card tray and 3 refill packs" },
	{
		name: "Considerations",
		description:
			"Made from natural materials. Grain and color vary with each item.",
	},
];

let datee = new Date().toLocaleDateString();

const Blog = () => (
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
				<dl className="grid gap-4 ml-3">
					{posts.map((post) => (
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
							<small className="text-gray-400">{datee}</small>
						</div>
					))}
				</dl>
			</div>
		</div>
	</section>
);

export default Blog;

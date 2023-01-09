import React, { useEffect, useState } from "react";

const BlogCreate = () => {
	return (
		<section className="bg-custom-grey h-full mt-24 mb-20 md:mt-40 md:mb-32 mx-20">
			<div className="mx-auto grid grid-cols-4 gap-4 w-4/5">
				<div className="col-span-4 mb-2">
					<div className="content text-center sm:text-left">
						<div className="title">
							<div className="title_inner !text-xl">Blog</div>
							<p className="text-md text-gray-400">Create</p>
						</div>
					</div>
				</div>

				<div className=""></div>
			</div>
		</section>
	);
};

export default BlogCreate;

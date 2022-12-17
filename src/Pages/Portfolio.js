import React from "react";

let portfolios = [
	{
		title: "my.tfx.co.id",
		company: "PT. Teknologi Finansial Berjangka",
		desc: "",
		images: ["/images/tfx1.png", "/images/tfx2.png"],
		url: "https://my.tfx.co.id",
	},
	{
		title: "lenteradigitalindonesia.com",
		company: "KSP Lentera Digital Indonesia",
		desc: "",
		images: ["/images/ldi1.png", "/images/ldi2.png"],
		url: "https://lenteradigitalindonesia.com",
	},
	{
		title: "sahirakitchen.com",
		company: "Sahira Kitchen",
		desc: "",
		images: [
			"/images/sahira1.png",
			"/images/sahira2.png",
			"/images/sahira3.png",
		],
		url: "https://sahirakitchen.com",
	},
	{
		title: "bosscommunity.net",
		company: "Bossvalas",
		desc: "",
		images: [
			"/images/bossvalas1.png",
			"/images/bossvalas2.png",
			"/images/bossvalas3.png",
		],
		url: "https://bosscommunity.net",
	},
];

const Portfolio = () => (
	<section className="bg-white dark:bg-custom-grey mt-32 mb-20 md:mt-40 md:mb-32">
		<div className="h-fit flex items-center justify-center text-custom-grey-light">
			<div className="sm:w-3/5 w-5/6 text-center">
				<div className="content text-center sm:text-left">
					<div className="title">
						<div className="title_inner">Portfolio</div>
						<p class="text-md text-gray-500 dark:text-gray-400">
							Here are some projects that i have worked on and/or
							contributed to.
						</p>
					</div>
				</div>
				<ul
					role="list"
					className="divide-y divide-gray-200 dark:divide-gray-700"
				>
					{portfolios.map((item, index) => (
						<li className="py-3 sm:py-4" key={index}>
							<div className="flex items-center space-x-4">
								<div className="flex-1 min-w-0 text-left">
									<p className="text-md font-semibold text-white">
										{item.company}
									</p>
									<p className="text-sm font-sm text-gray-300 dark:text-white-500 mb-2">
										<a href={item.url}>{item.title}</a>
									</p>
									<div className="flex overflow-x-scroll mb-3 hide-scroll-bar-">
										<div className="flex flex-nowrap">
											{item.images.map((image) => (
												<div className="inline-block mr-3">
													<img
														src={
															process.env
																.PUBLIC_URL +
															image
														}
														alt=""
														className="max-w-xs max-h-32 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
														height="400px"
														loading="lazy"
													/>
												</div>
											))}
										</div>
									</div>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</div>
	</section>
);

export default Portfolio;

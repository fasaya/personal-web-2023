import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

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

const Portfolio = () => {
	const [lightboxController, setLightboxController] = useState({
		toggler: false,
		slide: 1,
	});

	const [myImages, setMyImages] = useState([]);

	function openLightboxOnSlide(item) {
		let imagez = portfolios[item[0]].images.map(
			(line) => process.env.PUBLIC_URL + `${line}`
		);

		setMyImages(imagez);

		setLightboxController({
			toggler: !lightboxController.toggler,
			slide: item[1],
		});
	}

	return (
		<>
			<section className="bg-white dark:bg-custom-grey mt-32 mb-20 md:mt-40 md:mb-32">
				<div className="h-fit flex items-center justify-center text-custom-grey-light">
					<div className="sm:w-3/5 w-5/6 text-center">
						<div className="content text-center sm:text-left">
							<div className="title">
								<div className="title_inner">Portfolio</div>
								<p className="text-md text-gray-500 dark:text-gray-400">
									Here are some projects that i have worked on
									and/or contributed to.
								</p>
							</div>
						</div>
						<ul
							role="list"
							className="divide-y divide-gray-200 dark:divide-gray-700"
						>
							{portfolios.map((portfolio, index1) => (
								<li className="py-3 sm:py-4" key={index1}>
									<div className="flex items-center space-x-4">
										<div className="flex-1 min-w-0 text-left">
											<p className="text-md font-semibold text-white">
												{portfolio.company}
											</p>
											<p className="text-sm font-sm text-gray-300 dark:text-white-500 mb-2">
												<a href={portfolio.url}>
													{portfolio.title}
												</a>
											</p>
											<div className="flex overflow-x-scroll mb-3 hide-scroll-bar-">
												<div className="flex flex-nowrap">
													{portfolio.images.map(
														(image, index2) => (
															<div
																className="inline-block mr-3"
																key={index2}
															>
																<img
																	src={
																		process
																			.env
																			.PUBLIC_URL +
																		image
																	}
																	alt={
																		portfolio.title
																	}
																	className="max-w-xs max-h-32 overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out"
																	height="400px"
																	loading="lazy"
																	onClick={() =>
																		openLightboxOnSlide(
																			[
																				index1,
																				index2 +
																					1,
																			]
																		)
																	}
																/>
															</div>
														)
													)}
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

			<FsLightbox
				toggler={lightboxController.toggler}
				sources={myImages}
				slide={lightboxController.slide}
				onClose={(instance) => setMyImages([])}
			/>
		</>
	);
};

export default Portfolio;

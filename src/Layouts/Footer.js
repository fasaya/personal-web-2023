import React from "react";
import { NavLink } from "react-router-dom";
import {
	LogoGithub,
	LogoTwitter,
	LogoDiscord,
	LogoLinkedin,
	LogoInstagram,
} from "react-ionicons";
import SpotifyNowPlayingNew from "../Components/Spotify/SpotifyNowPlayingNew";
import SpotifyNowPlaying from "../Components/Spotify/SpotifyNowPlaying";

export default function Footer() {
	const d = new Date();
	let year = d.getFullYear();

	return (
		// <footer className="bg-custom-grey">
		// 	<div className="soc mt-0 ml-4 mr-4 mb-4 md:m-0 md:ml-3 text-center float-none md:float-right">
		// 		<a target="_blank" href="https://github.com/fasaya">
		// 			<LogoGithub
		// 				color={"#f0f0f0"}
		// 				className="text-custom-grey-light"
		// 				height="25px"
		// 				width="25px"
		// 			/>
		// 		</a>
		// 		<a target="_blank" href="https://twitter.com/fasayaym">
		// 			<LogoTwitter
		// 				color={"#f0f0f0"}
		// 				className="text-custom-grey-light"
		// 				height="25px"
		// 				width="25px"
		// 			/>
		// 		</a>
		// 		<a target="_blank" href="#">
		// 			<LogoDiscord
		// 				color={"#f0f0f0"}
		// 				className="text-custom-grey-light"
		// 				height="25px"
		// 				width="25px"
		// 			/>
		// 		</a>
		// 		<a
		// 			target="_blank"
		// 			href="https://www.linkedin.com/in/andi-fasaya-yaqhsya-ma-ruf-77a422131"
		// 		>
		// 			<LogoLinkedin
		// 				color={"#f0f0f0"}
		// 				className="text-custom-grey-light"
		// 				height="25px"
		// 				width="25px"
		// 			/>
		// 		</a>
		// 		<a target="_blank" href="https://instagram.com/fasaya">
		// 			<LogoInstagram
		// 				color={"#f0f0f0"}
		// 				className="text-custom-grey-light"
		// 				height="25px"
		// 				width="25px"
		// 			/>
		// 		</a>
		// 	</div>
		// 	<div className="hidden md:block text-custom-grey-light text-center sm:text-left footer-copyright m-0">
		// 		{/* © {year} Fasaya. All rights reserved. */}
		// 		{/* <SpotifyNowPlayingNew /> */}
		// 		<SpotifyNowPlaying />
		// 	</div>
		// 	<div className="clr" />
		// </footer>

		<footer className="bg-custom-grey">
			<div class="flex justify-center md:justify-between">
				<div className="hidden md:flex text-custom-grey-light text-center sm:text-left m-0 content-center">
					<SpotifyNowPlaying />
				</div>
				<div className="float-none md:float-right content-center">
					<div className="flex text-right sm:text-center gap-2">
						<a target="_blank" href="https://github.com/fasaya">
							<LogoGithub
								color={"#f0f0f0"}
								className="text-custom-grey-light"
								height="25px"
								width="25px"
							/>
						</a>
						<a target="_blank" href="https://twitter.com/fasayaym">
							<LogoTwitter
								color={"#f0f0f0"}
								className="text-custom-grey-light"
								height="25px"
								width="25px"
							/>
						</a>
						<a target="_blank" href="#">
							<LogoDiscord
								color={"#f0f0f0"}
								className="text-custom-grey-light"
								height="25px"
								width="25px"
							/>
						</a>
						<a
							target="_blank"
							href="https://www.linkedin.com/in/andi-fasaya-yaqhsya-ma-ruf-77a422131"
						>
							<LogoLinkedin
								color={"#f0f0f0"}
								className="text-custom-grey-light"
								height="25px"
								width="25px"
							/>
						</a>
						<a target="_blank" href="https://instagram.com/fasaya">
							<LogoInstagram
								color={"#f0f0f0"}
								className="text-custom-grey-light"
								height="25px"
								width="25px"
							/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

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

export default function Footer() {
	const d = new Date();
	let year = d.getFullYear();

	return (
		<footer className="bg-custom-grey">
			<div className="soc mt-0 ml-4 mr-4 mb-4 md:m-0 md:ml-3 text-center float-none md:float-right">
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
			<div className="hidden md:block text-custom-grey-light text-center sm:text-left footer-copyright m-0">
				{/* © {year} Fasaya. All rights reserved. */}
				<SpotifyNowPlayingNew />
			</div>
			<div className="clr" />
		</footer>
	);
}

import React from "react";
import { NavLink } from "react-router-dom";
import {
	LogoGithub,
	LogoTwitter,
	LogoDiscord,
	LogoLinkedin,
	LogoInstagram,
} from "react-ionicons";

export default function Footer() {
	const d = new Date();
	let year = d.getFullYear();

	return (
		<footer className="bg-custom-grey">
			<div className="soc">
				<NavLink to="https://github.com/fasaya">
					<LogoGithub
						color={"#f0f0f0"}
						className="text-custom-grey-light"
						height="25px"
						width="25px"
					/>
				</NavLink>
				<NavLink to="https://twitter.com/fasayaym">
					<LogoTwitter
						color={"#f0f0f0"}
						className="text-custom-grey-light"
						height="25px"
						width="25px"
					/>
				</NavLink>
				<NavLink to="#">
					<LogoDiscord
						color={"#f0f0f0"}
						className="text-custom-grey-light"
						height="25px"
						width="25px"
					/>
				</NavLink>
				<NavLink to="https://www.linkedin.com/in/andi-fasaya-yaqhsya-ma-ruf-77a422131">
					<LogoLinkedin
						color={"#f0f0f0"}
						className="text-custom-grey-light"
						height="25px"
						width="25px"
					/>
				</NavLink>
				<NavLink to="https://instagram.com/fasaya">
					<LogoInstagram
						color={"#f0f0f0"}
						className="text-custom-grey-light"
						height="25px"
						width="25px"
					/>
				</NavLink>
			</div>
			<div className="text-custom-grey-light">
				© {year} Fasaya. All rights reserved.
			</div>
			<div className="clr" />
		</footer>
	);
}

import React, { useState } from "react";
import { NavLink } from "react-router-dom";

import "../Assets/Styles/glitche-basic.css";
import "../Assets/Styles/glitche-layout.css";
import "../Assets/Styles/dark.css";

class Navbar extends React.Component {
	// const [isOpen, setOpen] = useState(false);

	componentDidMount() {
		// document
		// 	.querySelector(".preloader .pre-inner")
		// 	.fadeOut(800, function () {
		// 		/* Preload hide */
		// 		document.querySelector(".preloader").fadeOut();
		// 		document.querySelector("body").classList.add("loaded");
		// 	});
		// document.querySelector("body").classList.add("loaded");
	}

	render() {
		return (
			// <nav
			// 	className="navbar is-primary"
			// 	role="navigation"
			// 	aria-label="main navigation"
			// >
			// 	<div className="container">
			// 		<div className="navbar-brand">
			// 			<a
			// 				role="button"
			// 				className={`navbar-burger burger ${
			// 					isOpen && "is-active"
			// 				}`}
			// 				aria-label="menu"
			// 				aria-expanded="false"
			// 				onClick={() => setOpen(!isOpen)}
			// 			>
			// 				<span aria-hidden="true"></span>
			// 				<span aria-hidden="true"></span>
			// 				<span aria-hidden="true"></span>
			// 			</a>
			// 		</div>

			// 		<div className={`navbar-menu ${isOpen && "is-active"}`}>
			// 			<div className="navbar-start">
			// 				<NavLink
			// 					className="navbar-item"
			// 					activeClassName="is-active"
			// 					to="/"
			// 				>
			// 					Home
			// 				</NavLink>

			// 				<NavLink
			// 					className="navbar-item"
			// 					activeClassName="is-active"
			// 					to="/blog"
			// 				>
			// 					Blog
			// 				</NavLink>

			// 				<NavLink
			// 					className="navbar-item"
			// 					activeClassName="is-active"
			// 					to="/portfolio"
			// 				>
			// 					Portfolio
			// 				</NavLink>
			// 			</div>

			// 			<div className="navbar-end">
			// 				<div className="navbar-item">
			// 					<div className="buttons">
			// 						<a className="button is-white">Log in</a>
			// 					</div>
			// 				</div>
			// 			</div>
			// 		</div>
			// 	</div>
			// </nav>

			<>
				{/* <div className="preloader">
					<div className="centrize full-width">
						<div className="vertical-center">
							<div className="pre-inner">
								<div className="load typing-load">
									<p>loading...</p>
								</div>
								<span className="typed-load"></span>
							</div>
						</div>
					</div>
				</div> */}

				<header>
					<div className="head-top">
						<a href="#" className="menu-btn">
							<span></span>
						</a>
						<div className="top-menu">
							<ul>
								<li>
									<a href="resume-dark.html" className="lnk">
										Resume
									</a>
								</li>
								<li>
									<a
										href="portfolio-dark.html"
										className="lnk"
									>
										Portfolio
									</a>
								</li>
								<li>
									<a href="blog-dark.html" className="lnk">
										Blog
									</a>
								</li>
								<li>
									<a
										href="contacts-dark.html"
										className="btn"
									>
										Contacts
									</a>
								</li>
							</ul>
						</div>
					</div>
				</header>
			</>
		);
	}
}

export default Navbar;

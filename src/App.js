import logo from "./logo.svg";
import "./App.css";

import "./css/glitche-basic.css";
import "./css/glitche-layout.css";
import "./css/ionicons.css";
import "./css/magnific-popup.css";
import "./css/animate.css";
import "./css/rtl.css";
import "./css/template-dark/dark.css";

import "./js/test.js";

import { Helmet } from "react-helmet";

// Create the function
// export function AddLibrary(urlOfTheLibrary) {
// 	const script = document.createElement("script");
// 	script.src = urlOfTheLibrary;
// 	script.async = true;
// 	document.body.appendChild(script);
// }

function App() {
	return (
		<>
			{/* <Helmet>
				<script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>
				<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
			</Helmet> */}

			{/* Preloader */}
			{/* <div className="preloader">
				<div className="centrize full-width">
					<div className="vertical-center">
						<div className="pre-inner">
							<div className="load typing-load">
								<p>loading...</p>
							</div>
							<span className="typed-load" />
						</div>
					</div>
				</div>
			</div> */}

			{/* Container */}
			<div className="container">
				{/* Header */}
				<header>
					<div className="head-top">
						<a href="#" className="menu-btn">
							<span />
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
				{/* Wrapper */}
				<div className="wrapper">
					{/* Started */}
					<div className="section started">
						<div className="centrize full-width">
							<div className="vertical-center">
								<div className="started-content">
									<div
										className="h-title glitch-effect"
										data-text="I'm John Doe"
									>
										I'm <span>John Doe</span>
									</div>
									<div className="h-subtitle typing-subtitle">
										<p>
											UX/UI Designer and Front-end
											Director.
										</p>
										<p>Based in Kiev.</p>
									</div>
									<span className="typed-subtitle" />
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* Footer */}
				<footer>
					<div className="soc">
						<a target="_blank" href="https://dribbble.com/">
							<span className="ion ion-social-dribbble" />
						</a>
						<a target="_blank" href="https://twitter.com/">
							<span className="ion ion-social-twitter" />
						</a>
						<a target="_blank" href="https://github.com/">
							<span className="ion ion-social-github" />
						</a>
						<a target="_blank" href="https://www.instagram.com/">
							<span className="ion ion-social-instagram-outline" />
						</a>
					</div>
					<div className="copy">
						© 2016 Glitche. All rights reserved.
					</div>
					<div className="clr" />
				</footer>
				{/* Lines */}
				<div className="line top" />
				<div className="line bottom" />
				<div className="line left" />
				<div className="line right" />
			</div>

			{/* Call the function to add a library */}
			{/* {AddLibrary("js/jquery.min.js")}
			{AddLibrary("js/jquery.validate.js")}
			{AddLibrary("js/glitche-scripts.js")} */}

			{/* jQuery Scripts */}
			{/* Main Scripts */}
			{/* <script src="js/test.js"></script>
			<script src="js/jquery.min.js"></script>
			<script src="js/jquery.validate.js"></script>
			<script src="js/typed.js"></script>
			<script src="js/magnific-popup.js"></script>
			<script src="js/imagesloaded.pkgd.js"></script>
			<script src="js/isotope.pkgd.js"></script>
			<script src="js/glitche-scripts.js"></script> */}
		</>
	);
}

export default App;

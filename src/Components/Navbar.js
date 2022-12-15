import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation, matchPath } from "react-router";

export default function Navbar() {
	// componentDidMount() {
	// 	// document
	// 	// 	.querySelector(".preloader .pre-inner")
	// 	// 	.fadeOut(800, function () {
	// 	// 		/* Preload hide */
	// 	// 		document.querySelector(".preloader").fadeOut();
	// 	// 		document.querySelector("body").classList.add("loaded");
	// 	// 	});
	// 	// document.querySelector("body").classList.add("loaded");
	// }
	const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

	const navigation = [
		{ name: "Home", href: "/", current: true },
		{ name: "Portfolio", href: "/portfolio", current: false },
		{ name: "Blog", href: "/blog", current: false },
	];

	const location = useLocation();

	function classNames(...classes) {
		return classes.filter(Boolean).join(" ");
	}

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
			<nav className="sticky top-0 z-50 bg-gray-800">
				<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
					<div className="relative flex h-16 items-center justify-between">
						<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
							{/* Mobile menu button*/}
							<button
								type="button"
								className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
								aria-controls="mobile-menu"
								aria-expanded="false"
								onClick={() =>
									setMobileMenuOpen(!isMobileMenuOpen)
								}
							>
								<span className="sr-only">Open main menu</span>
								{/* Icon when menu is closed. 
									Heroicon name: outline/bars-3 
									Menu open: "hidden", Menu closed: "block" */}
								<svg
									className={classNames(
										!isMobileMenuOpen ? "block" : "hidden",
										"h-6 w-6"
									)}
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
									/>
								</svg>
								{/* Icon when menu is open. 
									Heroicon name: outline/x-mark 
									Menu open: "block", Menu closed: "hidden" */}
								<svg
									className={classNames(
										isMobileMenuOpen ? "block" : "hidden",
										"h-6 w-6"
									)}
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth="1.5"
									stroke="currentColor"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</div>
						<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
							<div className="flex flex-shrink-0 items-center">
								<img
									className="block h-8 w-auto lg:hidden"
									src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
									alt="Your Company"
								/>
								<img
									className="hidden h-8 w-auto lg:block"
									src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
									alt="Your Company"
								/>
							</div>
							<div className="hidden sm:ml-6 sm:block">
								<div className="flex space-x-4">
									{/* Current: "bg-gray-900 text-white",
									 Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
									{navigation.map((item) => (
										<NavLink
											key={item.name}
											className={classNames(
												matchPath(
													{ path: item.href },
													location.pathname
												)
													? // true
													  "bg-gray-900 text-white"
													: "text-gray-300 hover:bg-gray-700 hover:text-white",
												"px-3 py-2 rounded-md text-sm font-medium"
											)}
											to={item.href}
										>
											{item.name}
										</NavLink>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>

				{/* Mobile menu, show/hide based on menu state. */}
				<div
					className={isMobileMenuOpen ? "block" : "hidden"}
					id="mobile-menu"
				>
					<div className="space-y-1 px-2 pt-2 pb-3">
						{/* Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" */}
						{navigation.map((item) => (
							<NavLink
								key={item.name}
								className={classNames(
									matchPath(
										{ path: item.href },
										location.pathname
									)
										? // true
										  "bg-gray-900 text-white"
										: "text-gray-300 hover:bg-gray-700 hover:text-white",
									"block px-3 py-2 rounded-md text-base font-medium"
								)}
								to={item.href}
								onClick={() => setMobileMenuOpen(false)}
							>
								{item.name}
							</NavLink>
						))}
					</div>
				</div>
			</nav>
		</>
	);
}

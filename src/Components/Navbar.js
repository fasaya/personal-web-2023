import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useLocation, matchPath } from "react-router";

export default function Navbar() {
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
		<>
			<nav className="fixed z-50 bg-custom-grey">
				<div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
					<div className="relative flex h-16 items-center justify-between">
						<div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
							{/* Mobile menu button*/}
							<button
								type="button"
								className="inline-flex items-center justify-center rounded-md p-2 ml-3 text-gray-400 hover:text-custom-orange-1 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
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
						<div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-center">
							<div className="flex flex-shrink-0 items-center">
								{/* <img
									className="block h-8 w-auto lg:hidden"
									src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
									alt="Your Company"
								/>
								<img
									className="hidden h-8 w-auto lg:block"
									src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
									alt="Your Company"
								/> */}
							</div>
							<div className="hidden sm:ml-6 sm:block">
								<div className="flex space-x-4">
									{/* Current: "text-custom-orange-1",
									 Default: "text-gray-300 hover:text-custom-orange-1" */}
									{navigation.map((item) => (
										<NavLink
											key={item.name}
											className={classNames(
												matchPath(
													{ path: item.href },
													location.pathname
												)
													? // true
													  "text-custom-orange-1"
													: "text-gray-300 hover:text-custom-orange-1",
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
						{/* Current: "text-custom-orange-1", Default: "text-gray-300 hover:text-custom-orange-1" */}
						{navigation.map((item) => (
							<NavLink
								key={item.name}
								className={classNames(
									matchPath(
										{ path: item.href },
										location.pathname
									)
										? // true
										  "text-custom-orange-1"
										: "text-gray-300 hover:text-custom-orange-1",
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

import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => (
	<section className="bg-white dark:bg-custom-grey h-full">
		<div className="grid h-screen place-items-center text-custom-grey-light">
			<div className="text-center">
				<h1
					className="text-white"
					style={{
						fontSize: "20px",
						fontWeight: "700",
						textTransform: "uppercase",
						letterSpacing: "0.04em",
					}}
				>
					404 Not Found
				</h1>

				<Link to="/">&lt; Back to home</Link>
			</div>
		</div>
	</section>
);

export default NotFound;

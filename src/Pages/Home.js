import React from "react";
import Typed from "react-typed";

const textLines = [
	`&lt;h1&gt;Web Developer&lt;/h1&gt;`,
	`&lt;?php echo "Freelance Developer"; ?&gt;`,
	`&lt;script&gt;<br>console.log('Software Developer')<br>&lt;/script&gt;`,
	`&lt;span&gt;Programmer&lt;/span&gt;`,
];

const Home = () => (
	<section className="bg-white dark:bg-custom-grey h-full">
		<div className="grid h-screen place-items-center text-custom-grey-light">
			<div className="sm:w-3/5 w-5/6 text-center">
				<h1
					className="glitch"
					style={{
						"font-size": "68px",
						"font-family": "Roboto Mono",
						color: "#fff",
						"font-weight": "700",
						"text-transform": "uppercase",
						"letter-spacing": "0.04em",
					}}
				>
					Fasaya
				</h1>

				<h6 className="text-center">
					<Typed strings={textLines} typeSpeed={35} loop={true} />
				</h6>
			</div>
		</div>
	</section>
);

export default Home;

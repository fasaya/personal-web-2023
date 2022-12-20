import React from "react";
import Typed from "react-typed";
import About from "./About";
import EducationExperience from "./EducationExperience";
// require("dotenv").config();

const textLines = [
	`&lt;h1&gt;Web Developer&lt;/h1&gt;`,
	`&lt;script&gt;<br>console.log('Software Engineer')<br>&lt;/script&gt;`,
	`&lt;?= "Freelance Developer"; ?&gt;`,
	`&lt;div&gt;Programmer&lt;/div&gt;`,
];

const Home = () => (
	<>
		<section className="bg-custom-grey h-full">
			<div className="grid h-screen place-items-center text-custom-grey-light">
				<div className="sm:w-3/5 w-5/6 text-center">
					<h1
						className="glitch"
						style={{
							fontSize: "68px",
							color: "#fff",
							fontWeight: "800",
							// textTransform: "uppercase",
							letterSpacing: "0.04em",
						}}
					>
						fasaya
					</h1>

					<h6
						className="text-center"
						style={{
							fontFamily: "courier",
							fontSize: "16px",
						}}
					>
						<Typed strings={textLines} typeSpeed={35} loop={true} />
					</h6>
				</div>
			</div>
		</section>

		<About />
		<EducationExperience />
	</>
);

export default Home;

import React from "react";
import Typed from "react-typed";
import About from "./About";
import EducationExperience from "./EducationExperience";

const textLines = [
	`&lt;h1&gt;Web Developer&lt;/h1&gt;`,
	`&lt;?php echo "Freelance Developer"; ?&gt;`,
	`&lt;script&gt;<br>console.log('Software Developer')<br>&lt;/script&gt;`,
	`&lt;span&gt;Programmer&lt;/span&gt;`,
];

const Home = () => (
	<>
		<section className="bg-white dark:bg-custom-grey h-full">
			<div className="grid h-screen place-items-center text-custom-grey-light">
				<div className="sm:w-3/5 w-5/6 text-center">
					<h1
						className="glitch"
						style={{
							fontSize: "68px",
							fontFamily: "Roboto Mono",
							color: "#fff",
							fontWeight: "700",
							textTransform: "uppercase",
							letterSpacing: "0.04em",
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

		<About />
		<EducationExperience />
	</>
);

export default Home;

function calculate_age(dob) {
	var diff_ms = Date.now() - dob.getTime();
	var age_dt = new Date(diff_ms);

	return Math.abs(age_dt.getUTCFullYear() - 1970);
}

const About = () => (
	<section className="bg-white dark:bg-custom-grey h-fi">
		<div className="grid h-screen place-items-center text-custom-grey-light">
			<div className="w-4/5 md:w-3/5">
				<div className="grid grid-cols-3 gap-4">
					<div className="col-span-3">
						<div className="content text-center sm:text-left">
							<div className="title">
								<div className="title_inner">About Me</div>
							</div>
						</div>
					</div>
					<div className="sm:col-span-1 col-span-3">
						<div className="rounded-full bg-gray-100 w-28 h-28 md:w-35 md:h-35 p-2 z-10 -top-8 shadow-lg hover:shadow-xl transition  justify-center justify-self-center mx-auto mb-2 sm:mb-0">
							<div className="rounded-full bg-black w-full h-full overflow-auto">
								<img
									src="https://avatars.githubusercontent.com/u/53859179?v=4"
									alt="fasaya"
								/>
							</div>
						</div>
					</div>
					<div className="sm:col-span-2 col-span-3 text-justify">
						<p>
							Howdy! I'm{" "}
							<span className="font-bold text-white">
								Andi Fasaya Yaqhsya
							</span>{" "}
							or for short,{" "}
							<span className="font-bold text-white">Aya'</span>.
						</p>
						<p>
							A {calculate_age(new Date(1997, 12, 12))}yo
							Full-Stack Web Developer from Makassar, Indonesia.
							Informatics Engineer alumnus at STMIK Dipanegara
							Makassar.
							<br />
							<br />
							Currently working on some Laravel project and
							learning ReactJS, ExpressJS and TailwindCSS. I'm
							also interested to collaborate/contribute to Open
							Source and/or Web Apps project.
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default About;

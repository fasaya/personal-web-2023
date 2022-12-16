const About = () => (
	<section className="bg-white dark:bg-custom-grey h-full">
		<div className="grid h-screen place-items-center text-custom-grey-light">
			<div className="sm:w-3/5 w-5/6">
				<div class="grid grid-cols-3 gap-4">
					<div class="sm:col-span-1 col-span-3">
						<div className="rounded-full bg-gray-100 w-28 h-28 p-2 z-10 -top-8 shadow-lg hover:shadow-xl transition  content-center text-center">
							<div className="rounded-full bg-black w-full h-full overflow-auto">
								<img
									src="https://avatars.githubusercontent.com/u/53859179?v=4"
									alt="fasaya"
								/>
							</div>
						</div>
					</div>
					<div class="sm:col-span-2 col-span-3 text-justify">
						Full-Stack Web Developer from Makassar, Indonesia.
						Informatics Engineer alumnus at STMIK Dipanegara
						Makassar.
						<br />
						<br />
						Currently working on some Laravel project and learning
						ReactJS, ExpressJS and TailwindCSS. I'm also interested
						to collaborate/contribute to Open Source and/or Web Apps
						project.
					</div>
				</div>
			</div>
		</div>
	</section>
);

export default About;

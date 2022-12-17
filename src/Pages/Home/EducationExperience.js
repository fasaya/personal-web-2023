const Experience = () => (
	<div className="sm:col-span-1 col-span-2">
		<div className="content mb-10">
			<div className="title !mb-8 text-center sm:text-left">
				<div className="title_inner">Experience</div>
			</div>

			<div className="resume-items">
				<div className="resume-item active">
					<div className="date">October 2021 - present</div>
					<div className="name">
						Fullstack Web Developer - PT SIPS Edutech Indonesia
					</div>
					<p>
						Part of IT team that responsible for creating,
						improving, and developing web apps and REST APIs.
						Implement enhancements that can significantly improved
						web functionality and speed. Maintain the database of
						over 15000 users.
					</p>
				</div>
				<div className="resume-item">
					<div className="date">2019 - October 2021</div>
					<div className="name">
						Fullstack Web Developer - Idea Digital Indonesia
					</div>
					<p>
						Responsible for creating, improving, and developing IT
						project strategies. Fix bugs from existing websites and
						implement enhancements that can significantly improved
						web functionality and speed. Maintain the database of
						over 1000 users.
					</p>
				</div>
				<div className="resume-item">
					<div className="date">2017 - 2019</div>
					<div className="name">
						Videographer & Editor - Freelance
					</div>
					<p>
						Responsible for concept making, shoot and edit videos
						for promotion and event demands.
					</p>
				</div>
			</div>
		</div>
	</div>
);

const Education = () => (
	<div className="sm:col-span-1 col-span-2">
		<div className="content">
			<div className="title !mb-8 text-center sm:text-left">
				<div className="title_inner">Education</div>
			</div>

			<div className="resume-items">
				<div className="resume-item active">
					<div className="date">2015 - 2019</div>
					<div className="name">
						Informatics Engineering - STMIK Dipanegara Makassar
					</div>
					<p>Honors: cum laude (GPA: 3.73/4.0)</p>
				</div>
				<div className="resume-item">
					<div className="date">2012 - 2015</div>
					<div className="name">SMA Negeri 1 Makassar</div>
				</div>
			</div>
		</div>
	</div>
);

const EducationExperience = () => (
	<section className="bg-white dark:bg-custom-grey mb-24 md:mb-20">
		<div className="grid h-fit place-items-center text-custom-grey-light">
			<div className="w-4/5 md:w-5/6">
				<div className="grid grid-cols-2 gap-4">
					<Experience />
					<Education />
				</div>
			</div>
		</div>
	</section>
);

export default EducationExperience;

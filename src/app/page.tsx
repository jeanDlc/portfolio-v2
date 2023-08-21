import { ProjectList } from "@/app/components/Project/list";
import styles from "./page.module.scss";
import { JobList } from "@/app/components/Job/list";
import { Logo } from "./components/Logo";
import { Nav } from "./components/Nav";
import Link from "next/link";
import { performRequest } from "@/lib/cms";

import type { Job, Project } from "@/types/interfaces";

const PROJECTS_QUERY = `
	query {
		allProjects (first : 5 ) {
			id
			name
			image{
				url
				blurUpThumb
				alt
			}
			demourl
			repourl
			stack
			company
			description
			slug
		}
	}

`;

const getProjects = async () => {
	const { allProjects } = await performRequest<{
		allProjects: Project[];
	}>({
		query: PROJECTS_QUERY,
		variables: {},
	});
	return allProjects;
};

const JOBS_QUERY = `
	query {
		allJobs (first : 5 ) {
			id
			role
			company
			description
			url
			from
			to
			stack
		}
	}

`;

const getJobs = async () => {
	const { allJobs } = await performRequest<{
		allJobs: Job[];
	}>({
		query: JOBS_QUERY,
		variables: {},
	});
	return allJobs;
};

export default async function Home() {
	const projects = await getProjects();
	const jobs = await getJobs();

	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<div>
					<header className={styles.header}>
						<Logo />
						<h2 className={styles.position}>Full Stack Dev</h2>
						<p className={styles.description}>
							Hi, my name is <span>Jean Pierre de la Cruz</span> . I build accessible,
							inclusive products and digital experiences for the web
						</p>
						<div className={styles.desktopNavigation}>
							<Nav />
						</div>
					</header>
				</div>
				<section>
					<div id="about" className={styles.paragraphs}>
						<h3 className={styles.mobileNavigation}>About </h3>

						<p>
							Back in 2012, I decided to try my hand at creating custom Tumblr themes and
							tumbled head first into the rabbit hole of coding and web development.
							Fast-forward to today, and I’ve had the privilege of building software for an
							advertising agency, a start-up, a student-led design studio, and a huge
							corporation.
						</p>
						<p>
							My main focus these days is building products and leading projects for our
							clients at Upstatement. In my free time I have also released an online video
							course that covers everything you need to know to build a web app with the
							Spotify API.
						</p>
						<p>
							When I’m not at the computer, I’m usually rock climbing, hanging out with my
							wife and two cats, or running around Hyrule searching for Korok seeds K o r o
							k s e e d s .
						</p>
					</div>

					<section id="experience">
						<h3 className={styles.mobileNavigation}>Experience </h3>
						<JobList jobs={jobs} />
						<a href="">View Full Resume</a>
					</section>

					<div className={styles.separator} />

					<section id="projects">
						<h3 className={styles.mobileNavigation}>Projects </h3>
						<ProjectList projects={projects} />
						<Link href={"/all-projects"}>All projects</Link>
					</section>
				</section>
			</div>
		</main>
	);
}

import { ProjectList } from "@/app/components/Project/list";
import styles from "./page.module.scss";
import { JobList } from "@/app/components/Job/list";
import { Logo } from "./components/Logo";
import { Nav } from "./components/Nav";

export default function Home() {
	return (
		<main className={styles.main}>
			<div className={styles.container}>
				<div>
					<header className={styles.header}>
						<Logo />
						<h2 className={styles.position}>Full Stack Dev</h2>
						<p className={styles.description}>
							I build accessible, inclusive products and digital experiences for the web
						</p>
						<div className={styles.navContainer}>
							<Nav />
						</div>
					</header>
				</div>
				<section>
					<div id="about" className={styles.paragraphs}>
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
						<JobList />
						<a href="">View Full Resume</a>
					</section>
					<div className={styles.separator} />
					<section id="projects">
						<ProjectList />
					</section>
				</section>
			</div>
		</main>
	);
}

import { ProjectCard } from "@/app/components/Project/card";
import styles from "./styles.module.scss";

import type { Project } from "@/types/interfaces";

const getProjects = async () => {
	const projects: Project[] = [
		{
			description:
				"Netflix clone is a web app replicating Netflix, with a vast library of movies, shows, and original content. Personalized profiles, curated recommendations, and HD playback offer seamless entertainment. Device compatibility ensures easy binge-watching anytime, anywhere.",
			name: "Build a Netflix clone",
			stack: ["React", "SCSS", "Next.js", "Node.js"],
			demoUrl: "",
			id: "1",
			image: "https://www.datocms-assets.com/43219/1618240535-urmoviesfoto.png",
			repoUrl: "",
			slug: "",
		},
		{
			description:
				"Code Play is an online HTML, CSS and JavaScript editor. You can code in real time and share the link with anybody",
			name: "Code Play",
			stack: ["JavaScript", "HMTL", "CSS"],
			demoUrl: "https://code-play.vercel.app/%7C%7C",
			id: "2",
			image: "https://www.datocms-assets.com/43219/1633033971-codeplay.png",
			repoUrl: "",
			slug: "",
		},
		{
			description:
				"Netflix clone is a web app replicating Netflix, with a vast library of movies, shows, and original content. Personalized profiles, curated recommendations, and HD playback offer seamless entertainment. Device compatibility ensures easy binge-watching anytime, anywhere.",
			name: "Build a Netflix clone",
			stack: ["React", "SCSS", "Next.js", "Node.js"],
			demoUrl: "",
			id: "3",
			image: "https://www.datocms-assets.com/43219/1618240535-urmoviesfoto.png",
			repoUrl: "",
			slug: "",
		},
		{
			description:
				"Code Play is an online HTML, CSS and JavaScript editor. You can code in real time and share the link with anybody",
			name: "Code Play",
			stack: ["JavaScript", "HMTL", "CSS"],
			demoUrl: "https://code-play.vercel.app/%7C%7C",
			id: "4",
			image: "https://www.datocms-assets.com/43219/1633033971-codeplay.png",
			repoUrl: "",
			slug: "",
		},
	];

	return Promise.resolve({ projects });
};

export const ProjectList = async () => {
	const { projects } = await getProjects();

	return (
		<ul className={styles.container}>
			{projects.map((project) => (
				<li key={project.id}>
					<ProjectCard key={project.id} project={project} />
				</li>
			))}
		</ul>
	);
};

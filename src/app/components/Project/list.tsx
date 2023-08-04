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
			id: "2",
			image: "",
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

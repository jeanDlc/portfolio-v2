import { ProjectCard } from "@/app/components/Project/card";
import styles from "./styles.module.scss";

import type { Project } from "@/types/interfaces";

export const ProjectList = async ({ projects }: { projects: Project[] }) => {
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

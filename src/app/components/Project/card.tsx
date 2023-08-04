import { Project } from "@/types/interfaces";
import styles from "./styles.module.scss";
import { Card } from "@/app/components/Card";
import { Pill } from "@/app/components/Pill";
import Image from "next/image";

export const ProjectCard = ({ project }: { project: Project }) => {
	const { demoUrl, description, image, name, repoUrl, stack } = project;

	return (
		<Card
			title={name}
			content={description}
			url={demoUrl}
			secondaryContent={
				<div>
					<a className={styles.repoUrl} href={repoUrl} target="_blank">
						Github {"->"}
					</a>
					<div className={styles.stackList}>
						{stack.map((tech) => (
							<Pill key={tech} text={tech} />
						))}
					</div>
				</div>
			}
			asideChildren={{
				footer: (
					<div className={styles.imageContainer}>
						<Image src={image} alt="Alt image" className={styles.image} fill />
					</div>
				),
			}}
		/>
	);
};

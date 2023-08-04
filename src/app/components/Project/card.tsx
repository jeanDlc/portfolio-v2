import { Project } from "@/types/interfaces";
import styles from "./styles.module.scss";
import { Card } from "../Card";
import { Pill } from "../Pill";
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
					<div className={styles.stackList}>
						{stack.map((tech) => (
							<Pill key={tech} text={tech} />
						))}
					</div>
					<a href={repoUrl} target="_blank">
						Repo
					</a>
				</div>
			}
			asideChildren={{ footer: <Image src={image} alt="Alt image" /> }}
		/>
	);
};

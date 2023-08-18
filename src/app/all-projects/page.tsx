import Link from "next/link";
import { Pill } from "../components/Pill";

import styles from "./styles.module.scss";

import type { Project } from "@/types/interfaces";

const getAllProjects = () => {
	const projects: Project[] = [
		{
			description:
				"Netflix clone is a web app replicating Netflix, with a vast library of movies, shows, and original content. Personalized profiles, curated recommendations, and HD playback offer seamless entertainment. Device compatibility ensures easy binge-watching anytime, anywhere.",
			name: "Build a Netflix clone",
			stack: ["React", "SCSS", "Next.js", "Node.js"],
			demoUrl: "",
			id: "1",
			image: "https://www.datocms-assets.com/43219/1618240535-urmoviesfoto.png",
			repoUrl: "as",
			slug: "",
			company: "Globant",
		},
		{
			description:
				"Code Play is an online HTML, CSS and JavaScript editor. You can code in real time and share the link with anybody",
			name: "Code Play",
			stack: ["JavaScript", "HMTL", "CSS"],
			demoUrl: "https://code-play.vercel.app/%7C%7C",
			id: "2",
			image: "https://www.datocms-assets.com/43219/1633033971-codeplay.png",
			repoUrl: "as",
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
	return Promise.resolve(projects);
};

export default async function AllProjectsPage() {
	const projects = await getAllProjects();

	return (
		<div>
			<main className={styles.main}>
				<Link href={"/"}> {"<- jeanDLC"} </Link>
				<h1 className={styles.title}>All projects</h1>

				<div className={styles.tableContainer}>
					<table className={styles.table}>
						<thead>
							<tr>
								<th> # </th>
								<th> project </th>
								<th className={styles.lg}> made at </th>
								<th className={styles.lg}> stack </th>
								<th className={styles.md}> link </th>
							</tr>
						</thead>
						<tbody>
							{projects.map((project, idx) => (
								<tr key={project.id}>
									<td> {idx + 1} </td>
									<td>
										<a
											href={project.demoUrl}
											target="_blank"
											referrerPolicy="no-referrer"
											className={styles.projectName}
										>
											{project.name}
											<span>{" ->"} </span>
										</a>
									</td>
									<td className={styles.lg}> {project.company ?? "-"} </td>
									<td className={styles.lg}>
										<div style={{ display: "flex", gap: 10 }}>
											{project.stack.map((tech) => (
												<Pill key={tech} text={tech} />
											))}
										</div>
									</td>
									<td className={styles.md}>
										{project.demoUrl || project.repoUrl ? (
											<div className={styles.links}>
												{project.demoUrl && (
													<a target="_blank" href={project.demoUrl}>
														{"Web ->"}
													</a>
												)}
												{project.repoUrl && (
													<a target="_blank" href={project.repoUrl}>
														{"Github ->"}
													</a>
												)}
											</div>
										) : (
											"-"
										)}
									</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</main>
		</div>
	);
}

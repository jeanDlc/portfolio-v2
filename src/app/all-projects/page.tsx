import Link from "next/link";
import { Pill } from "../components/Pill";
import { performRequest } from "@/lib/cms";

import styles from "./styles.module.scss";

import type { Project } from "@/types/interfaces";

const ALL_PROJECTS_QUERY = `
	query {
		allProjects {
			id
			name
			image{
				url
			}
			demourl
			repourl
			stack
			company
		}
	}

`;

const getAllProjects = async () => {
	const { allProjects } = await performRequest<{
		allProjects: Pick<
			Project,
			"id" | "name" | "image" | "demourl" | "repourl" | "stack" | "company"
		>[];
	}>({
		query: ALL_PROJECTS_QUERY,
		variables: {},
	});
	return allProjects;
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
											href={project.demourl}
											target="_blank"
											referrerPolicy="no-referrer"
											className={styles.projectName}
										>
											{project.name}
											<span>{" ->"} </span>
										</a>
									</td>
									<td className={styles.lg}> {project.company || "-"} </td>
									<td className={styles.lg}>
										<div style={{ display: "flex", gap: 10 }}>
											{project.stack.map((tech) => (
												<Pill key={tech} text={tech} />
											))}
										</div>
									</td>
									<td className={styles.md}>
										{project.demourl || project.repourl ? (
											<div className={styles.links}>
												{project.demourl && (
													<a target="_blank" href={project.demourl}>
														{"Web ->"}
													</a>
												)}
												{project.repourl && (
													<a target="_blank" href={project.repourl}>
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

import Image from "next/image";
import { performRequest } from "@/lib/cms";
import { Project } from "@/types/interfaces";
import styles from "./styles.module.scss";
import Link from "next/link";

const getProject = async ({ id }: { id: string }) => {
	const GET_PROJECT_QUERY = `
        query {
            project (filter: {id: {eq: "${id}"}}) {
                id
                name
                demourl
                repourl
                image{
                    url
                    blurUpThumb
                    alt
                }
                stack
                company
                description
            }
        }
    `;

	const { project } = await performRequest<{ project: Project }>({
		query: GET_PROJECT_QUERY,
		variables: {},
	});

	return project;
};

export default async function Page({ params }: { params: { id: string } }) {
	const { id } = params;

	const project = await getProject({ id });

	const { name, demourl, description, image, repourl, stack } = project;

	console.log(JSON.stringify(project, null, 2));

	return (
		<div style={{ marginTop: 20 }}>
			<Link href={"/"}> {"<-"} </Link>
			<header className={styles.header}>
				<div>
					<h1> {name} </h1>
					{repourl && (
						<section>
							<p>Github</p>
							<a href={repourl} target="_blank">
								{" "}
								{repourl}{" "}
							</a>
						</section>
					)}
				</div>
				<div>
					<a href={demourl} target="_blank" className={styles.visit}>
						Visit
					</a>
				</div>
			</header>
			<main>
				<h2>Description</h2>
				<p> {description} </p>
				<div className={styles.card}>
					<div className={styles.imageContainer}>
						<Image
							src={image.url}
							placeholder="blur"
							blurDataURL={image.blurUpThumb}
							alt={image.alt}
							className={styles.image}
							fill
						/>
					</div>
					<div>
						<h3>Stack</h3>
						<ul>
							{stack.map((tech) => (
								<li key={tech}> {tech} </li>
							))}
						</ul>
					</div>
				</div>
			</main>
		</div>
	);
}

export async function generateStaticParams() {
	const GET_PROJECTS_ID_QUERY = `
        query {
            allProjects {
                id
            }
        }

    `;

	const { allProjects: projectIds } = await performRequest<{ allProjects: Pick<Project, "id">[] }>({
		query: GET_PROJECTS_ID_QUERY,
		variables: {},
	});

	return projectIds.map(({ id }) => id);
}

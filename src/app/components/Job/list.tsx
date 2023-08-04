import { JobCard } from "@/app/components/Job/card";
import styles from "@/app/components/Job/styles.module.scss";

import type { Job } from "@/types/interfaces";

const getJobs = async () => {
	const jobs: Job[] = [
		{
			date: {
				from: "2020",
				to: "2021",
			},

			description:
				"Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
			company: "Upstatement",
			position: "Lead Engineer",
			stack: ["React", "SCSS", "Next.js", "Node.js"],
			url: "",
			id: "2",
		},
		{
			date: {
				from: "2020",
			},

			description:
				"Deliver high-quality, robust production code for a diverse array of projects for clients including Harvard Business School, Everytown for Gun Safety, Pratt Institute, Koala Health, Vanderbilt University, The 19th News, and more. Provide leadership within engineering department through close collaboration, knowledge shares, and mentorship.",
			company: "Globant",
			position: "Web UI developer",
			stack: ["React", "SCSS", "Next.js", "Node.js"],
			url: "",
			id: "2",
		},
	];

	return Promise.resolve({ jobs });
};

export const JobList = async () => {
	const { jobs } = await getJobs();

	return (
		<ul className={styles.container}>
			{jobs.map((job) => (
				<JobCard key={job.id} job={job} />
			))}
		</ul>
	);
};

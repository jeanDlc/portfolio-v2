import { JobCard } from "@/app/components/Job/card";
import styles from "@/app/components/Job/styles.module.scss";

import type { Job } from "@/types/interfaces";

export const JobList = async ({ jobs }: { jobs: Job[] }) => {
	return (
		<ul className={styles.container}>
			{jobs.map((job) => (
				<JobCard key={job.id} job={job} />
			))}
		</ul>
	);
};

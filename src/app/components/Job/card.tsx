import { Job } from "@/types/interfaces";
import { Pill } from "@/app/components/Pill";
import { Card } from "@/app/components/Card";
import { parseDate } from "@/utils";

import styles from "@/app/components/Job/styles.module.scss";

export const JobCard = ({ job }: { job: Job }) => {
	const { from, to, description, role, stack, company, url, id } = job;
	return (
		<li className={styles.card}>
			<Card
				key={id}
				content={description}
				title={`${role} · ${company}`}
				url={url}
				secondaryContent={
					<div className={styles.stackList}>
						{stack.map((tech) => (
							<Pill key={tech} text={tech} />
						))}
					</div>
				}
				asideChildren={{ header: <p className={styles.date}>{parseDate(from, to)}</p> }}
			/>
		</li>
	);
};

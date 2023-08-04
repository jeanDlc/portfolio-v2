import { Job } from "@/types/interfaces";
import { Pill } from "../Pill";
import { Card } from "../Card";
import { parseDate } from "@/utils";

import styles from "./jobCard.module.scss";

export const JobCard = ({ job }: { job: Job }) => {
	const { date, description, position, stack, company, url, id } = job;
	return (
		<li className={styles.card}>
			<Card
				key={id}
				content={description}
				title={`${position} . ${company}`}
				url={url}
				secondaryContent={
					<div className={styles.stackList}>
						{stack.map((tech) => (
							<Pill key={tech} text={tech} />
						))}
					</div>
				}
				asideChildren={{ header: <p className={styles.date}>{parseDate(date)}</p> }}
			/>
		</li>
	);
};

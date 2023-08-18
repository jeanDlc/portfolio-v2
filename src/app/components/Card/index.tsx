import { JSX } from "react";
import styles from "./card.module.scss";

interface CardProps {
	title: string;
	url: string;
	content: string;
	secondaryContent: JSX.Element;
	stack?: string[];
	asideChildren: { header: JSX.Element } | { footer: JSX.Element };
}

export const Card = ({ content, title, url, secondaryContent, asideChildren }: CardProps) => {
	const hasHeader = "header" in asideChildren;
	return (
		<section className={styles.card}>
			<div className={styles.container}>
				<div className={styles.body}>
					<aside className={!hasHeader ? styles.footer : undefined}>
						{hasHeader ? (
							<header> {asideChildren.header} </header>
						) : (
							<footer> {asideChildren.footer} </footer>
						)}
					</aside>
					<main>
						<h3>
							<a href={url} target="_blank" rel="noopener">
								{title}
							</a>
						</h3>
						<p className={styles.description}> {content} </p>
						{secondaryContent}
					</main>
				</div>
			</div>
		</section>
	);
};

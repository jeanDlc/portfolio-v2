"use client";
import styles from "./styles.module.scss";
import { useEffect, useState } from "react";

type Tab = "about" | "experience" | "projects";

export const Nav = () => {
	const [activeId, setActiveId] = useState<Tab | null>(null);

	useEffect(() => {
		const height = window.innerHeight;

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entrie) => {
					if (entrie.isIntersecting) {
						setActiveId(entrie.target.id as Tab);
					}
				});
			},
			{ rootMargin: `-0px 0px -${height - 50}px 0px` }
		);

		const projects = document.querySelector("#projects");
		const about = document.querySelector("#about");
		const experience = document.querySelector("#experience");

		projects && observer.observe(projects);
		about && observer.observe(about);
		experience && observer.observe(experience);

		return () => {
			projects && observer.unobserve(projects);
			about && observer.unobserve(about);
			experience && observer.unobserve(experience);
		};
	}, []);

	const isActive = (id: Tab) => activeId === id;

	return (
		<nav className={styles.nav}>
			<a className={isActive("about") ? styles.active : undefined} href="#about">
				<span />
				<p>About </p>
			</a>
			<a className={isActive("experience") ? styles.active : undefined} href="#experience">
				<span />
				<p>Experience </p>
			</a>
			<a className={isActive("projects") ? styles.active : undefined} href="#projects">
				<span />
				<p>Projects </p>
			</a>
		</nav>
	);
};

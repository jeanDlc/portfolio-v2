import styles from "./styles.module.scss";

export const Pill = ({ text }: { text: string }) => {
	return <span className={styles.pill}> {text} </span>;
};

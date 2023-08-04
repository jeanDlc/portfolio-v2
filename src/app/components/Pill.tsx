import styles from "./pill.module.scss";

export const Pill = ({ text }: { text: string }) => {
	return <span className={styles.pill}> {text} </span>;
};

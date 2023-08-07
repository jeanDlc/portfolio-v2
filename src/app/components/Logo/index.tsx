import Link from "next/link";
import styles from "./styles.module.scss";
export const Logo = () => {
	return (
		<div>
			<Link href="/">
				<h1 className={styles.logo}>
					Jean<span>DLC</span>
				</h1>
			</Link>
		</div>
	);
};

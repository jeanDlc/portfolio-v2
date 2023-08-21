import "./globals.scss";
import styles from "@/app/layout.module.scss";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "JeanDLC",
	description: "Jean Pierre de la Cruz Porftolio",
};

// eslint-disable-next-line no-undef
export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className={styles.layout}>{children}</div>
			</body>
		</html>
	);
}

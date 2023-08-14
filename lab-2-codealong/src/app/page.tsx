import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
	return (
		<main className={styles.main}>
			<h1>Hello Happy People</h1>
			<ul>
				<li>Its</li>
				<li>Alive</li>
			</ul>
		</main>
	);
}

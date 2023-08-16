import Link from "next/link";
import styles from "../page.module.css";
import { Paddle } from "@/paddle";
import { Metadata } from "next";

export const metadata: Metadata = {
	title: "Behold, my paddle!",
	description: "This is all the platypuses in my paddle",
};

export default function PaddlePage() {
	return (
		<main className={styles.main}>
			<h2>Paddle Page</h2>
			{Paddle.map((platypus) => {
				return (
					<div key={platypus.slug}>
						<h3>
							<Link href={`/paddle/${platypus.slug}`}>{platypus.name}</Link>
						</h3>
						<p>{platypus.description}</p>
						<p>Age: {platypus.age}</p>
					</div>
				);
			})}
		</main>
	);
}

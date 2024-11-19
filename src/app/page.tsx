import Image from "next/image";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.page}>
			<Header />
			<main className="w-full">
				<Content />
			</main>

			<footer className="flex bg-white rounded-lg shadow m-4 w-full">
				<div className="w-full max-w-screen-xl mx-auto p-4">
					<span className="block text-xs text-gray-500 sm:text-center">
						© 2024 期間工求人AI検索 . All Rights Reserved.
					</span>
				</div>
			</footer>
		</div>
	);
}

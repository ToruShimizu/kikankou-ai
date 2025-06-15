import Image from "next/image";
import { AdsLink } from "./components/AdsLink";
import { Content } from "./components/Content";
import { Header } from "./components/Header";
import styles from "./page.module.css";

export default function Home() {
	return (
		<div className={styles.page}>
			<Header />
			<main className="w-full">
				<Content />
				<div className="mx-auto md:w-80 mt-6">
					<AdsLink />
				</div>
			</main>

			<footer className="flex bg-white rounded-lg shadow m-4 w-full">
				<div className="w-full max-w-screen-xl mx-auto p-4">
					<span className="block text-xs text-gray-500 sm:text-center">
						© 2024 期間工AI診断ツール . All Rights Reserved.
					</span>
				</div>
			</footer>
		</div>
	);
}

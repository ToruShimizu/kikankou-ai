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
				<div className="mx-auto md:w-80 mt-6">
					<a href="https://px.a8.net/svt/ejp?a8mat=3ZK8UX+5I9DZU+2LNO+60H7L" rel="nofollow">
						<img
							style={{ border: 0 }}
							height="60"
							alt="工場求人ナビ"
							src="https://www25.a8.net/svt/bgt?aid=241129689333&wid=002&eno=01&mid=s00000012138001010000&mc=1"
						/>
					</a>
					<img
						style={{ border: 0 }}
						width="1"
						height="1"
						src="https://www17.a8.net/0.gif?a8mat=3ZK8UX+5I9DZU+2LNO+60H7L"
						alt="工場求人ナビ"
					/>
				</div>
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

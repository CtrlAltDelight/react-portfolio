"use client"; // Tells NextJS that this component can use the 'useState' hook
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
	const [darkMode, setDarkMode] = useState(true);

	return (
		<div className={darkMode ? "dark" : ""}>
			<Head>
				<title>Luke Chigges Portfolio</title>
				<meta name="description" content="Luke Chigges Portfolio" />
				<link rel="icon" href="/code.png" />
			</Head>
			<main className="transition duration-500 bg-white px-10 md:px-20 lg:px-40 dark:bg-slate-800">
				<section className="min-h-screen">
					<nav className="py-10 mb-12 flex justify-between">
						<h2 className="text-xl font-mono transition duration-500 dark:text-white">
							Luke Chigges
						</h2>
						<ul className="flex items-center">
							<li>
								<BsFillMoonStarsFill
									tabIndex={0}
									onClick={() => setDarkMode(!darkMode)}
									onKeyDown={(e) => {
										if (e.key === "Enter" || e.key === "Space")
											setDarkMode(!darkMode);
									}}
									className="transition ease-in-out hover:text-yellow-500 dark:hover:text-yellow-500 hover:scale-110 cursor-pointer text-2xl dark:text-white"
								/>
							</li>
							<li>
								<a
									className="transition hover:bg-blue-600 duration-500 bg-teal-400
									text-white dark:text-slate-800 px-4 py-2 rounded-md ml-8"
									href="/"
								>
									Back to homepage
								</a>
							</li>
						</ul>
					</nav>

					<div className="text-center p-10">
						<h1
							tabIndex={0}
							className="text-5xl pb-16 text-teal-400 font-medium md:text-6xl"
						>
							Files
						</h1>
						<div tabIndex={0}>
							<h2 className="text-xl py-2 text-teal-400 font-medium">
								Word Doc Replacer
							</h2>
							<a
								href="../../../public/word_doc_replacer.zip"
								download
								className="text-blue-400"
							>
								Download
							</a>
						</div>
					</div>
				</section>
				<section>
					<div className="text-center">
						<h3
							tabIndex={0}
							className="justify-between align-center text-3xl py-1 transition duration-500 dark:text-white"
						>
							Contact
						</h3>
						<p className="py-1 text-gray-800 transition duration-500 dark:text-white">
							Send me an email and I will get back to you as soon as possible.
						</p>
					</div>
					<div className="text-center pb-20 text-gray-800 transition duration-500 dark:text-white">
						<a
							className="transition text-cyan-500 hover:text-cyan-300"
							href="mailto:webdev@chigges.com?subject=Let's make a website!"
						>
							webdev@chigges.com
						</a>
					</div>
				</section>
			</main>
		</div>
	);
}

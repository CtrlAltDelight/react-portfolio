"use client"; // Tells NextJS that this component can use the 'useState' hook
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import headshot from "../../../public/headshot.jpg";
import design from "../../../public/design.png";
import consulting from "../../../public/consulting.png";
import code from "../../../public/code.png";
import web1 from "../../../public/web1.png";
import web2 from "../../../public/web2.png";
import web3 from "../../../public/web3.png";
import web4 from "../../../public/web4.png";
import web5 from "../../../public/web5.png";
import web6 from "../../../public/web6.png";

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
						<h1 className="text-xl font-mono transition duration-500 dark:text-white">
							Luke Chigges
						</h1>
						<ul className="flex items-center">
							<li>
								<BsFillMoonStarsFill
									onClick={() => setDarkMode(!darkMode)}
									className="transition ease-in-out hover:text-yellow-500 dark:hover:text-yellow-500 hover:scale-110 cursor-pointer text-2xl dark:text-white"
								/>
							</li>
							<li>
								<a
									className="transition hover:bg-blue-600 duration-500 bg-teal-600
									text-white px-4 py-2 rounded-md ml-8"
									href="/"
								>
									Back to homepage
								</a>
							</li>
						</ul>
					</nav>

					<div className="text-center p-10">
						<h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">
							How do you know I can build a website?
						</h2>
						<h3 className="text-md py-5 leading-8 text-gray-800 md:text-3xl transition duration-500 dark:text-white">
							You&apos;re on one of mine right now.
						</h3>
						<p className="leading-8 text-gray-800 md:text-xl max-w-xl mx-auto transition duration-500 dark:text-white">
							Stunning, isn&apos;t it?
						</p>
						<h2 className="text-5xl mt-20 py-2 text-teal-600 font-medium md:text-6xl">
							No seriously, who even are you?
						</h2>
						<h3 className="text-md py-5 leading-8 text-gray-800 md:text-3xl transition duration-500 dark:text-white">
							Alright, I am someone who studied at Purdue University<br />
							and have a fancy little piece of paper that says &quot;Computer Engineer&quot; on it.<br /><br />
							Besides that, web development is a hobby of mine and I know my way around a CNAME certificate.<br />
						</h3>
						<h2 className="text-5xl mt-20 py-2 text-teal-600 font-medium md:text-6xl">
							Why is it so damn expensive? Isn&apos;t making a site easy?
						</h2>
						<h3 className="text-md py-5 leading-8 text-gray-800 md:text-3xl transition duration-500 dark:text-white">
							A man&apos;s gotta eat.<br />
							I am not trying to get rich, but I am trying to make a living.<br />
							While it seems like a lot of money, it takes a lot of time and care to make a site.<br />
							The profit margins here are not very large. This is a good deal.<br /><br />
							...And yes, making a site is easy. Making a good site is not.
						</h3>
						<h2 className="text-5xl mt-20 py-2 text-teal-600 font-medium md:text-6xl">
							What sets you apart besides your good looks?
						</h2>
						<h3 className="text-md py-5 leading-8 text-gray-800 md:text-3xl transition duration-500 dark:text-white">
							Ah, shucks. You&apos;re too kind.<br /><br />
							Well, I am a computer engineer by trade, so I know my way around a computer and networks.<br />
							I work very personally with my clients. This results in a highly personalized site.<br />
						</h3>
					</div>
				</section>
				<section>
					<div className="text-center">
						<h3 className="justify-between align-center text-3xl py-1 transition duration-500 dark:text-white">
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

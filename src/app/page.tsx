"use client"; // Tells NextJS that this component can use the 'useState' hook
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { useState, useEffect } from "react";
import Image from "next/image";
import headshot from "../../public/headshot.jpg";
import design from "../../public/design.png";
import consulting from "../../public/consulting.png";
import code from "../../public/code.png";
import { useSpring, animated } from "@react-spring/web";
import SlideInText from "./SlideInText";
import HiddenSkipLink from "./HiddenSkipLink";
import DownloadResumeButton from "./DownloadResumeButton";

export default function Home() {
	const [darkMode, setDarkMode] = useState(true);

	useEffect(() => {
		const params = new URLSearchParams(window.location.search);
		const darkModeValue = params.get("dark"); // This would be 'true' or 'false' as a string

		if (darkModeValue === null) {
			return;
		}

		// Convert the 'true' or 'false' string to a Boolean value
		// Note: This will set stateVar to true for 'true', and false for 'false' or any other string
		const isDarkMode = darkModeValue === "true";
		setDarkMode(isDarkMode);
	}, []);

	const headshotSpring = useSpring({
		from: { y: -100 },
		to: { y: 0 },
		delay: 500,
	});

	return (
		<div className={darkMode ? "dark" : ""}>
			<Head>
				<title>Luke Chigges</title>
				<meta
					name="description"
					content="Landing page for Software Engineer Luke Chigges."
				/>
				<link rel="icon" type="image/png" href="../../consulting.png" />
				<link rel="canonical" href="https://www.chigges.com" />
			</Head>
			<nav className="fixed w-full top-0 left-0 transition duration-500 bg-gradient-to-b from-gray-600 dark:from-slate-950 from-5% to-white dark:to-slate-800 dark:bg-slate-800 px-10 md:px-20 lg:px-40 py-6 flex justify-between">
				<h2 className="text-xl font-mono duration-500 text-black dark:text-white">
					Luke Chigges
				</h2>
				<ul className="flex items-center">
					<li>
						<BsFillMoonStarsFill
							tabIndex={0}
							onClick={() => setDarkMode(!darkMode)}
							onKeyDown={(e) => {
								if (e.key === "Enter" || e.key === "Space") setDarkMode(!darkMode);
							}}
							className="ease-in-out hover:text-yellow-500 dark:hover:text-yellow-500 hover:scale-110 cursor-pointer text-2xl dark:text-white"
						/>
					</li>
					<li>
						<DownloadResumeButton />
					</li>
				</ul>
			</nav>

			<div className="pt-16 transition-all duration-500 bg-white px-10 md:px-20 lg:px-96 dark:bg-slate-800 dark:text-white text-lg">
				<main>
					<section className="max-h-screen mb-24 sm:mb-8">
						<div className="flex flex-row mt-12 sm:mt-1">
							{/* TODO: Add a skip link to each section */}
							<HiddenSkipLink text="Skip to About Me" linkTo="#aboutme" />
							<HiddenSkipLink text="Skip to Skills & Education" linkTo="#skills" />
							<HiddenSkipLink text="Skip to Contact" linkTo="#contact" />
						</div>

						<div className="text-center p-10">
							<h1 className="text-5xl py-2 text-teal-400 font-medium md:text-6xl">
								Luke Chigges
							</h1>
							<h2 className="text-md py-5 leading-8 text-gray-800 md:text-3xl transition duration-500 dark:text-white">
								Software Engineer
							</h2>
							<p className="py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto transition duration-500 dark:text-white">
								Detail-oriented full stack developer with a passion for creating.
							</p>
						</div>
						<div className="text-5xl flex justify-center gap-16 py-3 transition duration-500">
							<a
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Open a link to Luke's github.com profile in a new tab"
								href="https://github.com/CtrlAltDelight/"
							>
								<AiFillGithub
									role="none"
									className="transition hover:scale-110 hover:fill-teal-500 text-gray-600 dark:text-white"
								/>
							</a>
							<a
								target="_blank"
								rel="noopener"
								aria-label="Open a link to Luke's linkedin.com profile in a new tab"
								href="https://www.linkedin.com/in/luke-chigges/"
							>
								<AiFillLinkedin
									role="none"
									className="transition hover:scale-110 hover:fill-blue-500 text-gray-600 dark:text-white"
								/>
							</a>
							<a
								aria-label="A link to send Luke an email"
								href="mailto:site@chigges.com"
							>
								<AiFillMail
									role="none"
									className="transition hover:scale-110 hover:fill-red-500 text-gray-600 dark:text-white"
								/>
							</a>
						</div>
						<animated.div className="max-w-lg mx-auto" style={{ ...headshotSpring }}>
							<Image
								className="h-auto max-w-full mx-auto rounded-full"
								src={headshot}
								alt="A picture of Luke Chigges"
							/>
						</animated.div>
					</section>
					<section id="aboutme" className="pb-12">
						<h2 tabIndex={0} className="text-center text-5xl py-1 duration-500">
							About Me
						</h2>
						<SlideInText>
							<div className="font-semibold indent-8 text-left space-y-4 py-2 leading-8 text-gray-800 duration-500 dark:text-white">
								<p>Hi, I&apos;m Luke Chigges!</p>
								<p>
									I&apos;m a recent Computer Engineering graduate from Purdue
									University, where I developed a strong foundation in software
									engineering and a passion for creating innovative solutions.
								</p>
								<p>
									During my studies, I specialized in Software and Computer
									Systems, gaining hands-on experience with various programming
									languages, frameworks, and tools. Throughout my academic
									journey, I worked on several exciting projects, including{" "}
									<b>Sweat Social</b>: A fitness tracking iOS app, using Google
									Firebase and Swift technologies. A web based tool for rating
									Node packages using AWS Lambda, DynamoDB, and React. And my own
									compiler for a C like language called Micro C.
								</p>
								<p>
									In addition to my coursework, I completed internships at{" "}
									<a
										aria-label="A link to open Milwaukee Tool's website in a new tab"
										target="_blank"
										rel="noopener noreferrer"
										className="underline decoration-sky-500 hover:decoration-rose-500"
										href="https://www.milwaukeetool.com/"
									>
										Milwaukee Tool
									</a>{" "}
									and{" "}
									<a
										aria-label="A link to open Newr Company's website in a new tab"
										target="_blank"
										rel="noopener noreferrer"
										className="underline decoration-sky-500 hover:decoration-rose-500"
										href="https://www.newrcompany.com/"
									>
										Newr Company
									</a>
									, where I collaborated with cross-functional teams to design and
									implement an automated PCB testing system using Python and
									Microcontrollers and where I contributed to the development of
									firmware using React and STM32 Bluetooth Low Energy
									communications. Some of the key technologies I work with include
									JavaScript, Python, React, and Node.js. I&apos;m particularly
									interested in web development and computer networks and I am
									eager to continue learning and growing in this field.
								</p>
								<p>
									When I&apos;m not coding, you can find me configuring my Linux
									desktop, playing bass guitar, or making personal sites like the
									one you are on now. I am also passionate about teaching and
									tutoring programming.
								</p>
								<p>
									I am excited to start my professional journey and am actively
									looking for opportunities to apply my skills and make a positive
									impact. Feel free to reach out if you would like to connect or
									discuss potential opportunities!
								</p>
							</div>
						</SlideInText>
					</section>
					<SlideInText>
						<section id="skills">
							<h2
								tabIndex={0}
								className="text-center text-5xl py-1 duration-500 dark:text-white"
							>
								Skills & Education
							</h2>
							<div className="xl:flex xl:columns-3 space-between gap-10">
								<div
									tabIndex={0}
									className="transition duration-500 text-center w-full shadow-lg p-10 rounded-2xl my-10 shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/50"
								>
									<Image
										className="mx-auto"
										src={consulting}
										alt="A picture of a hand giving a thumbs up"
										width={100}
										height={100}
									/>
									<h3 className="text-xl py-4 text-teal-400">
										<strong>Front End</strong>
									</h3>
									<p className="py-1 text-gray-800 duration-500 dark:text-white">
										<ul className="">
											<li>React.js</li>
											<li>Svelte</li>
											<li>JavaScript</li>
											<li>HTML</li>
											<li>CSS</li>
											<li>TailwindCSS</li>
											<li>Bootstrap</li>
										</ul>
									</p>
									<h4 className="text-xl py-4 text-teal-400">
										<strong>Back End</strong>
									</h4>
									<p className="py-1 text-gray-800 duration-500 dark:text-white">
										<ul className="">
											<li>Node.js</li>
											<li>Flask</li>
											<li>AWS</li>
											<li>MongoDB</li>
											<li>Google Firebase</li>
											<li>JSON</li>
											<li>SQL</li>
										</ul>
									</p>
								</div>
								<div
									tabIndex={0}
									className="transition duration-500 text-center w-full shadow-lg p-10 rounded-2xl my-10 shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/50 width-"
								>
									<Image
										className="mx-auto"
										src={design}
										alt="A clip art representing an image icon"
										width={100}
										height={100}
									/>
									<h3 className="text-xl py-4 text-teal-400">
										<strong>Code Management</strong>
									</h3>
									<p className="py-1 text-gray-800 duration-500 dark:text-white">
										<ul className="">
											<li>Git</li>
											<li>GitHub</li>
											<li>Docker</li>
											<li>Kubernetes</li>
											<li>Linux Environment</li>
										</ul>
									</p>
									<h4 className="text-xl py-4 text-teal-400">
										<strong>Programming Languages</strong>
									</h4>
									<p className="py-1 text-gray-800 duration-500 dark:text-white">
										<ul className="">
											<li>C</li>
											<li>Python</li>
											<li>Bash</li>
											<li>Java</li>
											<li>TypeScript</li>
											<li>Swift</li>
										</ul>
									</p>
								</div>
								<div
									tabIndex={0}
									className="transition duration-500 text-center w-full shadow-lg p-10 rounded-2xl my-10 shadow-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/50"
								>
									<Image
										className="mx-auto"
										src={code}
										alt="An image of a hashtag"
										width={100}
										height={100}
									/>
									<h3 className="text-xl py-4 text-teal-400">
										<strong>Education</strong>
									</h3>
									<p className="py-1 text-gray-800 duration-500 dark:text-white">
										<b className="text-teal-400">B.S. Computer Engineering</b>,
										Purdue University,
										<br /> West Lafayette
									</p>
									<p className="text-base py-1 text-gray-800 duration-500 dark:text-white">
										Concentration in Software Engineering <br />
										Concentration in Computer Systems
									</p>
									<p className="py-1 text-gray-800 duration-500 dark:text-white">
										<b className="text-teal-400">Certificate in React.js</b>,
										Purdue University,
										<br /> West Lafayette
									</p>
									<h4 className="text-xl py-4 text-teal-400">
										<strong>Experience</strong>
									</h4>
									<p className="py-1 text-gray-800 duration-500 dark:text-white">
										<b>Milwaukee Tool</b>, Engineering Intern, Milwaukee WI
									</p>
									<p className="py-1 text-gray-800 duration-500 dark:text-white">
										<b>Newr Company</b>, Engineering Intern, Greenfield IN
									</p>
								</div>
							</div>
						</section>
					</SlideInText>
					<section id="contact">
						<div className="text-center">
							<h2
								tabIndex={0}
								className="text-center text-5xl py-1 duration-500 dark:text-white pb-2"
							>
								Contact
							</h2>
							<p className="py-1 text-gray-800 duration-500 dark:text-white">
								Send me an email and I will get back to you as soon as possible.
							</p>
						</div>
						<div className="text-center pb-20 text-gray-800 duration-500 dark:text-white">
							<a
								className="text-cyan-500 hover:text-cyan-300"
								href="mailto:site@chigges.com"
							>
								<p>site@chigges.com</p>
							</a>
						</div>
					</section>
				</main>
			</div>
			<footer className="transition-all duration-500 h-28 bg-gradient-to-t from-gray-600 dark:from-slate-950 from-5% to-white dark:to-slate-800 dark:bg-slate-800" />
		</div>
	);
}

"use client"; // Tells NextJS that this component can use the 'useState' hook
import Head from "next/head";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin, AiFillMail } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";
import headshot from "../../public/headshot.jpg";
import design from "../../public/design.png";
import consulting from "../../public/consulting.png";
import code from "../../public/code.png";
import { useSpring, animated } from "@react-spring/web";
import SlideInText from "./SlideInText";

export default function Home() {
	const [darkMode, setDarkMode] = useState(true);
	const headshotSpring = useSpring({
		from: { y: -100 },
		to: { y: 0 },
		delay: 500,
	});

	return (
		<div className={darkMode ? "dark" : ""}>
			<Head>
				<title>Chigges Web Design</title>
				<meta name="description" content="Chigges Web Design and Development" />
				<link rel="icon" type="image/png" href="../../public/code.png" />
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
									onClick={() => setDarkMode(!darkMode)}
									className="transition ease-in-out hover:text-yellow-500 dark:hover:text-yellow-500 hover:scale-110 cursor-pointer text-2xl dark:text-white"
								/>
							</li>
							<li>
								<a
									aria-label="Link to the resume page of this site"
									className="transition hover:bg-blue-600 duration-500 bg-teal-400
									text-white px-4 py-2 rounded-md ml-8"
									href="/resume"
								>
									Resume
								</a>
							</li>
						</ul>
					</nav>

					<div className="text-center p-10">
						<h1 className="text-5xl py-2 text-teal-400 font-medium md:text-6xl">
							Luke Chigges
						</h1>
						<h2 className="text-md py-5 leading-8 text-gray-800 md:text-3xl transition duration-500 dark:text-white">
							Developer and designer.
						</h2>
						<p className="py-5 leading-8 text-gray-800 md:text-xl max-w-xl mx-auto transition duration-500 dark:text-white">
							Freelancer providing web services.
						</p>
					</div>
					<div className="text-5xl flex justify-center gap-16 py-3 transition duration-500">
						<a
							aria-label="A link to Luke's github.com profile"
							href="https://github.com/CtrlAltDelight/"
						>
							<AiFillGithub
								role="none"
								className="transition hover:scale-110 hover:fill-teal-500 text-gray-600 dark:text-white"
							/>
						</a>
						<a
							aria-label="A link to Luke's linkedin.com profile"
							href="https://www.linkedin.com/in/luke-chigges/"
						>
							<AiFillLinkedin
								role="none"
								className="transition hover:scale-110 hover:fill-blue-500 text-gray-600 dark:text-white"
							/>
						</a>
						<a
							aria-label="A link to send Luke an email"
							href="mailto:webdev@chigges.com?subject=Let's make a website!"
						>
							<AiFillMail
								role="none"
								className="transition hover:scale-110 hover:fill-red-500 text-gray-600 dark:text-white"
							/>
						</a>
					</div>
					<animated.div
						className="max-w-lg mx-auto"
						style={{ ...headshotSpring }}
					>
						<Image
							className="h-auto max-w-full mx-auto rounded-full"
							src={headshot}
							alt="A picture of Luke Chigges"
						/>
					</animated.div>
				</section>
				<section>
					<div className="text-center py-10">
						<SlideInText>
							<h2 className="text-5xl py-1 transition duration-500 dark:text-white">
								Services I offer
							</h2>
							<p className="text-md py-2 leading-8 text-gray-800 transition duration-500 dark:text-white">
								As a full stack developer, I will provide a{" "}
								<span className="text-teal-400">beautiful</span> front end
								design using cutting edge technologies like{" "}
								<a
									className="transition underline decoration-sky-500 hover:decoration-rose-500"
									href="https://react.dev/"
								>
									React.js
								</a>
								.
							</p>
						</SlideInText>
					</div>
					<SlideInText>
						<div className="lg:flex gap-10">
							<div className="text-center shadow-lg p-10 rounded-2xl my-10 shadow-cyan-500/50 transition hover:shadow-xl hover:shadow-cyan-500/50">
								<Image
									className="mx-auto"
									src={consulting}
									alt="A picture of a hand giving a thumbs up"
									width={100}
									height={100}
								/>
								<h3 className="text-xl py-4 text-teal-400">
									Built How You Want
								</h3>
								<p className="py-1 text-gray-800 transition duration-500 dark:text-white">
									Always communicating, the agile development style I use allows
									for quick bursts of development. New builds can be finished
									and presented to you and you can tell me what additional
									features and changes you want to see in the next build.
								</p>
								<h4 className="text-xl py-4 text-teal-400">Preview Sites</h4>
								<p className="py-1 text-gray-800 transition duration-500 dark:text-white">
									I will always have a preview site for you to see the progress
									of your site. This allows you to see the progress and make
									changes while I am developing!
								</p>
							</div>
							<div className="text-center shadow-lg p-10 rounded-2xl my-10 shadow-cyan-500/50 transition hover:shadow-xl hover:shadow-cyan-500/50">
								<Image
									className="mx-auto"
									src={design}
									alt="A clip art representing an image icon"
									width={100}
									height={100}
								/>
								<h3 className="text-xl py-4 text-teal-400">
									Beautiful Designs
								</h3>
								<p className="py-1 text-gray-800 transition duration-500 dark:text-white">
									Designs feel personal to your brand and image. Made to look
									unique, stand out, and be memorable.
								</p>
								<h4 className="text-xl py-4 text-teal-400">
									Optimized for Mobile
								</h4>
								<p className="py-1 text-gray-800 transition duration-500 dark:text-white">
									Rest assured, your site will be responsive and look great on
									all devices and screens.
								</p>
							</div>
							<div className="text-center shadow-lg p-10 rounded-2xl my-10 shadow-cyan-500/50 transition hover:shadow-xl hover:shadow-cyan-500/50">
								<Image
									className="mx-auto"
									src={code}
									alt="An image of a hashtag"
									width={100}
									height={100}
								/>
								<h3 className="text-xl py-4 text-teal-400">
									Industry Grade Deployment
								</h3>
								<p className="py-1 text-gray-800 transition duration-500 dark:text-white">
									Your website will be version controlled using GitHub deployed
									with Vercel. This allows for seamless deployments, meaning
									your site will never be down. Version control means your site
									can have multiple versions and a preview version to audit
									before releasing to the main branch.
								</p>
								<h4 className="text-xl py-4 text-teal-400">
									Full Stack Development
								</h4>
								<p className="py-1 text-gray-800 transition duration-500 dark:text-white">
									ReactJS is the most popular JavaScript framework and it&apos;s
									what the website you are seeing now is built with. Coupled
									with TailwindCSS and NextJS, the limit of what your design can
									look like is limitless.
								</p>
							</div>
						</div>
					</SlideInText>
				</section>
				<section>
					<SlideInText>
						<div className="text-center justify-center py-10">
							<h2 className="text-5xl py-1 transition duration-500 dark:text-white">
								Pricing
							</h2>
							<div className="lg:flex gap-10 justify-center">
								<div className="text-center shadow-lg p-10 rounded-2xl my-10 shadow-cyan-500/50 transition hover:shadow-xl hover:shadow-cyan-500/50">
									<h3 className="text-3xl py-4 text-teal-400">Basic Package</h3>
									<p className="py-1 text-gray-800 transition duration-500 dark:text-white">
										Ideal for individuals or small businesses looking for a
										professionally designed web presence.
									</p>
									<h4 className="text-xl py-4 text-teal-400">
										<ul className="list-none text-sky-300">
											<li>Custom Web Design</li>
											<li>React-based Development</li>
											<li>Fast Deployment</li>
										</ul>
									</h4>
									<p className="py-1 text-gray-800 transition duration-500 dark:text-white">
										Starts at $70 + Domain Cost
									</p>
								</div>
								<div className="text-center shadow-lg p-10 rounded-2xl my-10 shadow-cyan-500/50 transition hover:shadow-xl hover:shadow-cyan-500/50">
									<h3 className="text-3xl py-4 text-teal-400">
										Premium Package
									</h3>
									<p className="py-1 text-gray-800 transition duration-500 dark:text-white">
										Ideal for individuals or small businesses looking for a
										professionally designed web presence.
									</p>
									<h4 className="text-xl py-4 text-teal-400">
										<ul className="list-none text-sky-300">
											<li>Custom Web Design</li>
											<li>React-based Development</li>
											<li>Fast Deployment</li>
											<li>Domain Management</li>
											<li>Custom Email</li>
											<li>Multiple Pages</li>
										</ul>
									</h4>
									<p className="py-1 text-gray-800 transition duration-500 dark:text-white">
										Starts at $120 + Domain Cost
									</p>
								</div>
								<div className="text-center shadow-lg p-10 rounded-2xl my-10 shadow-cyan-500/50 transition hover:shadow-xl hover:shadow-cyan-500/50">
									<h3 className="text-3xl py-4 text-teal-400">
										Custom Package
									</h3>
									<p className="py-1 text-gray-800 transition duration-500 dark:text-white">
										Not sure which package is right for you, or need something
										more specialized?
										<br />
										Contact me to discuss a tailored solution for your needs.
									</p>
									<div className="text-5xl flex justify-center gap-16 py-3 transition duration-500">
										<a
											aria-label="A link to send Luke an email"
											href="mailto:webdev@chigges.com?subject=Let's make a website!"
										>
											<AiFillMail
												role="none"
												className="transition hover:scale-110 hover:fill-red-500 text-gray-600 dark:text-white"
											/>
										</a>
									</div>
									<div className="text-lg text-center pb-20 text-gray-800 transition duration-500 dark:text-white">
										<a
											href="mailto:webdev@chigges.com?subject=Let's make a website!"
											className="transition text-cyan-500 hover:text-cyan-300"
										>
											webdev@chigges.com
										</a>
									</div>
								</div>
							</div>
						</div>
					</SlideInText>
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

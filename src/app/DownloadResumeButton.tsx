import React from "react";

const DownloadResumeButton = () => {
	const downloadResume = () => {
		const link = document.createElement("a");
		link.href = "/Luke Chigges Resume.pdf"; // Path to your PDF file in the public directory
		link.download = "Luke Chigges Resume.pdf";
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	return (
		<button
			onClick={downloadResume}
			aria-label="Download link to Luke's resume"
			className="transition hover:bg-blue-600 duration-500 bg-teal-400
				text-white dark:text-slate-800 px-4 py-2 rounded-md ml-8"
		>
			Download Resume
		</button>
	);
};

export default DownloadResumeButton;

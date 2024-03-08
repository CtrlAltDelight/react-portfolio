/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/zoom",
				destination: process.env.ZOOM_URL,
				permanent: true,
			},
		];
	},
};

module.exports = nextConfig;

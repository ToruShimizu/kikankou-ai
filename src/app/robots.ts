import type { MetadataRoute } from "next";

const url = process.env.NEXT_PUBLIC_BASE_URL as string;
const isProduction = process.env.NODE_ENV === "production";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: isProduction ? "/" : undefined,
			disallow: isProduction ? "/api/" : "/",
		},
		sitemap: `${url}/sitemap.xml`,
	};
}

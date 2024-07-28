import env from "@clientEnv";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
    return {
		sitemap: `${env.NEXT_PUBLIC_DOMAIN}/sitemap.xml`,
		rules: {
			userAgent: "*",
			allow: "/",
		},
	}
};
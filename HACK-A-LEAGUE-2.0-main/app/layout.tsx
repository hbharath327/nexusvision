import type { Metadata } from "next";
import type { NextLayout } from "@types";

import "@styles/globals.scss"

import { cn } from "@utlis";
import { labels } from "@labels";
import { Suspense } from "react";
import { poppins } from "@styles/fonts";
import { Providers } from "@/providers";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
	applicationName: labels.GENERAL.APPLICATION_NAME,
	creator: labels.GENERAL.CREATOR,
	authors: [
		{
			name: labels.GENERAL.AUTHOR,
		}
	],
	icons: [
		{
			rel: "apple-touch-icon",
            url: "/logo-d.svg",
            sizes: "57x57",
		},
		{
			rel: "apple-touch-icon",
            url: "/logo-d.svg",
            sizes: "60x60",
		},
		{
			rel: "apple-touch-icon",
            url: "/logo-d.svg",
            sizes: "72x72",
		},
		{
			rel: "apple-touch-icon",
            url: "/logo-d.svg",
            sizes: "76x76",
		},
		{
			rel: "apple-touch-icon",
            url: "/logo-d.svg",
            sizes: "114x114",
		},
		{
			rel: "apple-touch-icon",
            url: "/logo-d.svg",
            sizes: "120x120",
		},
		{
			rel: "apple-touch-icon",
            url: "/logo-d.svg",
            sizes: "144x144",
		},
		{
			rel: "apple-touch-icon",
            url: "/logo-d.svg",
            sizes: "152x152",
		},
		{
			rel: "apple-touch-icon",
            url: "/logo-d.svg",
            sizes: "180x180",
		},
		{
			rel: "icon",
			sizes: "16x16",
            url: "/logo-d.svg",
        },
		{
			rel: "icon",
			sizes: "32x32",
            url: "/logo-d.svg",
        },
		{
			rel: "icon",
			sizes: "96x96",
            url: "/logo-d.svg",
        },
		{
			rel: "icon",
			sizes: "192x192",
            url: "/logo-d.svg",
        },
		{
			rel: "msapplication-TileImage",
			sizes: "70x70",
            url: "/logo-d.svg",
        },
		{
			rel: "msapplication-TileImage",
			sizes: "144x144",
            url: "/logo-d.svg",
        },
		{
			rel: "msapplication-TileImage",
			sizes: "150x150",
            url: "/logo-d.svg",
        },
		{
			rel: "msapplication-TileImage",
			sizes: "310x310",
            url: "/logo-d.svg",
        },
	],
};

const RootLayout: NextLayout = ({ children }) =>
{
	return (
		<html
			lang="en"
			className="dark"
			suppressHydrationWarning
		>
			<Suspense>
				<body
					className={cn(
						poppins.variable,
						"relative w-screen h-screen overflow-hidden antialiased font-poppins",
					)}
				>
					<img
						src="/bg.jpg"
						alt="background"
						className="absolute inset-0 object-cover w-full h-full opacity-60 z-[-1]"
					/>

					<Providers>
						{children}
					</Providers>

					<NextTopLoader
						color="#f97316"
						showSpinner={false}
					/>
				</body>
			</Suspense>
		</html>
	)
};

export default RootLayout;
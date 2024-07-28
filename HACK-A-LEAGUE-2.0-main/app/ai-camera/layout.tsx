import type { Metadata } from "next";
import type { NextLayout } from "@types";

import { labels } from "@labels";

export const metadata: Metadata = {
	title: {
		default: labels.PAGE_TITLES.AI_CAMERA,
		template: `%s - ${labels.PAGE_TITLES.AI_CAMERA}`,
        absolute: labels.PAGE_TITLES.AI_CAMERA,
	},
	description: labels.PAGE_DESCRIPTIONS.AI_CAMERA,
	keywords: labels.PAGE_KEYWORDS.AI_CAMERA,
};

const RootLayout: NextLayout = ({ children }) => children;

export default RootLayout;
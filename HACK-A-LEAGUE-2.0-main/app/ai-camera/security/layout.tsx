import type { Metadata } from "next";
import type { NextLayout } from "@types";

import { labels } from "@labels";

export const metadata: Metadata = {
	title: {
		default: labels.PAGE_TITLES.AI_CAMERA_SECURITY,
		template: `%s - ${labels.PAGE_TITLES.AI_CAMERA_SECURITY}`,
        absolute: labels.PAGE_TITLES.AI_CAMERA_SECURITY,
	},
	description: labels.PAGE_DESCRIPTIONS.AI_CAMERA_SECURITY,
	keywords: labels.PAGE_KEYWORDS.AI_CAMERA_SECURITY,
};

const RootLayout: NextLayout = ({ children }) => children;

export default RootLayout;
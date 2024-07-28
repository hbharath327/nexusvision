import type { Metadata } from "next";
import type { NextLayout } from "@types";

import { labels } from "@labels";

export const metadata: Metadata = {
	title: {
		default: labels.PAGE_TITLES.AR_VIEW,
		template: `%s - ${labels.PAGE_TITLES.AR_VIEW}`,
        absolute: labels.PAGE_TITLES.AR_VIEW,
	},
	description: labels.PAGE_DESCRIPTIONS.AR_VIEW,
	keywords: labels.PAGE_KEYWORDS.AR_VIEW,
};

const RootLayout: NextLayout = ({ children }) => children;

export default RootLayout;
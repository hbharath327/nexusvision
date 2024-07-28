import type { Metadata } from "next";
import type { NextLayout } from "@types";

import { labels } from "@labels";

export const metadata: Metadata = {
	title: {
		default: labels.PAGE_TITLES.AR_SHOES,
		template: `%s - ${labels.PAGE_TITLES.AR_SHOES}`,
        absolute: labels.PAGE_TITLES.AR_SHOES,
	},
	description: labels.PAGE_DESCRIPTIONS.AR_SHOES,
	keywords: labels.PAGE_KEYWORDS.AR_SHOES,
};

const RootLayout: NextLayout = ({ children }) => children;

export default RootLayout;
import type { Metadata } from "next";
import type { NextLayout } from "@types";

import { labels } from "@labels";
import { shoesData } from "@arShoes/shoesData";

export const metadata: Metadata = {
	title: {
		default: labels.PAGE_TITLES.AR_SHOES_DETAILS,
		template: `%s - ${labels.PAGE_TITLES.AR_SHOES_DETAILS}`,
        absolute: labels.PAGE_TITLES.AR_SHOES_DETAILS,
	},
	description: labels.PAGE_DESCRIPTIONS.AR_SHOES_DETAILS,
	keywords: labels.PAGE_KEYWORDS.AR_SHOES_DETAILS,
};

export async function generateStaticParams() {
	return shoesData.map(shoe => ({
		"shoe-id": shoe.id,
	}));
};

const RootLayout: NextLayout = ({ children }) => children;

export default RootLayout;
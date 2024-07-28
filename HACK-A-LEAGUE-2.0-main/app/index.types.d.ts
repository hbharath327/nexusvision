import type { labels } from "@labels";
import type { ReactNode, SVGProps } from "react";
import type { useUpload } from "@upload/useUpload";
import type { InferSelectModel } from "drizzle-orm";
import type { shoesData } from "@arShoes/shoesData";
import type { chatSchema, messagesSchema } from "@db/schema";
import type { AxiosResponse, InternalAxiosRequestConfig } from "axios";

export type AxiosCallbacks = {
	requestSuccess?: (config: InternalAxiosRequestConfig) => void;
	requestError?: (error: any) => void;
	responseSuccess?: (config: AxiosResponse) => void;
	responseError?: (error: void) => void;
};

export type TLabels = typeof labels;

export type NextLayout = ({ children: ReactNode }) => JSX.Element;

export type IconSvgProps = SVGProps<SVGSVGElement> & {
	size?: number;
};

export type NextServerPage <T extends {} = {}> = {
    params: { [key: string]: string } & T;
    searchParams: { [key: string]: string | string[] | undefined };
    children?: ReactNode;
};

export type TShoeData = typeof shoesData[number];
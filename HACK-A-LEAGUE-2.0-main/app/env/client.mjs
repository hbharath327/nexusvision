import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

const clientEnv = createEnv({
    client: {
        NEXT_PUBLIC_DOMAIN: z.string().url().min(1).max(255),
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: z.string().min(1).max(255),
        NEXT_PUBLIC_CLERK_SIGN_IN_URL: z.string().min(1).max(255).startsWith("/"),
        NEXT_PUBLIC_CLERK_SIGN_UP_URL: z.string().min(1).max(255).startsWith("/"),
    },
    runtimeEnv: {
        NEXT_PUBLIC_DOMAIN: process.env.NEXT_PUBLIC_DOMAIN,
        NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
        NEXT_PUBLIC_CLERK_SIGN_IN_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
        NEXT_PUBLIC_CLERK_SIGN_UP_URL: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
    },
});

export default clientEnv;
import { z } from "zod";
import { createEnv } from "@t3-oss/env-nextjs";

const serverEnv = createEnv({
    server: {
        DOMAIN: z.string().url().min(1).max(255),
        CLERK_SECRET_KEY: z.string().min(1).max(255),
    },
    runtimeEnv: {
        DOMAIN: process.env.DOMAIN,
        CLERK_SECRET_KEY: process.env.CLERK_SECRET_KEY,
    },
});

export default serverEnv;
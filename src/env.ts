import { createEnv } from "@t3-oss/env-nextjs";
import * as z from "zod"

export const env=createEnv({
    server:{
        FRONTEND_URL:z.url(),
        BACKEND_URL:z.url(),
        API_URL:z.url(),
        BETTER_AUTH_URL:z.url()
    },
    client:{

    },
    runtimeEnv:{
        BACKEND_URL:process.env.BACKEND_URL,
        FRONTEND_URL:process.env.FRONTEND_URL,
        API_URL:process.env.API_URL,
        BETTER_AUTH_URL:process.env.BETTER_AUTH_URL
    }
})
import type {NextConfig} from "next";
import {form, link} from "./config";

const nextConfig: NextConfig = {
    /* config options here */
    redirects: async () => {
        return [
            {
                source: "/",
                destination: link,
                permanent: true,
            },
            {
                source: "/form",
                destination: form,
                permanent: true,
            }
        ];
    }
};

export default nextConfig;
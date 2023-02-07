// @ts-check
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env/schema.mjs"));

/**
 * @template {import('next').NextConfig} T
 * @param {T} config - A generic parameter that flows through to the return type
 * @constraint {{import('next').NextConfig}}
 */
function defineNextConfig(config) {
  return config;
}

export default defineNextConfig({
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    // runtime: 'experimental-edge',
    appDir: true,
  },
});

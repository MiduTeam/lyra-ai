import { serverSchema } from './schema.mjs';
import { env as clientEnv, formatErrors } from './client.mjs';

/**
 * @type {{ [key: string]: string | undefined; }}
 */
let serverEnv = {};
Object.keys(serverSchema.shape).forEach(
  (key) => (serverEnv[key] = process.env[key]),
);

const _serverEnv = serverSchema.safeParse(serverEnv);

if (!_serverEnv.success) {
  console.error(
    '❌ Invalid environment variables:\n',
    ...formatErrors(_serverEnv.error.format()),
  );
  throw new Error('Invalid environment variables');
}

for (let key of Object.keys(_serverEnv.data)) {
  if (key.startsWith('NEXT_PUBLIC_')) {
    console.warn('❌ You are exposing a server-side env-variable:', key);

    throw new Error('You are exposing a server-side env-variable');
  }
}

export const env = { ..._serverEnv.data, ...clientEnv };

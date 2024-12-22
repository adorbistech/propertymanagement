import * as dotenv from 'dotenv';

dotenv.config();

console.log('Debugging Environment Variables:');
console.log('PostgresURL:', process.env.PostgresURL ? '[REDACTED]' : 'Not set');
console.log('JWT_SECRET:', process.env.JWT_SECRET ? '[REDACTED]' : 'Not set');

if (!process.env.PostgresURL) {
  console.error('ERROR: PostgresURL is not set. Please check your .env file.');
} else {
  console.log('PostgresURL is set correctly.');
}

if (!process.env.JWT_SECRET) {
  console.error('ERROR: JWT_SECRET is not set. Please check your .env file.');
} else {
  console.log('JWT_SECRET is set correctly.');
}

console.log('\nAll environment variables (sensitive values redacted):');
const redactedEnv = Object.fromEntries(
  Object.entries(process.env).map(([key, value]) => [
    key,
    key.toLowerCase().includes('url') || key.toLowerCase().includes('key') || key.toLowerCase().includes('secret')
      ? '[REDACTED]'
      : value
  ])
);
console.log(JSON.stringify(redactedEnv, null, 2));


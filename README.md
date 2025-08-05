<!-- filepath: /Users/joaomanteigas/Development/issue-examples/thirdweb-sophon-wallet/README.md -->

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, create a `.env.local` file in the root directory and add the following environment variables:

```bash
NEXT_PUBLIC_THIRDWEB_CLIENT_ID=your_client_id_here
THIRDWEB_SECRET_KEY=your_secret_key_here
AUTH_PRIVATE_KEY=your_auth_private_key_here
NEXT_PUBLIC_THIRDWEB_TEAM_ID=your_team_id_here
```

Then, run the development server in a javascript debug terminal:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Use the connect button, select wallets then sophon.

See issue in line 19 in actions file.

import { createAuth } from "thirdweb/auth";
import { privateKeyToAccount } from "thirdweb/wallets";
import { client } from "./thirdweb";

const privateKey = process.env.AUTH_PRIVATE_KEY || "";

export const thirdwebAuth = createAuth({
  domain: process.env.NEXT_PUBLIC_THIRDWEB_AUTH_DOMAIN || "",
  adminAccount: privateKeyToAccount({ client, privateKey }),
  client: client,
});

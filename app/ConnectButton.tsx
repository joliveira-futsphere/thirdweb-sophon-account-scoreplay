"use client";

import { ConnectButton as CB } from "thirdweb/react";
import { SophonChain } from "./constants";
// import { client } from "./thirdweb";
import { doLogin, generatePayload, isLoggedIn, logout } from "./actions";
import { createThirdwebClient } from "thirdweb";

const client = createThirdwebClient({
  clientId: process.env.NEXT_PUBLIC_THIRDWEB_CLIENT_ID!,
});

export const ConnectButton = () => {
  return (
    <CB
      appMetadata={{
        name: "ScorePlay",
        description: "Participate in sports predictions",
        logoUrl: "https://scoreplay.xyz/svg/logo.svg",
      }}
      client={client}
      onConnect={() => {
        console.log("connected!");
      }}
      onDisconnect={() => {
        console.log("disconnected!");
      }}
      chains={[SophonChain]}
      auth={{
        doLogin: async (params) => {
          console.log("logging in!");
          debugger;
          const response = await doLogin(params);
          console.log("login response", response);
        },
        isLoggedIn: async (address) => {
          console.log("checking if logged in!", { address });
          const response = await isLoggedIn(address);
          console.log("response", response);
          return response;
        },
        getLoginPayload: async ({ address }: { address: string }) => {
          console.log("getting login payload!", { address });
          debugger;
          const payload = await generatePayload({
            address: address,
            chainId: SophonChain.id,
          });
          debugger;
          return payload;
        },
        doLogout: async () => {
          await logout();
        },
      }}
    />
  );
};

"use client";

import { ThirdwebProvider } from "thirdweb/react";

import { WagmiProvider } from "wagmi";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { config } from "./wagmi";

import "@sophon-labs/account-eip6963/mainnet";

const queryClient = new QueryClient();

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThirdwebProvider>
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </WagmiProvider>
    </ThirdwebProvider>
  );
}

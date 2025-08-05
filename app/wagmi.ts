import { http } from "viem";
import {
  //   sophonTestnet,
  sophon,
} from "viem/chains";
import { createConfig, injected } from "wagmi";

export const config = createConfig({
  chains: [
    // sophonTestnet,
    sophon,
  ],
  multiInjectedProviderDiscovery: true,
  ssr: true,
  transports: {
    // [sophonTestnet.id]: http(),
    [sophon.id]: http(),
  },
  connectors: [injected()],
});

declare module "wagmi" {
  interface Register {
    config: typeof config;
  }
}

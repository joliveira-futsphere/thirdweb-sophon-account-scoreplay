export const SophonMainnet = {
  chainId: 50104,
  symbol: "SOPH",
  name: "Sophon",
  icon: {
    format: "png",
    width: 400,
    height: 400,
    url: "https://sophon-brand.s3.eu-north-1.amazonaws.com/icon-512.png",
  },
  rpc: "https://rpc.sophon.xyz",
};

export const SophonChain = {
  id: SophonMainnet.chainId,
  name: SophonMainnet.name,
  icon: SophonMainnet.icon,
  rpc: SophonMainnet.rpc,
  symbol: SophonMainnet.symbol,
};

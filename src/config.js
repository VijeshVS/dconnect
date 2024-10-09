export const CONTRACT_ADDRESS = "0xa59E50524fB4d65641866a81371dc426D7c0ed49";

export const CONTRACT_ABI = [
  {
    inputs: [{ internalType: "string", name: "_welcome", type: "string" }],
    name: "changeWelcome",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getWelcome",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "welcome",
    outputs: [{ internalType: "string", name: "", type: "string" }],
    stateMutability: "view",
    type: "function",
  },
];

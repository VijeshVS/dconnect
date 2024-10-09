import { useEffect, useState } from "react";
import "./App.css";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./config";
import { ethers } from "ethers";
import { Button, Flex } from "antd";
import ConnectWalletModal from "./components/WalletConnectModal";
import { Toaster, toast } from 'sonner'

function App() {
  const [isUserConnected, setIsUserConnected] = useState(false);
  const [accounts, setAccounts] = useState();

  useEffect(() => {
    window.ethereum
      .request({
        method: "eth_accounts",
        params: [],
      })
      .then((res) => {
        if (res.length == 0) {
          alert("User is not connected");
        } else {
          setIsUserConnected(true);
          setAccounts(res);
        }
      });
  }, []);

  return (
    <main>
      <nav className="shadow-md border-b-[0.5px] py-4 flex justify-between">
        <div className="flex w-full justify-between px-4">
          <h1 className="text-3xl font-bold">dConnect</h1>
          <ConnectWalletModal isUserConnected={isUserConnected} />
        </div>
      </nav>
      <Toaster />
    </main>
  );
}

export default App;

// const [contract, setContract] = useState(null);

// useEffect(() => {
//   async function getSettle(){
//     const provider = new ethers.BrowserProvider(window.ethereum);
//     const signer = await provider.getSigner();
//     const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
//     setContract(contract);
//   }

//   getSettle();

// }, []);

// async function textChange(){
//   const tx = await contract.changeWelcome("snfn");
//   console.log(tx)
// }

// return (
//   <div className="container">
//     <button onClick={textChange}> Call Smart Contract </button>
//   </div>
// );

import { useEffect, useState } from "react";
import "./App.css";
import { CONTRACT_ABI, CONTRACT_ADDRESS } from "./config";
import { ethers } from "ethers";

function App() {
  const [contract, setContract] = useState(null);

  useEffect(() => {

    async function getSettle(){
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner()
      const contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
      setContract(contract);
      console.log("done")
    }

    getSettle();
    
  }, []);

  async function textChange(){
    const tx = await contract.changeWelcome("snfn");
    console.log(tx)
  }

  return (
    <div className="container">
      <button onClick={textChange}>Call Smart Contract</button>
    </div>
  );
}

export default App;

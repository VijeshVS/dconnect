import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {

  return (
    <>
    <Navbar/>
    </>
  );
}

export default App;

// const [contract, setContract] = useState(null);

// useEffect(() => {
//   async function getSettle(){
//
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

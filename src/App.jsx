import { useEffect, useState } from 'react'
import './App.css'
import web3 from 'web3'
function App() {
  const provider = window.ethereum;
  const [account,setAccount] = useState();
  const [balance,setBalance] = useState(0);


  async function switchToLinea() {
    const provider = window.ethereum;
    
    const lineaChainId = '0xe705';
    
    try {
      await provider.request({
        method: 'wallet_switchEthereumChain',
        params: [{ chainId: lineaChainId }],
      });
      console.log("Switched to Linea network");
    } catch (switchError) {
      if (switchError.code === 4902) {
        try {
          await provider.request({
            method: 'wallet_addEthereumChain',
            params: [{
              chainId: lineaChainId,
              chainName: 'Linea',
              nativeCurrency: {
                name: 'Ether',
                symbol: 'ETH',
                decimals: 18,
              },
              blockExplorerUrls: ['https://explorer.linea.build/'],
            }],
          });
          console.log("Added Linea network and switched to it");
        } catch (addError) {
          console.error("Failed to add Linea network:", addError);
        }
      } else {
        console.error("Failed to switch to Linea network:", switchError);
      }
    }
  }

  useEffect(()=>{
    async function getAccounts () {
      await provider.request({ method: 'eth_requestAccounts' });
      const hello = await window.ethereum.request({
        "method": "eth_accounts",
        "params": [],
       });

       return hello;
    }

    getAccounts().then((res)=>{
      setAccount(res[0]);
    })
    
  },[])

  function checkBalance(){
    async function check(){
      const res = await window.ethereum.request({
        "method": "eth_getBalance",
        "params": [
         account,
         "latest"
       ],
       });
       const bal = web3.utils.fromWei(res,'ether');
       setBalance(bal)
       return res;
    }
    
    check().then((res)=>{
      console.log(res)
    })
  }

  return (
    <div className="container">
      <button onClick={checkBalance}>Check Balance</button>
      <br />
      <h1>balance: {balance}</h1>
    </div>
  )
}

export default App

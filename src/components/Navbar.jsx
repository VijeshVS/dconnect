import React from 'react'
import ConnectWalletModal from './WalletConnectModal'
import useAccounts from '../hooks/useAccounts';

const Navbar = () => {
    const [accounts, setAccounts, isUserConnected, setIsUserConnected] = useAccounts();
    
  return (
    <nav className="shadow-md border-b-[0.5px] py-4 flex justify-between">
        <div className="flex w-full justify-between px-4">
          <h1 className="text-3xl font-bold">dConnect</h1>
          <ConnectWalletModal
            setIsUserConnected={setIsUserConnected}
            setAccounts={setAccounts}
            isUserConnected={isUserConnected}
          />
        </div>
      </nav>
  )
}

export default Navbar
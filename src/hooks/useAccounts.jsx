import { useEffect, useState } from "react";
import { toast } from "sonner";

function useAccounts() {
  const [accounts, setAccounts] = useState();
  const [isUserConnected, setIsUserConnected] = useState(false);

  useEffect(() => { 
    function getAccounts() {
      if (!window.ethereum) {
        toast.error("Wallets not detected!!");

        return;
      }
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
    }

    getAccounts();
  }, []);

  return [accounts, setAccounts,isUserConnected,setIsUserConnected];
}

export default useAccounts;
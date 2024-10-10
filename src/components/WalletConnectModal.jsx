import React, { useState } from "react";
import { Button, Modal } from "antd";
import { Spin } from "antd";
import { toast } from "sonner";

const ConnectWalletModal = ({
  setIsUserConnected,
  setAccounts,
  isUserConnected,
}) => {
  const [walletConnecting, setWalletConnecting] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  async function requestWalletConnection() {
    setWalletConnecting(true);

    try {
      await window.ethereum.request({
        method: "eth_requestAccounts",
        params: [],
      });
      const res = await window.ethereum.request({
        method: "eth_accounts",
        params: [],
      });
      setAccounts(res);
      setIsUserConnected(true);
      toast.success("Wallet connected successfully");
    } catch (e) {
      toast.error("Wallet access denied");
    }
    setWalletConnecting(false);
    setIsModalOpen(false);
  }

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      {isUserConnected ? (
        <Button size="middle" disabled>
          Wallet Connected
        </Button>
      ) : (
        <Button onClick={showModal} type="primary">
          Connect your wallet
        </Button>
      )}
      <Modal
        footer={<></>}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="flex flex-col space-y-3">
          <h1 className="text-xl font-semibold">Connect your wallet</h1>
          <Button onClick={requestWalletConnection} className="w-fit">
            Connect
          </Button>
          {walletConnecting ? <Spin /> : <></>}
        </div>
      </Modal>
    </>
  );
};

export default ConnectWalletModal;

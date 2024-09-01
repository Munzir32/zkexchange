import React, { useState } from 'react';
import CustomInput from './CustomInput';
import { zkexchange } from '~~/contracts/zkexchange';
import { getGeneralPaymasterInput } from "viem/zksync";
import { toast } from "react-toastify";
import { walletClient } from "~~/utils/wagmi"

const AddTokenModal = () => {
  const openModal = () => {
    const modal = document.getElementById('my_modal_1') as HTMLDialogElement | null;
    if (modal) {
      modal.showModal();
    }
  };

  

  const [tokenAddress, settokenAddress] = useState("")
  const [fee, setFee] = useState<any>("")
  const [min, setMin] = useState<any>("")
  const [max, setMax] = useState<any>("")
  const isFormFilled = tokenAddress && fee && min && max

  const paymasterAddress = "0xBAb868Bfd8BB3e1B3Adaec62c69CE5DA6FEb3879"
  const handleToken = async () => {
    // if (!isFormFilled) throw new Error("fill the form")

    const [account] =
      typeof window !== "undefined" && window.ethereum
        ? await window.ethereum.request({ method: "eth_requestAccounts" }) // Request accounts if in a browser with Ethereum provider
        : [];

    if (!account) {
      throw new Error("No account found. Please connect your wallet."); // Throw an error if no account is found
    }

    try {
        await walletClient?.writeContract({
            address: zkexchange.address,
            abi: zkexchange.abi,
            functionName: "addToken",
            args: [tokenAddress, fee, min, max],
            account,
            paymaster: paymasterAddress,
            paymasterInput: getGeneralPaymasterInput({
              innerInput: new Uint8Array()
            })
          })
    } catch (error) {
        console.log(error)
    }


  }

  const addToken = async (e: any) => {
    e.preventDefault();
    try {
      await toast.promise(
        handleToken(), {
        pending: "Adding Token",
        success: "Token added Successful",
        error: "Unexpected Error"
      }
      )
    } catch (error) {
      console.log(error)
    }
  }


  return (
    <div>
      <button className="btn" onClick={openModal}>Open Modal</button>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click the button below to close</p>
          <div className="modal-action">
            <form method="dialog">
              
              <CustomInput
              type="string"
              name="string"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => settokenAddress(e.target.value)}
              className="w-full py-3 rounded-md flex items-center px-3 bg-[#EAF0F7]"
            />
            <CustomInput
              type="number"
              name="number"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setFee(e.target.value)}
              className="w-full py-3 rounded-md flex items-center px-3 bg-[#EAF0F7]"
            />


<CustomInput
              type="number"
              name="number"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMin(e.target.value)}
              className="w-full py-3 rounded-md flex items-center px-3 bg-[#EAF0F7]"
            />


<CustomInput
              type="number"
              name="number"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMax(e.target.value)}
              className="w-full py-3 rounded-md flex items-center px-3 bg-[#EAF0F7]"
            />


            <button disabled={!isFormFilled} onClick={addToken}>Add </button>
              <button className="btn mt-5 btn-xs sm:btn-sm md:btn-md lg:btn-lg" >Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AddTokenModal;

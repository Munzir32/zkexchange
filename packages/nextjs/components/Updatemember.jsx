import React, { useState } from 'react'
import { GDAv1Forward } from "~~/contracts/GDAv1Forward"
import { useWriteContract } from 'wagmi';
import {toast} from 'react-toastify';
import { etherUnits } from 'viem';


const Updatemember = () => {

    const poolAddress = ""
    
    const [memberAddress, setMemberAddress] = useState('');
    const [newUnits, setNewUnits] = useState('');

    const { writeContract } = useWriteContract()

    let provider;

    if (typeof window !== "undefined" && window?.ethereum) {
      provider = new ethers.providers.Web3Provider(window?.ethereum, "any")
    }

  
    const handleUpdateMember = async () => {
      if (!provider) {
        // setMessage('Please connect your wallet first.');
        return;
      }
  
      const signer = provider.getSigner();
      const contract = new ethers.Contract(GDAv1ForwarderAddress, GDAv1Forward.abi, signer);
        const gasLimit = ethers.utils.hexlify(1000000)
        try {
            // const result =  writeContract({ 
            //     abi: GDAv1Forward.abi,
            //     address: GDAv1Forward.address,
            //     functionName: 'updateMemberUnits',
            //     args: [
            //         poolAddress, memberAddress, newUnits, "0x"
            //     ],
            //  })


            const tx = await contract.updateMemberUnits(poolAddress, addressMember, newUnits,  "0x", {
              gasLimit: gasLimit,
            });
            const receipt = await tx.wait();
            console.log(receipt)
             
            toast.success(`Member updated successfully`)
        } catch (error) {
            console.log(error)
        }
    }


    
  return (
    <div>

        <h3 className=' text-2xl'>Update Member</h3>
        <div>
          <div>
            <p>Input members address and unit to attach to update member address</p>
            <p>{poolAddress}</p>
          </div>
            <div>
           
            <form action="" onSubmit={handleUpdateMember}>
            <input type="text" placeholder="Input Member address" onChange={(e) => setMemberAddress(e.target.value)} className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="Unit" onChange={(e) => setNewUnits(e.target.value)} className="input input-bordered w-full max-w-xs" />
            <button className="btn">Button</button>
            </form>

            </div>
        </div>
    </div>
  )
}

export default Updatemember
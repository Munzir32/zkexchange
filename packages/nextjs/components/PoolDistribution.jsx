import React, { useState } from 'react'
import { GDAv1Forward } from "~~/contracts/GDAv1Forward"
import { useWriteContract } from 'wagmi';
import {toast} from 'react-toastify';
import { ethers } from "ethers"


const PoolDistribution = () => {

    const [tokenAddress, setTokenAddress] = useState('');
    const [adminAddress, setAdminAddress] = useState('');
    const [poolAddress, setPoolAddress] = useState('');
    // const [memberAddress, setMemberAddress] = useState('');
    // const [newUnits, setNewUnits] = useState('');

    const { writeContract } = useWriteContract()
    const tokenDeploy = "0x2D567EcE699Eabe5afCd141eDB7A4f2D0D6ce8a0"

    let provider;

    if (typeof window !== "undefined" && window?.ethereum) {
      provider = new ethers.providers.Web3Provider(window?.ethereum, "any")
    }

  
    const handleCreatePool = async () => {
      if (!provider) {
        alert("Connect Wallet")
        return;
      }

      const signer = provider.getSigner();
      const contract = new ethers.Contract(GDAv1ForwarderAddress, GDAv1Forward.abi, signer);

        const config = {
            transferabilityForUnitsOwner: 0, // Non-transferable
            distributionFromAnyAddress: false
          };
        try {
            // const result =  writeContract({ 
            //     abi: GDAv1Forward.abi,
            //     address: GDAv1Forward.address,
            //     functionName: 'createPool',
            //     args: [
            //         tokenAddress, adminAddress, config
            //     ],
            //  })
            //  const receipt = await result;
            //  const [success, poolAddress] = receipt.events.find(e => e.event === 'PoolCreated').args;
            //  console.log(success);

            const tx = await contract.createPool(newToken, addressAdmin, config, {
              gasLimit: ethers.utils.hexlify(1000000),
            });
            const receipt = await tx.wait();
            console.log(receipt)
            
            const [success, poolAddress] = receipt.events.find(e => e.event === 'PoolCreated').args;
            toast.success(`Pool created successfully at ${poolAddress}`)

            console.log(success)
             
            setPoolAddress(poolAddress);
            toast.success(`Pool created successfully at ${poolAddress}`)
        } catch (error) {
            console.log(error)
        }
    }


    
  return (
    <div>

        <h3 className=' text-2xl'>Create Pool</h3>
        <div>
          <div>
            <p>Pool Address</p>
            <p>{poolAddress}</p>
          </div>
            <div>
           
            <form action="" onSubmit={handleCreatePool}>
            <input type="text" placeholder="admin" onChange={(e) => setAdminAddress(e.target.value)} className="input input-bordered w-full max-w-xs" />
            <input type="text" placeholder="token address" onChange={(e) => setTokenAddress(e.target.value)} className="input input-bordered w-full max-w-xs" />
            <button className="btn">Button</button>
            </form>

            </div>
        </div>
    </div>
  )
}

export default PoolDistribution
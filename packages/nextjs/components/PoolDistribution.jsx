import React, { useState } from 'react'
// import { useAccount } from 'wagmi';
import { GDAv1Forward } from "~~/contracts/GDAv1Forward"
import { useWriteContract } from 'wagmi';
import {toast} from 'react-toastify';


const PoolDistribution = () => {

    // const { address } = useAccount()
    const [tokenAddress, setTokenAddress] = useState('');
    const [adminAddress, setAdminAddress] = useState('');
    const [poolAddress, setPoolAddress] = useState('');
    // const [memberAddress, setMemberAddress] = useState('');
    // const [newUnits, setNewUnits] = useState('');

    const { writeContract } = useWriteContract()

  
    const handleCreatePool = async () => {
        const config = {
            transferabilityForUnitsOwner: 0, // Non-transferable
            distributionFromAnyAddress: false
          };
        try {
            const result =  writeContract({ 
                abi: GDAv1Forward.abi,
                address: GDAv1Forward.address,
                functionName: 'createPool',
                args: [
                    tokenAddress, adminAddress, config
                ],
             })
             const receipt = await result;
             const [success, poolAddress] = receipt.events.find(e => e.event === 'PoolCreated').args;
             console.log(success);
             
            setPoolAddress(poolAddress);
            toast.success(`Pool created successfully at ${poolAddress}`)
        } catch (error) {
            
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
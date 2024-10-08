import React, { useState } from 'react'
import { GDAv1Forward } from "~~/contracts/GDAv1Forward"
import { useWriteContract } from 'wagmi';
import {toast} from 'react-toastify';


const Updatemember = () => {

    const poolAddress = ""
    
    const [memberAddress, setMemberAddress] = useState('');
    const [newUnits, setNewUnits] = useState('');

    const { writeContract } = useWriteContract()

  
    const handleUpdateMember = async () => {
        
        try {
            const result =  writeContract({ 
                abi: GDAv1Forward.abi,
                address: GDAv1Forward.address,
                functionName: 'updateMemberUnits',
                args: [
                    poolAddress, memberAddress, newUnits, "0x"
                ],
             })
             
            toast.success(`Member updated successfully`)
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
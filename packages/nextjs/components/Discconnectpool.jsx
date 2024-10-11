

import React, { useState } from 'react'
import { GDAv1Forward } from "~~/contracts/GDAv1Forward"
import { useWriteContract } from 'wagmi';
import {toast} from 'react-toastify';


const Disconnectpool = () => {

    // const poolAddress = ""
    
    const [poolAddress, setPoolAddress] = useState('')

    const { writeContract } = useWriteContract()

  
    const disconnectingpool = async () => {
        
        try {
            const result =  writeContract({ 
                abi: GDAv1Forward.abi,
                address: GDAv1Forward.address,
                functionName: 'disconnectPool',
                args: [
                    poolAddress, "0x"
                ],
             })
             
            toast.success(`Pool Disconnected`)
        } catch (error) {
            console.log(error)
        }
    }


    
  return (
    <div>

        <h3 className=' text-2xl'>Reward Pool</h3>
        <div>
          <div>
            <p>Disconnect Pool</p>
            <p>{poolAddress}</p>
          </div>
            <div>
           
            <form action="" onSubmit={connectingpool}>
            <input type="text" placeholder="Input pool address" onChange={(e) => setPoolAddress(e.target.value)} className="input input-bordered w-full max-w-xs" />
            <button className="btn">Button</button>
            </form>
            </div>
        </div>
    </div>
  )
}

export default Disconnectpool
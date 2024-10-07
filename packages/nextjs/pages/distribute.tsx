import React, { useState} from 'react'
import AddTokenModal from '~~/components/AddTokenModal'
import AccessManager from '~~/components/AccessManager'
import AccessBuyer from '~~/components/AccessBuyer'
import { useAccount } from 'wagmi'
import AddCurrency from '~~/components/AddCurrency'
import { useWriteContract } from 'wagmi'

const Admin = () => {

  const { address } = useAccount()
  const [tokenAddress, setTokenAddress] = useState('');
  const [adminAddress, setAdminAddress] = useState('');
  const [poolAddress, setPoolAddress] = useState('');
  const [memberAddress, setMemberAddress] = useState('');
  const [newUnits, setNewUnits] = useState('');

  return (
    
    <div className=' flex items-center justify-center mt-10'>
      <div>
        <h2 className=' text-2xl text-center'>Welcome to distribution pool.</h2>
        <p>You can create pool to reward your audiences when they get rewards, suchs as gamers, quiz events and others.</p>
        <p>To get started</p>

        <div>
            <div>
            <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />

            </div>
        </div>
      </div>
    </div>
  )
}

export default Admin
import React from 'react'
import AddTokenModal from '~~/components/AddTokenModal'
import AccessManager from '~~/components/AccessManager'
import AccessBuyer from '~~/components/AccessBuyer'
import { useAccount } from 'wagmi'
import AddCurrency from '~~/components/AddCurrency'

const Admin = () => {

  const { address } = useAccount()

  return (
    
    <div className=' flex items-center justify-center mt-10'>
      <div>
        <h2 className=' text-2xl'>Welcome to distribution pool.</h2>
        <p>You can create pool to reward your audiences when they get rewards, suchs as gamers, quiz events and others.</p>
      </div>
    </div>
  )
}

export default Admin
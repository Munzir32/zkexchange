import React from 'react'
import AddTokenModal from '~~/components/AddTokenModal'
import AccessManager from '~~/components/AccessManager'
import AccessBuyer from '~~/components/AccessBuyer'
import { useAccount } from 'wagmi'

const Admin = () => {

  const { address } = useAccount()

  return (
    
    <div>
      {address == "0xbE70b0cE9ecB7c0c4f0be93d8c329212a90BE112" ? 
      <>
      <AddTokenModal />
      <AccessManager />
      <AccessBuyer />
      </>
    : (
      <p>Connect Admin wallet to contiue</p>
    )}
    </div>
  )
}

export default Admin
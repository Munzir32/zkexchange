import React from 'react'
import AddTokenModal from '~~/components/AddTokenModal'
import AccessManager from '~~/components/AccessManager'
import AccessBuyer from '~~/components/AccessBuyer'

const Admin = () => {
  return (
    <div>
        <AddTokenModal />
        <AccessManager />
        <AccessBuyer />
    </div>
  )
}

export default Admin
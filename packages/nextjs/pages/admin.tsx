import React from 'react'
import AddTokenModal from '~~/components/AddTokenModal'
import AccessManager from '~~/components/AccessManager'

const Admin = () => {
  return (
    <div>
        <AddTokenModal />
        <AccessManager />
    </div>
  )
}

export default Admin
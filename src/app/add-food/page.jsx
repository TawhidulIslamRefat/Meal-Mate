import React from 'react'
import PrivateRoute from '../ProtectedRoutes/ProtectedRoutes'
import AddItem from '../Components/AddFood/AddFood'

export default function page() {
  return (
    <PrivateRoute>
        <AddItem></AddItem>
     </PrivateRoute>
  )
}

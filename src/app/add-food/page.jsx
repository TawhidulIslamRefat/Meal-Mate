import React from 'react'
import PrivateRoute from '../ProtectedRoutes/ProtectedRoutes'
import AddFood from '../Components/AddFood/AddFood'


export default function page() {
  return (
    <PrivateRoute>
        <AddFood></AddFood>
     </PrivateRoute>
  )
}

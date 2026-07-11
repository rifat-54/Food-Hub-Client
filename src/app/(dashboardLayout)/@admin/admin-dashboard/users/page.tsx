import { UsersTable } from '@/components/modules/dashboardComponent/users/UsersTable'
import { userService } from '@/services/user.service'
import React from 'react'

export default async function UserPage() {
    const response=await userService.getAllUsers()

    if(!response){
      return <div>Faild to load users</div>
    }

    // console.log("data ->",response)
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Users</h1>
        <p className="text-muted-foreground">
          Manage all registered users.
        </p>
      </div>

      <UsersTable users={response?.data?.data} />
    </div>
  )
}

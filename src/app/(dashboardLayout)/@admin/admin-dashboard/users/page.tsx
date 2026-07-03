import { UsersTable } from '@/components/modules/dashboardComponent/users/UsersTable'
import { userService } from '@/services/user.service'
import React from 'react'

export default async function UserPage() {
    const {data}=await userService.getAllUsers()

    console.log("data ->",data)
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold">Users</h1>
        <p className="text-muted-foreground">
          Manage all registered users.
        </p>
      </div>

      <UsersTable users={data.data} />
    </div>
  )
}

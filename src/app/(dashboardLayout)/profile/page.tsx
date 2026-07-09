import ProfileCard from '@/components/modules/dashboardComponent/profile/ProfileCard'
import { userService } from '@/services/user.service'
import React from 'react'

export default async function ProfilePage() {
  const {data}=await userService.getUserInfo()
  console.log(data)
  return (
      <div className="container mx-auto max-w-5xl py-10">
      <ProfileCard user={data.data} />
    </div>
  )
}

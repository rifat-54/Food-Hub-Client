import ProfileCard from "@/components/modules/dashboardComponent/profile/ProfileCard";
import { userService } from "@/services/user.service";
import React from "react";

export default async function ProfilePage() {
  const response = await userService.getUserInfo();
  if (!response) {
    return <div>Faild to load data</div>;
  }
  const data = response.data;
  // console.log(data);
  return (
    <div className="container mx-auto max-w-5xl py-10">
      {data && <ProfileCard user={data.data} />}
    </div>
  );
}

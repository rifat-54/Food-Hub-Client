"use client";

import { useEffect, useState } from "react";
import ProfileCard from "@/components/modules/dashboardComponent/profile/ProfileCard";
import { userService } from "@/services/user.service";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);

  const router = useRouter();
  const { data, isPending } = authClient.useSession();

  const loadUser = async () => {
    const response = await userService.getUserInfo();

    if (response.data) {
      setUser(response.data.data);
    }
  };

  useEffect(() => {
    if (isPending) return;

    if (!data) {
      router.replace("/login");
      return;
    }

    loadUser();
  }, [data, isPending, router]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return null;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto max-w-5xl py-10">
      <ProfileCard user={user} />
    </div>
  );
}

"use client";

import { usePathname } from "next/navigation";
import { Role } from "@/constant/role";

export default function DashboardContent({
  role,
  children,
  user,
  admin,
  provider,
}: {
  role: string;
  children: React.ReactNode; 
  user: React.ReactNode;
  admin: React.ReactNode;
  provider: React.ReactNode;
}) {
  const pathname = usePathname();

  const isProfilePage = pathname === "/profile";

  if (isProfilePage) {
    return <>{children}</>;
  }

  return (
    <>
      {role === Role.USER && user}
      {role === Role.ADMIN && admin}
      {role === Role.PROVIDER && provider}
    </>
  );
}
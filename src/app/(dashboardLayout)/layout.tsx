"use client";

import { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";

import { AppSidebar } from "@/components/app-sidebar";
import DashboardContent from "@/components/modules/dashboardComponent/DashboardContent";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { authClient } from "@/lib/auth-client";

export default function DashboardLayout({
  children,
  user,
  admin,
  provider,
}: {
  children: React.ReactNode;
  user: React.ReactNode;
  admin: React.ReactNode;
  provider: React.ReactNode;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const { data, isPending } = authClient.useSession();

  useEffect(() => {
    if (isPending) return;

    if (!data) {
      router.replace("/login");
      return;
    }

    // Redirect only when visiting "/dashboard"
    if (pathname !== "/dashboard") return;

    const role = (data.user as any).role;

    if (role === "PROVIDER") {
      router.replace("/provider-dashboard");
    } else if (role === "ADMIN") {
      router.replace("/admin-dashboard");
    } else {
      router.replace("/dashboard/myorders");
    }
  }, [data, isPending, pathname, router]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return null;
  }

  const role = (data.user as any).role;

  return (
    <SidebarProvider>
      <AppSidebar user={data.user as any} />

      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-vertical:h-4 data-vertical:self-auto"
          />
        </header>

        <div className="flex flex-1 flex-col gap-4 p-4">
          <DashboardContent
            role={role}
            user={user}
            provider={provider}
            admin={admin}
          >
            {children}
          </DashboardContent>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
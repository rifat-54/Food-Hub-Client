"use client"
import { AppSidebar } from "@/components/app-sidebar";
import DashboardContent from "@/components/modules/dashboardComponent/DashboardContent";

import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Role } from "@/constant/role";
import { authClient } from "@/lib/auth-client";
import { userService } from "@/services/user.service";
import { redirect } from "next/navigation";

export default   function DashboardLayout({
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

  const  {data,isPending} = authClient.useSession();


  if (isPending) {
  return <div>Loading...</div>;
}


  console.log("from dashboardd",data)




  // const { data } = await userService.getSession();

  if(!data){
    return redirect("/login")
  }

  const role = (data.user as any).role;

  console.log("role",role)

  return (
    <SidebarProvider>
      <AppSidebar user={data?.user as any} />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator
            orientation="vertical"
            className="mr-2 data-vertical:h-4 data-vertical:self-auto"
          />

          {/* <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink href="#">Build Your Application</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator className="hidden md:block" />
              <BreadcrumbItem>
                <BreadcrumbPage>Data Fetching</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb> */}
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

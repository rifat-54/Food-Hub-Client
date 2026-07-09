import { userService } from "@/services/user.service";
import { NextRequest, NextResponse } from "next/server";
import { Role } from "./constant/role";

export async function proxy(request: NextRequest) {
  console.log("proxy calledS");

  // const {data}=await userService.getSession()

  let data = null;

  try {
    const session = await userService.getSession();
    data = session.data;
  } catch (error) {
    console.error("Failed to get session:", error);
  }

  console.log(data);

  const pathName = request.nextUrl.pathname;

  const role = data?.user?.role;

  let isAuthenticated = false;
  let isAdmin = false;
  let isProvider = false;
  let isUser = false;

  if (data) {
    isAuthenticated = true;
    isAdmin = role === Role.ADMIN;
    isProvider = role === Role.PROVIDER;
    isUser = role === Role.USER;
  }

  if (!isAuthenticated) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  const isDashboard = pathName.startsWith("/dashboard");
  const isAdminDashboard = pathName.startsWith("/admin-dashboard");
  const isProviderDashboard = pathName.startsWith("/provider-dashboard");
  const isProfile=pathName.startsWith("/profile")

  if (isAdmin && !(isAdminDashboard || isProfile)) {
    return NextResponse.redirect(new URL("/admin-dashboard", request.url));
  }
  if (isProvider && !(isProviderDashboard || isProfile)) {
    return NextResponse.redirect(new URL("/provider-dashboard", request.url));
  }

  if (isUser && !(isDashboard || isProfile)) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin-dashboard/:path*",
    "/provider-dashboard/:path*",
    "/profile/:path*",
  ],
};

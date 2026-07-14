"use client";

import { authClient } from "@/lib/auth-client";
import Router from "next/router";

import { useEffect } from "react";


export default async function Demo() {


const { data, isPending } = authClient.useSession();

useEffect(() => {
  if (!isPending && !data) {
    Router.replace("/login");
  }
}, [data, isPending]);





  return <div>Demo</div>;
}
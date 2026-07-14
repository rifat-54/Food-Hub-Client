"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function Demo() {
  const router = useRouter();

  const { data, isPending } = authClient.useSession();

  useEffect(() => {
    if (!isPending && !data) {
      router.replace("/login");
    }
  }, [data, isPending, router]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  return <div>Demo</div>;
}
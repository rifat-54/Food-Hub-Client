"use client";

import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const url = process.env.NEXT_PUBLIC_API_URL;

export default function Demo() {
  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

  const [user, setUser] = useState(null);

  // console.log("from demo",session)

  useEffect(() => {
    if (!isPending && !session) {
      router.replace("/login");
      return;
    }

    async function getUser() {
      const res = await fetch(`${url}/user/me`, {
        credentials: "include",
      });

      const result = await res.json();
      setUser(result);
    }

    if (session) {
      getUser();
    }
  }, [session, isPending, router]);

  if (isPending) {
    return <div>Loading...</div>;
  }

  return <div>{JSON.stringify(user)}</div>;
}
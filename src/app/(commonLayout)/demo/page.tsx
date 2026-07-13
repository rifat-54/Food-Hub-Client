import { headers, cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function Demo() {
  const h = await headers();
  const c = await cookies();

  console.log("HEADER COOKIE:", h.get("cookie"));
  console.log("COOKIE API:", c.getAll());

  return <div>Demo</div>;
}
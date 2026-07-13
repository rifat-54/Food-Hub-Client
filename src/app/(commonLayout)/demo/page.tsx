import { cookies } from "next/headers";

export const dynamic = "force-dynamic";

export default async function DemoPage() {
  const cookieStore = await cookies();

  console.log("COOKIE TEST:", cookieStore.getAll());

  return <div>Demo</div>;
}

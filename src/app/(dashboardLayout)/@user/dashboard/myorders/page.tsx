"use client"
import OrderList from "@/components/modules/dashboardComponent/order/OrderList";
import { env } from "@/env";
import React, { useEffect, useState } from "react";

export default function MyOrdersPage() {
  // const cookieStore=await cookies()

  const [data, setData] = useState<any>(null);

  const loadData = async () => {
    const res = await fetch(`${env.NEXT_PUBLIC_API_URL}/orders`, {
      credentials: "include",
      cache: "no-store",
    });

    const data = await res.json();
    setData(data)
  };

  useEffect(()=>{
    loadData()
  },[])

  // console.log(data)
  return (
    <div>
      <OrderList orders={data} reload={loadData}/>
    </div>
  );
}

"use client"
import OrderOverview from "@/components/modules/dashboardComponent/order/OrderOverview";
import OrderTable from "@/components/modules/dashboardComponent/providerMeals/OrderTable";
import { orderServices } from "@/services/order.service";
import React, { useEffect, useState } from "react";

export default function OrdersPage() {

  const [data,setData]=useState<any>(null)

  const loadData=async()=>{
    const response = await orderServices.getProviderAllOrders();
    setData(response.data)
  }

  useEffect(()=>{
    loadData()
  },[])

  if (!data) {
    return <div>Loading ...</div>;
  }  
  // const data = response.data;
  // console.log(data);
  return (
    <div className="space-y-8">
      <OrderOverview data={data} />
      <OrderTable orders={data} />
    </div>
  );
}

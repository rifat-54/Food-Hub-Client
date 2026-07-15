 "use client"
 import OrderDetails from '@/components/modules/dashboardComponent/myOrders/OrderDetails';
import { orderServices } from '@/services/order.service';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function OrderDetailsPage() {

    const {id}=useParams();

    console.log("id",id)

    const [data,setData]=useState<any>(null)

    const loadData=async()=>{
      const response=await orderServices.getOrderById(id as string)
      setData(response?.data)

    }

    useEffect(()=>{
      if(id){

        loadData()
      }
    },[id])

    if(!data){
      return <div>Loading...</div>
    }


    // console.log(data)


  return (
    <section className="container py-8">
      <OrderDetails order={data} />
    </section>
  );
}

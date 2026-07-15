"use client"
import { AllOrdersTable } from '@/components/modules/dashboardComponent/order/AllOrdersTable'
import { OrdersHero } from '@/components/modules/dashboardComponent/order/OrderHero'
import { orderServices } from '@/services/order.service'
import { useEffect, useState } from 'react'


export default function AlloOrders() {

  const [data,setData]=useState<any>(null)

  const loadData=async()=>{
    const response=await orderServices.getAllOrders()
    setData(response.data)
  }

  useEffect(()=>{
    loadData()
  },[])

  if(!data){
    return <div>Loading...</div>
  }

    // console.log(data)
  return (
    <div>
        <OrdersHero orders={data}/>
        <AllOrdersTable orders={data}/>
    </div>
  )
}

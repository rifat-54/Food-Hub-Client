import OrderList from '@/components/modules/dashboardComponent/order/OrderList'
import { env } from '@/env'
import { cookies } from 'next/headers'
import React from 'react'

export default async function MyOrdersPage() {

    const cookieStore=await cookies()

    const res=await fetch(`${env.API_URL}/orders`,{
        headers:{
            Cookie:cookieStore.toString()
        },
        cache:"no-store"
    })

    const data=await res.json()

    console.log(data)
  return (
    <div>
        <OrderList orders={data}/>
    </div>
  )
}

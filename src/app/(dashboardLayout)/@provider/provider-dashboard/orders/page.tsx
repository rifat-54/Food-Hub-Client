import OrderOverview from '@/components/modules/dashboardComponent/order/OrderOverview'
import OrderTable from '@/components/modules/dashboardComponent/providerMeals/OrderTable'
import { orderServices } from '@/services/order.service'
import React from 'react'

export default async function OrdersPage() {
    const {data}=await orderServices.getProviderAllOrders()

    console.log(data)
  return (
    <div className='space-y-8'>
       <OrderOverview data={data}/>
        <OrderTable orders={data}/>
    </div>
  )
}

import OrderTable from '@/components/modules/dashboardComponent/providerMeals/OrderTable'
import { orderServices } from '@/services/order.service'
import React from 'react'

export default async function OrdersPage() {
    const {data}=await orderServices.getProviderAllOrders()

    console.log(data)
  return (
    <div>
        <OrderTable orders={data}/>
    </div>
  )
}

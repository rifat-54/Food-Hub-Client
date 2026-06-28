import OrderDetails from '@/components/modules/dashboardComponent/myOrders/OrderDetails';
import { orderServices } from '@/services/order.service';
import React from 'react'

export default async function OrderDetailsPage({params}:{params:Promise<{id:string}>}) {

    const {id}=await params;

    const {data}=await orderServices.getOrderById(id)

    console.log(data)


  return (
    <section className="container py-8">
      <OrderDetails order={data} />
    </section>
  );
}

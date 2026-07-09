import OrderDetails from "@/components/modules/dashboardComponent/myOrders/OrderDetails";
import { orderServices } from "@/services/order.service";
import React from "react";

export default async function OrderDetailsPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const response = await orderServices.getOrderById(id);
  if (!response) {
    return <div>Faild to load data</div>;
  }
  const data = response.data;

  console.log(data);

  return (
    <section className="container py-8">
      <OrderDetails order={data} />
    </section>
  );
}

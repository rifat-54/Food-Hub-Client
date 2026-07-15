"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import OrderDetails from "@/components/modules/dashboardComponent/myOrders/OrderDetails";
import { orderServices } from "@/services/order.service";

export default function OrderDetailsPage() {
  const { id } = useParams();

  const [order, setOrder] = useState<any>(null);

  const loadOrder = async () => {
    if (!id) return;

    const response = await orderServices.getOrderById(id as string);

    if (response.data) {
      setOrder(response.data);
    }
  };

  useEffect(() => {
    loadOrder();
  }, [id]);

  if (!order) {
    return <div>Loading...</div>;
  }

  return (
    <section className="container py-8">
      <OrderDetails order={order} />
    </section>
  );
}
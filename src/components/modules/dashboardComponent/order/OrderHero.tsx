"use client";

import {
  Package,
  Clock3,
  Truck,
  CheckCircle2,
  XCircle,
  DollarSign,
} from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

type OrderStatus =
  | "PENDING"
  | "PROCESSING"
  | "SHIPPED"
  | "DELIVERED"
  | "CANCELLED";

type Order = {
  id: string;
  totalAmount: number;
  status: OrderStatus;
};

interface OrdersHeroProps {
  orders: Order[];
}

export function OrdersHero({ orders }: OrdersHeroProps) {
  const totalOrders = orders.length;

  const pendingOrders = orders.filter(
    (order) => order.status === "PENDING"
  ).length;

  const processingOrders = orders.filter(
    (order) => order.status === "PROCESSING"
  ).length;

  const shippedOrders = orders.filter(
    (order) => order.status === "SHIPPED"
  ).length;

  const deliveredOrders = orders.filter(
    (order) => order.status === "DELIVERED"
  ).length;

  const cancelledOrders = orders.filter(
    (order) => order.status === "CANCELLED"
  ).length;

  const totalRevenue = orders
    .filter((order) => order.status === "DELIVERED")
    .reduce((sum, order) => sum + order.totalAmount, 0);

  const stats = [
    {
      title: "Total Orders",
      value: totalOrders,
      icon: Package,
      iconClass: "text-slate-600",
      bgClass: "bg-slate-100",
    },
    {
      title: "Pending",
      value: pendingOrders,
      icon: Clock3,
      iconClass: "text-yellow-600",
      bgClass: "bg-yellow-100",
    },
    {
      title: "Processing",
      value: processingOrders,
      icon: Truck,
      iconClass: "text-blue-600",
      bgClass: "bg-blue-100",
    },
    {
      title: "Shipped",
      value: shippedOrders,
      icon: Truck,
      iconClass: "text-indigo-600",
      bgClass: "bg-indigo-100",
    },
    {
      title: "Delivered",
      value: deliveredOrders,
      icon: CheckCircle2,
      iconClass: "text-green-600",
      bgClass: "bg-green-100",
    },
    {
      title: "Cancelled",
      value: cancelledOrders,
      icon: XCircle,
      iconClass: "text-red-600",
      bgClass: "bg-red-100",
    },
    {
      title: "Revenue",
      value: `AED ${totalRevenue.toFixed(2)}`,
      icon: DollarSign,
      iconClass: "text-emerald-600",
      bgClass: "bg-emerald-100",
    },
  ];

  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => {
        const Icon = stat.icon;

        return (
          <Card
            key={stat.title}
            className="shadow-sm transition-all hover:shadow-md"
          >
            <CardContent className="flex items-center justify-between p-6">
              <div>
                <p className="text-sm text-muted-foreground">
                  {stat.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold">
                  {stat.value}
                </h2>
              </div>

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-full ${stat.bgClass}`}
              >
                <Icon className={`h-7 w-7 ${stat.iconClass}`} />
              </div>
            </CardContent>
          </Card>
        );
      })}
    </section>
  );
}
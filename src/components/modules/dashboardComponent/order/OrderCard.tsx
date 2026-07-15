"use client";
import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, MapPin, ShoppingBag, Wallet } from "lucide-react";
import { orderServices } from "@/services/order.service";

import { useEffect } from "react";
import { env } from "@/env";
import { useRouter } from "next/navigation";
// import { updateOrderStatus } from "@/actions/orders.action";
import { OrderStatus } from "@/types/order.types";
import { toast } from "sonner";

interface OrderCardProps {
  order: any,
  reload:()=>Promise<void>
}

export default function OrderCard({ order,reload }: OrderCardProps) {
  const handleUpdateStatus = async () => {
    try {
      const { data } = await orderServices.updateOrderStatus(order.id, {
        status: OrderStatus.CANCELLED,
      });
      toast.success("Order cancelled");
      reload()
    } catch (error) {
      // console.error(error);
      toast.error("Failed to cancel order");
    }


  };

  return (
    <Card className="transition-shadow hover:shadow-lg">
      <CardHeader className="border-b pb-5">
        <div className="flex items-start justify-between">
          <div>
            <CardTitle className="text-xl">
              Order #{order.id.slice(0, 8)}
            </CardTitle>

            <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
              <Calendar className="h-4 w-4" />
              {new Date(order.createdAt).toLocaleDateString()}
            </div>
          </div>

          <div className="flex gap-2 items-center">
            <Badge>{order.status}</Badge>

            {["PLACED", "CONFIRMED"].includes(order.status) && (
              <Button onClick={handleUpdateStatus} variant="destructive">
                Cancel Order
              </Button>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-6 pt-6">
        {/* Summary */}
        <div className="grid gap-4 md:grid-cols-3">
          <div className="flex items-center gap-3 rounded-lg border p-4">
            <Wallet className="h-5 w-5 text-primary" />

            <div>
              <p className="text-xs text-muted-foreground">Total</p>

              <p className="font-bold text-lg">${order.totalAmount}</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-lg border p-4">
            <ShoppingBag className="h-5 w-5 text-primary" />

            <div>
              <p className="text-xs text-muted-foreground">Items</p>

              <p className="font-bold text-lg">{order.orderItems.length}</p>
            </div>
          </div>

          <div className="flex items-start gap-3 rounded-lg border p-4">
            <MapPin className="mt-1 h-5 w-5 text-primary" />

            <div>
              <p className="text-xs text-muted-foreground">Delivery Address</p>

              <p className="line-clamp-2">{order.deliveryAddress}</p>
            </div>
          </div>
        </div>

        {/* Meals */}
        <div>
          <h3 className="mb-3 font-semibold">Ordered Meals</h3>

          <div className="space-y-2">
            {order.orderItems.slice(0, 2).map((item: any) => (
              <div
                key={item.meal.id}
                className="flex items-center justify-between rounded-md bg-muted/50 px-4 py-2"
              >
                <span>{item.meal.name}</span>

                <Badge variant="secondary">×{item.quantity}</Badge>
              </div>
            ))}

            {order.orderItems.length > 2 && (
              <p className="text-sm text-muted-foreground">
                +{order.orderItems.length - 2} more items
              </p>
            )}
          </div>
        </div>

        <div className="flex justify-end border-t pt-5">
          <Button asChild>
            <Link href={`/dashboard/myorders/${order.id}`}>View Details</Link>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

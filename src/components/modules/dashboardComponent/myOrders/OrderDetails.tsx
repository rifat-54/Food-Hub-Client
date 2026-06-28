
import { Badge } from "@/components/ui/badge";
import OrderItemCard from "./OrderItemCard";
import DeliveryInfo from "./DeliveryInfo";
import OrderSummary from "./OrderSummary";

interface OrderDetailsProps {
  order: any;
}

export default function OrderDetails({ order }: OrderDetailsProps) {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 rounded-xl border p-6 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold">
            Order #{order.id.slice(0, 8)}
          </h1>

          <p className="mt-2 text-muted-foreground">
            Placed on{" "}
            {new Date(order.createdAt).toLocaleDateString()}
          </p>
        </div>

        <Badge className="w-fit">
          {order.status}
        </Badge>
      </div>

      {/* Meals */}
      <div>
        <h2 className="mb-5 text-2xl font-semibold">
          Ordered Meals
        </h2>

        <div className="space-y-4">
          {order.orderItems.map((item: any) => (
            <OrderItemCard
              key={item.meal.id}
              item={item}
            />
          ))}
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <DeliveryInfo order={order} />
        </div>

        <OrderSummary order={order} />
      </div>
    </div>
  );
}
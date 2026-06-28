import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function OrderSummary({ order }: any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Order Summary
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        <div className="flex justify-between">
          <span>Status</span>

          <span className="font-medium">
            {order.status}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Total Items</span>

          <span>
            {order.orderItems.length}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Total Amount</span>

          <span className="text-lg font-bold">
            ৳{order.totalAmount}
          </span>
        </div>

        <div className="flex justify-between">
          <span>Order Date</span>

          <span>
            {new Date(order.createdAt).toLocaleDateString()}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
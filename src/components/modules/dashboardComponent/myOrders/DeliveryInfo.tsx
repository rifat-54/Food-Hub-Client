import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, User } from "lucide-react";

export default function DeliveryInfo({ order }: any) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Delivery Information
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="flex gap-3">
          <User className="mt-1 h-5 w-5 text-primary" />

          <div>
            <p className="font-medium">
              {order.user.name}
            </p>
          </div>
        </div>

        <div className="flex gap-3">
          <MapPin className="mt-1 h-5 w-5 text-primary" />

          <p>{order.deliveryAddress}</p>
        </div>
      </CardContent>
    </Card>
  );
}
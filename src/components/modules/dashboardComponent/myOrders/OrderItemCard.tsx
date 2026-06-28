import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";

interface Props {
  item: any;
}

export default function OrderItemCard({ item }: Props) {
  return (
    <Card>
      <CardContent className="flex gap-5 p-5">
        <div className="relative h-24 w-24 overflow-hidden rounded-lg">
          <Image
            src={item.meal.image}
            alt={item.meal.name}
            fill
            className="object-cover"
          />
        </div>

        <div className="flex flex-1 items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">
              {item.meal.name}
            </h3>

            <p className="mt-2 text-muted-foreground">
              Qty : {item.quantity}
            </p>

            <p className="text-muted-foreground">
              Unit Price : ৳{item.unitPrice}
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm text-muted-foreground">
              Subtotal
            </p>

            <p className="text-xl font-bold">
              ৳{item.quantity * item.unitPrice}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
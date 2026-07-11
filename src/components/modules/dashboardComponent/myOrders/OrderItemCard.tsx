import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ReviewModal } from "../review/ReviewModal";
import { OrderStatus } from "@/types/order.types";

interface Props {
  item: any,
  status:string
}

export default function OrderItemCard({ item,status }: Props) {
  // console.log(item)
  return (
    <Card>
      <CardContent className="flex gap-5 p-5">
        <div className="relative h-24 w-24 overflow-hidden rounded-lg">
         
            <Image fill src={item.meal.image || "/placeholder.jpg"} alt={item.meal.name}  />
         
        </div>

        <div className="flex flex-1 items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold">{item.meal.name}</h3>

            <p className="mt-2 text-muted-foreground">Qty : {item.quantity}</p>

            <p className="text-muted-foreground">
              Unit Price : ${item.unitPrice}
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm text-muted-foreground">Subtotal</p>

            <p className="text-xl font-bold">
              ${item.quantity * item.unitPrice}
            </p>
          </div>
          {
            status===OrderStatus.DELIVERED && (
              <ReviewModal mealId={item.meal.id} />

            )
          }
        </div>
      </CardContent>
    </Card>
  );
}

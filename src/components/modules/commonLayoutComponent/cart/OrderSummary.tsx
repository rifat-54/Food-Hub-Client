import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface CartItemType {
  mealId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

interface OrderSummaryProps {
  items: CartItemType[];
}

export default function OrderSummary({ items }: OrderSummaryProps) {
  const subtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );

  const deliveryFee = 2;
  const tax =Number((subtotal * 0.05).toFixed(2));
  const total = Number(subtotal + deliveryFee + tax).toFixed(2);

  return (
    <Card className="sticky top-24 h-fit">
      <CardContent className="space-y-5 p-6">
        <h2 className="text-2xl font-bold">Order Summary</h2>

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>${subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span>${deliveryFee}</span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>
          <span>${tax}</span>
        </div>

        <hr />

        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>${total}</span>
        </div>

        <Link href={"/dashboard/checkout"}>
          <Button className="h-12 w-full">Proceed to Checkout</Button>
        </Link>
      </CardContent>
    </Card>
  );
}

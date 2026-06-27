"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cart-store";

export default function OrderSummary() {
  const cart = useCartStore((state) => state.cart);

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const deliveryFee = 60;
  const tax = Math.round(subtotal * 0.05);
  const total = subtotal + deliveryFee + tax;

  const totalItems = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  return (
    <Card className="sticky top-24">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>

      <CardContent className="space-y-5">
        <div className="flex justify-between">
          <span>Items</span>
          <span>{totalItems}</span>
        </div>

        <div className="flex justify-between">
          <span>Subtotal</span>
          <span>৳{subtotal}</span>
        </div>

        <div className="flex justify-between">
          <span>Delivery Fee</span>
          <span>৳{deliveryFee}</span>
        </div>

        <div className="flex justify-between">
          <span>Tax</span>
          <span>৳{tax}</span>
        </div>

        <hr />

        <div className="flex justify-between text-lg font-bold">
          <span>Total</span>
          <span>৳{total}</span>
        </div>

        <div className="rounded-lg bg-muted p-4">
          <p className="font-medium">
            Estimated Delivery
          </p>

          <p className="text-sm text-muted-foreground">
            30 - 45 Minutes
          </p>
        </div>

        <Button type="submit" className="w-full h-11">
          Confirm Order
        </Button>
      </CardContent>
    </Card>
  );
}
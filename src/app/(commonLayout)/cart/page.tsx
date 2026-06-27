"use client";

import CartList from "@/components/modules/commonLayoutComponent/cart/CartList";
import EmptyCart from "@/components/modules/commonLayoutComponent/cart/EmptyCart";
import OrderSummary from "@/components/modules/commonLayoutComponent/cart/OrderSummary";
import { useCartStore } from "@/store/cart-store";


export default function CartPage() {
  const cart = useCartStore((state) => state.cart);

  if (!cart.length) {
    return <EmptyCart />;
  }

  return (
    <section className="container py-10">
      <div className="grid gap-8 lg:grid-cols-3">
        <CartList items={cart} />
        <OrderSummary items={cart} />
      </div>
    </section>
  );
}
"use client";

import CheckoutForm from "@/components/modules/dashboardComponent/checkout/CheckoutForm";



export default function CheckoutPage() {
  return (
    <section className="container py-10">
      <h1 className="mb-8 text-3xl font-bold">
        Checkout
      </h1>

      <CheckoutForm />
    </section>
  );
}
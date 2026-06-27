import DeliveryAddress from "./DeliveryAddress";
import OrderSummary from "./OrderSummary";


export default function CheckoutForm() {
  return (
    <div className="grid gap-8 lg:grid-cols-3">
      <div className="lg:col-span-2">
        <DeliveryAddress />
      </div>

      <OrderSummary />
    </div>
  );
}
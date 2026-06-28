import OrderCard from "./OrderCard";


interface OrderListProps {
  orders: any[];
}

export default function OrderList({ orders }: OrderListProps) {
  return (
    <div className="space-y-6">
      {orders.map((order) => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  );
}
import OrderCard from "./OrderCard";

interface OrderListProps {
  orders: any[];
  reload:()=>Promise<void>
}

export default function OrderList({ orders,reload }: OrderListProps,) {
  return (
    <>
      <div className="mb-10">
        <h1 className="text-3xl font-bold">My Orders</h1>

        <p className="text-muted-foreground mt-1">
          Manage and track all orders in one place.
        </p>
      </div>
      <div className="space-y-6">
        {orders?.map((order) => (
          <OrderCard key={order.id} order={order} reload={reload}/>
        ))}
      </div>
    </>
  );
}

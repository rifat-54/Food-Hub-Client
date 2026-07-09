import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle2, Clock, ShoppingBag } from "lucide-react";

type Order = {
  status: string;
};

export default function OrderOverview({ data }: any) {
  const totalOrders = data?.length ?? 0;

  const pendingOrders =
    data?.filter((order:Order) => order.status === "CANCELLED").length ?? 0;

  const completedOrders =
    data?.filter((order:Order) => order.status === "DELIVERED").length ?? 0;

  const cards = [
    {
      title: "Total Orders",
      value: totalOrders,
      icon: ShoppingBag,
      color: "text-primary",
    },
    {
      title: "Cancelled Orders",
      value: pendingOrders,
      icon: Clock,
      color: "text-yellow-500",
    },
    {
      title: "Completed Orders",
      value: completedOrders,
      icon: CheckCircle2,
      color: "text-green-500",
    },
  ];

  return (
    <>
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-bold">All Orders</h1>

        <p className="mt-1 text-muted-foreground">
          Manage and track all customer orders.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {cards.map((card) => {
          const Icon = card.icon;

          return (
            <Card
              key={card.title}
              className="transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <CardContent className="flex items-center justify-between p-6">
                <div>
                  <p className="text-sm text-muted-foreground">{card.title}</p>

                  <h2 className="mt-2 text-3xl font-bold">{card.value}</h2>
                </div>

                <div className="rounded-full bg-primary/10 p-4">
                  <Icon className={`h-8 w-8 ${card.color}`} />
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </>
  );
}

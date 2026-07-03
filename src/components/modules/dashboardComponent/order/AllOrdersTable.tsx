"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { OrderStatus } from "@/types/order.types";

type Order = {
  id: string;
  createdAt: string;
  status: OrderStatus;
  totalAmount: number;
  deliveryAddress: string;
  user: {
    name: string;
  };
  _count: {
    orderItems: number;
  };
};

interface OrderTableProps {
  orders: Order[];
}

const statusVariant = {
  PENDING: "bg-yellow-100 text-yellow-700 border-yellow-300",
  PROCESSING: "bg-blue-100 text-blue-700 border-blue-300",
  SHIPPED: "bg-indigo-100 text-indigo-700 border-indigo-300",
  DELIVERED: "bg-green-100 text-green-700 border-green-300",
  CANCELLED: "bg-red-100 text-red-700 border-red-300",
};

export function AllOrdersTable({ orders }: OrderTableProps) {
  return (
    <>
      <Card className="mt-5">
        <CardHeader>
          {/* <CardTitle>Total Orders ({orders.length})</CardTitle> */}
        </CardHeader>

        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>User</TableHead>
                <TableHead>Total Item</TableHead>
                <TableHead>Total Amount</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Date</TableHead>
              </TableRow>
            </TableHeader>

            <TableBody>
              {orders.map((order) => (
                <TableRow
                  key={order.id}
                  className="odd:bg-background even:bg-muted/40 hover:bg-primary/5 transition-colors"
                >
                  <TableCell>{order.user.name}</TableCell>

                  <TableCell>{order._count.orderItems}</TableCell>
                  <TableCell>{order.totalAmount}</TableCell>

                  <TableCell>
                    <Badge
                      className={
                        statusVariant[
                          order.status as keyof typeof statusVariant
                        ]
                      }
                      variant="secondary"
                    >
                      {order.status}
                    </Badge>
                  </TableCell>

                  <TableCell>
                    {new Date(order.createdAt).toLocaleDateString("en-GB")}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}

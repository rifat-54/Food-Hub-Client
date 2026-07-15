"use client";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { orderServices } from "@/services/order.service";
import { OrderStatus } from "@/types/order.types";
import Link from "next/link";

import { toast } from "sonner";

export default function OrderTable({ orders,reload }: { orders: any,reload:()=>Promise<void> }) {
    
  const handleOrderStatus = async (id: string, value: OrderStatus) => {
     
    try {
      const result = await orderServices.updateOrderStatus(id, { status: value });
      console.log("result ->", result);
      if (result.data) {
        toast.success("Successfully Updated Order Status");
      }
      reload()
    } catch (error) {
        toast.error(error instanceof Error?error.message:"Something Went Wrong!")
    }
  };


  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Order ID</TableHead>
          <TableHead>Customer</TableHead>
          <TableHead>Total Item</TableHead>
          <TableHead>Total</TableHead>
          <TableHead>Status</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Action</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {orders.map((order: any) => (
          <TableRow
            key={order.id}
            className="odd:bg-background even:bg-muted/40 hover:bg-muted"
          >
            <TableCell className="font-medium">
              #{order.id.slice(0, 8)}
            </TableCell>

            <TableCell>{order.user.name}</TableCell>

            <TableCell>{order?._count?.orderItems}</TableCell>
            <TableCell>${order.totalAmount}</TableCell>

            <TableCell>
              <Select
                defaultValue={order.status}
                onValueChange={(value: OrderStatus) =>
                  handleOrderStatus(order.id, value)
                }
                disabled={order.status===OrderStatus.CANCELLED || order.status===OrderStatus.DELIVERED}
              >
                <SelectTrigger className="w-[150px]">
                  <SelectValue />
                </SelectTrigger>

                <SelectContent>
                  <SelectItem value={OrderStatus.PLACED}>Placed</SelectItem>
                  <SelectItem value={OrderStatus.PREPARING}>Preparing</SelectItem>
                  <SelectItem value={OrderStatus.READY}>Ready</SelectItem>
                  <SelectItem value={OrderStatus.DELIVERED}>Delivered</SelectItem>
                  <SelectItem value={OrderStatus.CANCELLED}>Cancelled</SelectItem>
                </SelectContent>
              </Select>
            </TableCell>

            <TableCell>
              {new Date(order.createdAt).toLocaleDateString()}
            </TableCell>

            <TableCell className="text-right">
              <Button asChild size="sm" variant="outline">
                <Link href={`/provider-dashboard/orders/${order.id}`}>
                  Details
                </Link>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

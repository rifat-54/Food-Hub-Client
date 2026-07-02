import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'
import Link from 'next/link'
import React from 'react'

export default function OrderTable({orders}:{orders:any}) {
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
    {orders.map((order:any) => (
      <TableRow key={order.id} 
      className="odd:bg-background even:bg-muted/40 hover:bg-muted"
      >
        <TableCell className="font-medium">
          #{order.id.slice(0, 8)}
        </TableCell>

        <TableCell>{order.user.name}</TableCell>

        <TableCell>${order?._count?.orderItems}</TableCell>
        <TableCell>${order.totalAmount}</TableCell>


        <TableCell>
          <Badge
            variant={
              order.status === "DELIVERED"
                ? "default"
                : order.status === "CANCELLED"
                ? "destructive"
                : "secondary"
            }
          >
            {order.status}
          </Badge>
        </TableCell>

        <TableCell>
          {new Date(order.createdAt).toLocaleDateString()}
        </TableCell>

        <TableCell className="text-right">
          <Button asChild size="sm" variant="outline">
            <Link href={`/provider/orders/${order.id}`}>
              Details
            </Link>
          </Button>
        </TableCell>
      </TableRow>
    ))}
  </TableBody>
</Table>
  )
}

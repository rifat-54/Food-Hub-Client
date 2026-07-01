import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Image from "next/image";

export default function MealsTable({ meals }: { meals: any }) {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Image</TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Cuisine</TableHead>
          <TableHead>DietaryType</TableHead>
          <TableHead className="text-center">Edit</TableHead>
          <TableHead className="text-center">Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {meals.map((item: any) => (
          <TableRow key={item.id}>
            <TableCell>
              <div className="relative h-16 w-16 overflow-hidden rounded-lg">
                <Image
                  fill
                  className="object-cover"
                  alt={item.name}
                  src={item?.image}
                />
              </div>
            </TableCell>
            <TableCell className="font-medium">{item.name}</TableCell>
            <TableCell> ৳ {item.price}</TableCell>
            <TableCell>
              <Badge>{item.cuisine}</Badge>
            </TableCell>
            <TableCell>
              <Badge variant="secondary">{item.dietaryType}</Badge>
            </TableCell>
            <TableCell className="text-center">
              <Button className="bg-blue-400">Edit</Button>
            </TableCell>
            <TableCell className="text-center text-red-500">
              <Button variant={"outline"}>Delete</Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}

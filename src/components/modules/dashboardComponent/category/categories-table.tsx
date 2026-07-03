"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { Badge } from "@/components/ui/badge";

type Category = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

interface CategoriesTableProps {
  categories: Category[];
}

export function CategoriesTable({
  categories,
}: CategoriesTableProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          Categories ({categories.length})
        </CardTitle>
      </CardHeader>

      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Created</TableHead>
              <TableHead>Updated</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {categories.map((category) => (
              <TableRow
                key={category.id}
                className="odd:bg-background even:bg-muted/30 hover:bg-muted/60 transition-colors"
              >
                <TableCell>
                  <Badge variant="secondary">
                    {category.name}
                  </Badge>
                </TableCell>

                <TableCell>
                  {new Date(category.createdAt).toLocaleDateString(
                    "en-GB"
                  )}
                </TableCell>

                <TableCell>
                  {new Date(category.updatedAt).toLocaleDateString(
                    "en-GB"
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
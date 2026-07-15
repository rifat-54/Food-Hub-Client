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
import { Button } from "@/components/ui/button";

import { toast } from "sonner";
import { categoryServices } from "@/services/category.service";

type Category = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

interface CategoriesTableProps {
  categories: Category[];
  reload:()=>Promise<void>
}

export function CategoriesTable({
  categories,
  reload
}: CategoriesTableProps) {


    const handleDeleteCategory=async(id:string)=>{
        try {
        const { data } = await categoryServices.deleteCategory(id);
        // console.log(data);
        if(data){
            toast.success("Successfully deleted!")
        }
       reload()
       
      } catch (error) {
        toast.error(error instanceof Error?error.message:"Something went wrong")
      }
    }

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
              <TableHead>Action</TableHead>
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
                  <Button onClick={()=>handleDeleteCategory(category.id)} variant={"outline"} className="text-red-500">Delete</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
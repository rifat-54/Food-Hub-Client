import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Plus } from "lucide-react";

export default function ProviderMealsPageCard({ meals }: { meals: any }) {
  return (
    <Card className="shadow-sm">
      <CardHeader className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <CardTitle className="text-2xl font-bold">All Meals</CardTitle>

          <CardDescription>Manage all your meals from here.</CardDescription>
        </div>

        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="px-3 py-1 text-md">
            Total: {meals.length}
          </Badge>

          <Button>
            <Plus className="mr-2 h-4 w-4" />
            Add Meal
          </Button>
        </div>
      </CardHeader>
    </Card>
  );
}

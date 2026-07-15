import { Button } from "@/components/ui/button";
import { Card, CardHeader } from "@/components/ui/card";

import { Plus } from "lucide-react";
import Link from "next/link";

export default  function ProviderMealsPageCard({ data }: { data: any }) {
  return (
    <Card>
      <CardHeader className="space-y-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div>
            <h2 className="text-3xl font-bold">{data.restaurantName}</h2>

            <p className="mt-1 text-muted-foreground">{data.user.name}</p>

            <p className="mt-2 text-sm text-muted-foreground">{data.address}</p>

            <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
              {data.description}
            </p>
          </div>
          <Link href={"/provider-dashboard/addmeal"}>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Add Meal
            </Button>
          </Link>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">Total Meals</p>

            <h3 className="text-3xl font-bold">{data.meals.length}</h3>
          </div>

          <div className="rounded-lg border p-4">
            <p className="text-sm text-muted-foreground">Restaurant Status</p>

            <h3 className="text-lg font-semibold text-green-600">Active</h3>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

"use client";

import { FolderOpen, CalendarDays, Plus, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { AddCategoryModal } from "./AddCategoryModal";

type Category = {
  id: string;
  name: string;
  createdAt: string;
  updatedAt: string;
};

interface CategoriesHeroProps {
  categories: Category[];
}

export function CategoriesHero({
  categories,
}: CategoriesHeroProps) {
  const totalCategories = categories.length;

  const latestCategory =
    [...categories].sort(
      (a, b) =>
        new Date(b.createdAt).getTime() -
        new Date(a.createdAt).getTime()
    )[0];

  return (
    <div className="space-y-6">
      {/* Header */}

      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-3xl font-bold">
            Categories
          </h1>

          <p className="text-muted-foreground mt-1">
            Manage all meal categories in your application.
          </p>
        </div>

        <Button>
          <Plus className="mr-2 h-4 w-4" />
          {/* Add Category */}
        <AddCategoryModal/>
        </Button>
      </div>

      {/* Cards */}

      <div className="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-muted-foreground">
                Total Categories
              </p>

              <h2 className="mt-2 text-3xl font-bold">
                {totalCategories}
              </h2>
            </div>

            <FolderOpen className="h-10 w-10 text-primary" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-muted-foreground">
                Latest Category
              </p>

              <h2 className="mt-2 text-2xl font-semibold">
                {latestCategory?.name}
              </h2>
            </div>

            <Sparkles className="h-10 w-10 text-yellow-500" />
          </CardContent>
        </Card>

        <Card>
          <CardContent className="flex items-center justify-between p-6">
            <div>
              <p className="text-sm text-muted-foreground">
                Last Updated
              </p>

              <h2 className="mt-2 text-xl font-semibold">
                {latestCategory
                  ? new Date(
                      latestCategory.updatedAt
                    ).toLocaleDateString("en-GB")
                  : "-"}
              </h2>
            </div>

            <CalendarDays className="h-10 w-10 text-blue-500" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
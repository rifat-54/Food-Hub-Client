"use client";

import { Controller, useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { toast } from "sonner";
import { mealServices } from "@/services/meals.service";

type MealForm = {
  name: string;
  description: string;
  price: number;
  image: string;
  categoryId: string;
  cuisine: string;
  dietaryType: string;
};

const cuisines = [
  "BANGLADESHI",
  "INDIAN",
  "CHINESE",
  "ITALIAN",
  "THAI",
  "JAPANESE",
];

const dietaryTypes = [
  "VEGETARIAN",
  "VEGAN",
  "NON_VEGETARIAN",
  "LOW_CARB",
  "HIGH_PROTEIN",
];

type Category = {
  id: string;
  name: string;
};

type CategoryProps = {
  categories: Category[];
};

export default function AddMealsCard({ categories }: CategoryProps) {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useForm<MealForm>();

  const onSubmit = async (data: MealForm) => {
    // console.log(data);

    try {
      const result = await mealServices.createMeal(data);
      // console.log(result);
      if (result.data) {
        toast.success("Successfylly Added");
        reset();
      }
    } catch (error) {
      toast.error(
        error instanceof Error ? error.message : "Something went wrong",
      );
    }
  };

  return (
    <Card className="mx-auto max-w-5xl">
      <CardHeader>
        <CardTitle className="text-3xl">Add New Meal</CardTitle>

        <CardDescription>
           in the information below to create a new meal.
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          {/* Meal Information */}

          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Meal Information</h3>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <Label>Meal Name</Label>

                <Input
                  placeholder="Chicken Burger"
                  {...register("name", { required: "Meal name is required" })}
                />
                {errors.name && (
                  <p className="text-red-500">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <Label>Price</Label>

                <Input
                  type="number"
                  placeholder="250"
                  {...register("price", {
                    valueAsNumber: true,
                    required: "Price is required",
                  })}
                />
                {errors.price && (
                  <p className="text-red-500">{errors.price.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label>Description</Label>

              <Textarea
                rows={5}
                placeholder="Write meal description..."
                {...register("description", {
                  required: "Description is required",
                })}
              />
              {errors.description && (
                <p className="text-red-500">{errors.description.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label>Image URL</Label>

              <Input
                placeholder="https://..."
                {...register("image", {
                  required: "Image is required",
                  pattern: {
                    value: /^https?:\/\/.+/,
                    message: "Please enter a valid URL",
                  },
                })}
              />
                   {errors.image && (
                <p className="text-red-500">{errors.image.message}</p>
              )}
            </div>
          </div>

          {/* Classification */}

          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Meal Classification</h3>

            <div className="grid gap-6 md:grid-cols-3">
              {/* Category */}

              <div className="space-y-2">
                <Label>Category</Label>
                <Controller
                  name="categoryId"
                  defaultValue=""
                  control={control}
                  rules={{
                    required: "Category is required",
                  }}
                  render={({ field }) => {
                    // console.log(field);
                    return (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select category" />
                        </SelectTrigger>
                        <SelectContent>
                          {categories?.map((category) => (
                            <SelectItem key={category.id} value={category.id}>
                              {category.name}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    );
                  }}
                />

                {errors.categoryId && (
                  <p className="text-sm text-destructive">
                    {errors.categoryId.message}
                  </p>
                )}
              </div>

              {/* Cuisine */}

              <div className="space-y-2">
                <Label>Cuisine</Label>
                <Controller
                  name="cuisine"
                  defaultValue=""
                  control={control}
                  rules={{
                    required: "Cuisine is required",
                  }}
                  render={({ field }) => {
                    // console.log(field);
                    return (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select cuisine" />
                        </SelectTrigger>

                        <SelectContent>
                          {cuisines.map((cuisine) => (
                            <SelectItem key={cuisine} value={cuisine}>
                              {cuisine}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    );
                  }}
                />

                {errors.cuisine && (
                  <p className="text-sm text-destructive">
                    {errors.cuisine.message}
                  </p>
                )}
              </div>

              {/* Dietary */}

              <div className="space-y-2">
                <Label>Dietary Type</Label>
                <Controller
                  name="dietaryType"
                  defaultValue=""
                  control={control}
                  rules={{
                    required: "Dietary Type is required",
                  }}
                  render={({ field }) => {
                    // console.log(field);
                    return (
                      <Select
                        onValueChange={field.onChange}
                        value={field.value}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select dietary type" />
                        </SelectTrigger>

                        <SelectContent>
                          {dietaryTypes.map((type) => (
                            <SelectItem key={type} value={type}>
                              {type}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    );
                  }}
                />

                {errors.dietaryType && (
                  <p className="text-sm text-destructive">
                    {errors.dietaryType.message}
                  </p>
                )}
              </div>
            </div>
          </div>

          <div className="flex justify-end gap-3">
            <Button onClick={() => reset()} type="button" variant="outline">
              Cancel
            </Button>

            <Button type="submit">Add Meal</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}

"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { CategoryType } from "@/types/category.types";
import { useRouter, useSearchParams } from "next/navigation";

import React, { useEffect, useState } from "react";

export default function SearchBox({
  categories,
}: {
  categories: CategoryType[];
}) {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [cuisine, setCuisine] = useState("all");
  const [dietary, setDietary] = useState("all");

  const router = useRouter();
  const searchParams = useSearchParams();
  useEffect(() => {
    handleSearch();
  }, [category, cuisine, dietary]);

  const handleSearch = () => {
    const params = new URLSearchParams(searchParams.toString());

    if (search) {
      params.set("search", search);
    } else {
      params.delete("search");
    }

    if (category !== "all") {
      params.set("category", category);
    } else {
      params.delete("category");
    }

    if (cuisine !== "all") {
      params.set("cuisine", cuisine);
    } else {
      params.delete("cuisine");
    }

    if (dietary !== "all") {
      params.set("dietary", dietary);
    } else {
      params.delete("dietary");
    }

    router.push(`/meals?${params.toString()}`);
  };

  return (
    <div className="space-y-6 max-w-5xl mx-auto mb-20">
      <section className="mx-auto w-full text-center">
        <h1 className="text-4xl font-bold tracking-tight">Discover Meals</h1>

        <p className="mt-2 text-muted-foreground">
          Browse delicious meals from our restaurant partners.
        </p>
      </section>
      <div className="flex flex-col gap-4 md:flex-row">
        <Input
          placeholder="Search meals..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <Button onClick={handleSearch}>Search</Button>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <Select value={category} onValueChange={setCategory}>
          <SelectTrigger>
            <SelectValue placeholder="Category" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>

            {categories?.map((category) => (
              <SelectItem key={category.id} value={category.id}>
                {category.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <Select value={cuisine} onValueChange={setCuisine}>
          <SelectTrigger>
            <SelectValue placeholder="Cuisine" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All Cuisine</SelectItem>
            <SelectItem value="Italian">Italian</SelectItem>
            <SelectItem value="Chinese">Chinese</SelectItem>
            <SelectItem value="Indian">Indian</SelectItem>
            <SelectItem value="Mexican">Mexican</SelectItem>
          </SelectContent>
        </Select>

        <Select value={dietary} onValueChange={setDietary}>
          <SelectTrigger>
            <SelectValue placeholder="Dietary" />
          </SelectTrigger>

          <SelectContent>
            <SelectItem value="all">All Dietary</SelectItem>
            <SelectItem value="Vegetarian">Vegetarian</SelectItem>
            <SelectItem value="Vegan">Vegan</SelectItem>
            <SelectItem value="Halal">Halal</SelectItem>
            <SelectItem value="Gluten Free">Gluten Free</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { CategoriesHero } from "@/components/modules/dashboardComponent/category/categories-hero";
import { CategoriesTable } from "@/components/modules/dashboardComponent/category/categories-table";
import { categoryServices } from "@/services/category.service";

export default function CategoryPage() {
  const [categories, setCategories] = useState<any>(null);

  const loadCategories = async () => {
    const response = await categoryServices.getAllCategory();

    if (response.data) {
      setCategories(response.data);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  if (!categories) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <CategoriesHero categories={categories} reload={loadCategories} />
      <CategoriesTable
        categories={categories}
        reload={loadCategories}
      />
    </div>
  );
}
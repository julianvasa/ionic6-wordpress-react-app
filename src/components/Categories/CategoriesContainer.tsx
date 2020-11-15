import React, { useEffect, useState } from "react";
import { Categories } from "./Categories";

export default function CategoriesContainer() {
  const [categories, setCategories] = useState<any[]>([]);

  useEffect(() => {
    async function loadCategories() {
      const response = await fetch(
        "https://blog.playstation.com/wp-json/wp/v2/categories?per_page=40"
      );
      if (!response.ok) {
        // Not a 200 response! return...
        return;
      }
      // Get the next 10 posts
      const categories = await response.json();
      // Modify state variable posts
      setCategories(categories);
    }
    // call loadCategories when component CategoriesContainer renders
    loadCategories();
  }, []);

  return (
    <Categories
      listOfCategories={categories}
    />
  );
}

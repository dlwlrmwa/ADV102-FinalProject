import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";

interface CategoryFiltersProps {
  onCategorySelect?: (category: string) => void;
  categories?: string[];
}

const CategoryFilters = ({
  onCategorySelect = () => {},
  categories = [
    "All",
    "Vegetarian",
    "Italian",
    "Asian",
    "Quick Meals",
    "Desserts",
    "Breakfast",
    "Lunch",
    "Dinner",
    "Healthy",
    "Gluten-Free",
    "Vegan",
  ],
}: CategoryFiltersProps) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
    onCategorySelect(category);
  };

  return (
    <div className="w-full bg-background py-4 border-b">
      <div className="container mx-auto px-4">
        <h2 className="text-lg font-medium mb-3">Browse by Category</h2>
        <ScrollArea className="w-full whitespace-nowrap pb-2">
          <div className="flex space-x-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => handleCategoryClick(category)}
                className="rounded-full"
              >
                {category}
                {selectedCategory === category && (
                  <Badge
                    variant="secondary"
                    className="ml-2 bg-background text-foreground"
                  >
                    {category === "All" ? categories.length - 1 : ""}
                  </Badge>
                )}
              </Button>
            ))}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};

export default CategoryFilters;

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ChefHat } from "lucide-react";

interface Recipe {
  id: string;
  title: string;
  image: string;
  cookingTime: number;
  difficulty: "Easy" | "Medium" | "Hard";
  category: string;
}

interface RecipeGridProps {
  recipes?: Recipe[];
  selectedCategory?: string | null;
}

const RecipeGrid = ({
  recipes = defaultRecipes,
  selectedCategory = null,
}: RecipeGridProps) => {
  // Filter recipes by category if a category is selected
  const filteredRecipes = selectedCategory
    ? recipes.filter((recipe) => recipe.category === selectedCategory)
    : recipes;

  return (
    <div className="bg-background py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">
          Featured Recipes
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      </div>
    </div>
  );
};

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const difficultyColor = {
    Easy: "bg-green-100 text-green-800",
    Medium: "bg-yellow-100 text-yellow-800",
    Hard: "bg-red-100 text-red-800",
  }[recipe.difficulty];

  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow duration-300">
      <div className="relative h-48 overflow-hidden">
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <Badge className="absolute top-2 right-2">{recipe.category}</Badge>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{recipe.title}</CardTitle>
      </CardHeader>
      <CardContent className="pb-2">
        <CardDescription>
          Delicious recipe that's perfect for any occasion.
        </CardDescription>
      </CardContent>
      <CardFooter className="pt-2 mt-auto flex justify-between items-center">
        <div className="flex items-center text-sm text-muted-foreground">
          <Clock className="mr-1 h-4 w-4" />
          <span>{recipe.cookingTime} mins</span>
        </div>
        <div className="flex items-center">
          <ChefHat className="mr-1 h-4 w-4" />
          <span className={`text-xs px-2 py-1 rounded-full ${difficultyColor}`}>
            {recipe.difficulty}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

// Default recipes data for development
const defaultRecipes: Recipe[] = [
  {
    id: "1",
    title: "Spaghetti Carbonara",
    image:
      "https://images.unsplash.com/photo-1546549032-9571cd6b27df?w=800&q=80",
    cookingTime: 25,
    difficulty: "Medium",
    category: "Italian",
  },
  {
    id: "2",
    title: "Vegetable Stir Fry",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&q=80",
    cookingTime: 15,
    difficulty: "Easy",
    category: "Vegetarian",
  },
  {
    id: "3",
    title: "Beef Tacos",
    image:
      "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&q=80",
    cookingTime: 30,
    difficulty: "Easy",
    category: "Mexican",
  },
  {
    id: "4",
    title: "Chocolate Soufflé",
    image:
      "https://images.unsplash.com/photo-1579306194872-64d3b7bac4c2?w=800&q=80",
    cookingTime: 45,
    difficulty: "Hard",
    category: "Dessert",
  },
  {
    id: "5",
    title: "Grilled Salmon",
    image:
      "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800&q=80",
    cookingTime: 20,
    difficulty: "Medium",
    category: "Seafood",
  },
  {
    id: "6",
    title: "Mushroom Risotto",
    image:
      "https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=800&q=80",
    cookingTime: 35,
    difficulty: "Medium",
    category: "Italian",
  },
  {
    id: "7",
    title: "Avocado Toast",
    image:
      "https://images.unsplash.com/photo-1588137378633-dea1336ce1e2?w=800&q=80",
    cookingTime: 10,
    difficulty: "Easy",
    category: "Quick Meals",
  },
  {
    id: "8",
    title: "Chicken Curry",
    image:
      "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&q=80",
    cookingTime: 40,
    difficulty: "Medium",
    category: "Indian",
  },
];

export default RecipeGrid;

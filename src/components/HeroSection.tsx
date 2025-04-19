import React, { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

interface HeroSectionProps {
  onSearch?: (searchTerm: string) => void;
  backgroundImage?: string;
  title?: string;
  subtitle?: string;
}

const HeroSection = ({
  onSearch = () => {},
  backgroundImage = "https://images.unsplash.com/photo-1543339308-43e59d6b73a6?w=1200&q=80",
  title = "Find Delicious Recipes",
  subtitle = "Discover thousands of recipes for every occasion and taste preference",
}: HeroSectionProps) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch(searchTerm);
  };

  return (
    <div className="relative w-full h-[600px] bg-background">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <h1 className="text-4xl font-bold text-white md:text-5xl lg:text-6xl mb-4">
          {title}
        </h1>
        <p className="max-w-2xl text-lg text-white/90 mb-8">{subtitle}</p>

        {/* Search Form */}
        <form
          onSubmit={handleSearch}
          className="w-full max-w-xl flex flex-col sm:flex-row gap-2"
        >
          <div className="relative flex-grow">
            <Input
              type="text"
              placeholder="Search recipes or ingredients..."
              className="w-full h-12 pl-10 pr-4 text-base bg-white/95 border-0 rounded-lg focus:ring-2 focus:ring-primary"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 h-5 w-5" />
          </div>
          <Button type="submit" className="h-12 px-6 text-base font-medium">
            Search
          </Button>
        </form>

        {/* Optional Tags */}
        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <span className="px-3 py-1 text-sm text-white bg-white/20 rounded-full">
            Quick Meals
          </span>
          <span className="px-3 py-1 text-sm text-white bg-white/20 rounded-full">
            Vegetarian
          </span>
          <span className="px-3 py-1 text-sm text-white bg-white/20 rounded-full">
            Desserts
          </span>
          <span className="px-3 py-1 text-sm text-white bg-white/20 rounded-full">
            Healthy
          </span>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;

import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import CategoryFilters from "./CategoryFilters";
import RecipeGrid from "./RecipeGrid";
import Footer from "./Footer"; // Import Footer
import { Button } from "./ui/button";
import { ArrowUpIcon } from "lucide-react";

const Home = () => {
  const [scrolled, setScrolled] = React.useState(false);
  const navigate = useNavigate();

  React.useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main>
        <HeroSection />

        <section className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-center mb-6">
              Discover Recipes by Category
            </h2>
            <CategoryFilters />
          </div>

          <div className="mb-12">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-3xl font-bold">Featured Recipes</h2>
              <Button variant="outline">View All</Button>
            </div>
            <RecipeGrid />
          </div>

          <div className="bg-muted rounded-xl p-8 mb-12">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl font-bold mb-4">
                Join Our Cooking Community
              </h2>
              <p className="text-muted-foreground mb-6">
                Sign up to save your favorite recipes, create meal plans, and
                get personalized recipe recommendations based on your
                preferences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={() => navigate("/about")}>
                  Sign Up Now
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer /> {/* Add the Footer component */}

      {scrolled && (
        <Button
          className="fixed bottom-6 right-6 rounded-full p-3 shadow-lg"
          size="icon"
          onClick={scrollToTop}
        >
          <ArrowUpIcon className="h-5 w-5" />
        </Button>
      )}
    </div>
  );
};

export default Home;


import { Categories } from "@/components/modules/commonLayoutComponent/home/Category";
import { FeaturedMeals } from "@/components/modules/commonLayoutComponent/home/FeaturedMeals";
import { Hero } from "@/components/modules/commonLayoutComponent/home/Hero";
import { PopularRestaurants } from "@/components/modules/commonLayoutComponent/home/PopularRestaurants";
import { Reviews } from "@/components/modules/commonLayoutComponent/home/reviews";
import { WhyFoodHub } from "@/components/modules/commonLayoutComponent/home/WhyFoodHub";

import { mealServices } from "@/services/meals.service";


export default async function Home() {
   const meals = await mealServices.getMeals();
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Hero/>
      <Categories/>
        <FeaturedMeals meals={meals} />
        <WhyFoodHub/>
        <PopularRestaurants/>
        <Reviews/>
    </div>
  );
}

"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import MealsSearch from "./components/MealsSearch";
import Link from "next/link";
import Image from "next/image";

// export const metadata = {
//   title: "All meals",
//   description: "Meals Loading From DB api",
// };

export default function MealsClient() {
  const [meals, setMeals] = useState([]);

  const params = useSearchParams();
  const search = params.get("search") || "";

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const res = await fetch(
          `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`,
        );
        const data = await res.json();
        setMeals(data?.meals || []);
      } catch (error) {
        console.log(error);
      }
    };

    fetchMeals();
  }, [search]);

  return (
    <div>
      <MealsSearch />
      <div className="grid grid-cols-4 gap-4">
        {meals.map((meal) => (
          <div key={meal.idMeal}>
            <Image
              src={meal?.strMealThumb}
              width={640}
              height={641}
              alt={meal.strMeal}
            />
            <p>{meal.strMeal}</p>
            <p>{meal?.strInstructions}</p>
            <Link href={`/meals/${meal.idMeal}`}>Details</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

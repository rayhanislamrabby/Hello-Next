import Image from "next/image";

const fetchMealsSingle = async (id) => {
  try {
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`,
    );
    const data = await res.json();

    // ✅ always return array
    return data?.meals ?? [];
  } catch (error) {
    console.log(error);
    return [];
  }
};
export async function generateMetadata({ params }) {
  const { id } = await params;

  const meals = await fetchMealsSingle(id);
  const meal = meals[0];

  return {
    title: meal?.strMeal || "Meal",
    description: meal?.strInstructions || "Meal details",
  };
}

export default async function fetchSinglemealsPage({ params }) {
  const { id } = await params;

  const meals = await fetchMealsSingle(id);

  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {meals.map((meal) => (
          <div key={meal.idMeal}>
            

            <p>{meal.strMeal}</p>
            <p>{meal?.strInstructions}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

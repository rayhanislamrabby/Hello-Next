import React from "react";

export default async function ProductsPage() {
  const res = await fetch("http://localhost:3000/api/items");
  const data = await res.json();
console.log("API data:", data);
  return (
   <div></div>
  );
}
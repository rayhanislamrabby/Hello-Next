import React from "react";

export default async function ProductsPage() {
  const res = await fetch("http://localhost:3000/api/items",{

    cache: "force-cache"
  });
  const result = await res.json();
const data = result.data

  return (
   <div>

{data?.map((singleproducts) => {

return <li key={singleproducts._id}>{singleproducts.productsName}</li>


})}

   </div>
  );
}
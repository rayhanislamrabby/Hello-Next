export const dynamic = "force-dynamic";

export default async function ProductsPage() {


  const res = await fetch("http://localhost:3000/api/items");

  const result = await res.json();

  const data = result.data;

  console.log("dataaaaa", data);

  return (
    <div>
      {data?.map((product) => (
        <li key={product._id}>{product.productsName}</li>
      ))}
    </div>
  );
}

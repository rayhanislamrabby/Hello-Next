"use client";

import { useRouter } from "next/navigation";

export default function ProductsAddForm() {
  const router = useRouter();
  const { NEXT_PUBLIC_SERVER_ADDRESS } = process.env;
  const handelSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const productsName = form.productsName.value;

    const playload = { productsName };

    const res = await fetch("http://localhost:3000/api/items", {
      method: "POST",

      body: JSON.stringify(playload),

      headers: {
        "Content-type": "application/json",
      },
    });
    console.log("ENV:", process.env.NEXT_PUBLIC_SERVER_ADDRESS);

    const result = await res.json();

    console.log("data", result);
    form.reset();
    // alert("products add ")
    router.push("/products");
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input type="text" name="productsName" placeholder="products Name" />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

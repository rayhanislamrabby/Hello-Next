"use client";

export default function productsAddForm() {
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
    const result = await res.json();

    console.log("data", result);
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

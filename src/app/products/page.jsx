import dbConnect from "@/lib/dbConnect";

// export const dynamic = "force-dynamic";
export default async function ProductsPage() {



  // const { NEXT_PUBLIC_SERVER_ADDRESS } = process.env;

  // const res = await fetch(`${NEXT_PUBLIC_SERVER_ADDRESS}/api/items`, {
  //   cache: "force-cache",
  // });
  // const result = await res.json();
  // const data = result.data;
  // if (data.length > 3) {
  // }


const data = await dbConnect("practice_data").find({}).toArray()




  return (
    <div>
      {data?.map((singleproducts) => {
        return <li key={singleproducts._id}>{singleproducts.productsName}</li>;
      })}
    </div>
  );
}




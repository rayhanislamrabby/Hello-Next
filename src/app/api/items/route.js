import dbConnect, { collectionsNames } from "@/lib/dbConnect";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

export async function GET() {
  const data = await dbConnect(collectionsNames.PRACTICE_DATA)
    .find({})
    .toArray();

  return Response.json({ data });
}

export async function POST(req) {
  const postData = await req.json();

  const result = await dbConnect(collectionsNames.PRACTICE_DATA).insertOne(
    postData,
  );
  revalidatePath("/products");
  return Response.json({ result });
}

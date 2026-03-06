import dbConnect, { collectionsNames } from "@/lib/dbConnect";
import { ObjectId } from "mongodb";

export async function GET(req, { params }) {
  const resolvedParams = await params;

  const singleData = await dbConnect(collectionsNames.PRACTICE_DATA).findOne({
    _id: new ObjectId(resolvedParams.id),
  });

  console.log(resolvedParams);

  return Response.json({ singleData });
}

export async function DELETE(req, { params }) {
  const resolvedParams = await params;

  const singleData = await dbConnect(collectionsNames.PRACTICE_DATA).deleteOne({
    _id: new ObjectId(resolvedParams.id)},
   
    
);
  console.log(resolvedParams);

  return Response.json({ singleData });
}

export async function PATCH(req, { params }) {
  const resolvedParams = await params;
    const postData = await req.json();

  const singleData = await dbConnect("practice_data").updateOne({
    _id: new ObjectId(resolvedParams.id)},
    {$set: postData}
    
);

  
  console.log(resolvedParams);

  return Response.json({ singleData });
}

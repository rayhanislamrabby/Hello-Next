"use server";

import dbConnect, { collectionsNames } from "@/lib/dbConnect";

export const registerUser = async (payload) => {
  try {
    const result = await dbConnect(collectionsNames.TEST_USER).insertOne(payload);

    return {
      acknowledged: result.acknowledged,
      insertedId: result.insertedId.toString(),
    };
  } catch (error) {
    console.log("payload error", error);
    return null;
  }
};

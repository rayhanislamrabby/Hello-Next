import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
const session = await getServerSession(authOptions)

  return (
 <div>

<h1 className="text-4xl font-bold  text-blue-500">
      Tailwind Working
    </h1>
<p className="text-red-700 text-2xl">{JSON.stringify(session)} </p>

 </div>
  );
}

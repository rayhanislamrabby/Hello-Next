import Link from "next/link";

const getPost = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");

  const data = await res.json();

  return data;
};
export const metadata = {
  title: " ALL POST ",
  description: "NextJs Learningg",
};
export default async function Post() {
  const posts = await getPost();

  return (
    <div className=" grid gap-5 grid-cols-4">
      {posts.map((singlatePost) => {
        return (
         <Link href={`/post/${singlatePost.id}`} key={singlatePost.id}>
         
          <div key={singlatePost.id}>
            <p>{singlatePost.title}</p>
            <p>{singlatePost.body}</p>
          </div>
         
         </Link>
        );
      })}
    </div>
  );
}

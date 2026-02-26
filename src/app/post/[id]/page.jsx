export const getSinglePost = async (id) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );

  const data = await res.json();
  return data;
};

export default async function SingleData({ params }) {
  const p = await params;
  const singlaData = await getSinglePost(p.id);

  return (
    <div className="min-h-screen flex items-center justify-center  p-4">
      <div className="max-w-xl w-full rounded-2xl shadow-lg p-6 space-y-4 hover:shadow-xl transition">
        
        <span className="inline-block text-xs font-semibold bg-blue-100 text-blue-600 px-3 py-1 rounded-full">
          Post #{singlaData.id}
        </span>

        <h1 className="text-2xl font-bold  leading-snug">
          {singlaData.title}
        </h1>

        <p className=" leading-relaxed">
          {singlaData.body}
        </p>

   

      </div>
    </div>
  );
}
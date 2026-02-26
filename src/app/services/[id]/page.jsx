import React from "react";

export default async function Page({ params }) {
  const data = [
    {
      _id: "64f1a2b3c4d5e6f701234567",
      title: "Web Development",
      description: "We build fast and modern websites.",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      _id: "64f1a2b3c4d5e6f701234568",
      title: "UI/UX Design",
      description: "Clean and user-friendly interface design.",
      img: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    },
    {
      _id: "64f1a2b3c4d5e6f701234569",
      title: "SEO Optimization",
      description: "Improve your website ranking.",
      img: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1",
    },
  ];

  const resolvedParams = await params;
  const id = resolvedParams.id;

  const singleData = data.find((d) => d._id === id);

if(singleData){
 return (
    <div className="text-center">
      <h1>{singleData?.title}</h1>
      <p>{singleData?.description}</p>

      <div className="flex justify-center mt-6">
        <img
          src={singleData.img}
          alt={singleData.title}
          className="w-1/2 h-auto "
        />
      </div>
    </div>
  );



}
else{

return <>
<p>Not Found service </p>

</>

}
 
}

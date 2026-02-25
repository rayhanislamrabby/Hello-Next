import Link from "next/link";
import React from "react";

export default function ServicesPage() {
  const data = [
    {
      _id: "64f1a2b3c4d5e6f701234567",
      title: "Web Development",
      img: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    },
    {
      _id: "64f1a2b3c4d5e6f701234568",
      title: "UI/UX Design",
      img: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
    },
        {
      _id: "64f1a2b3c4d5e6f701234569",
      title: "SEO Optimization",
      description: "Improve your website ranking.",
      img: "https://images.unsplash.com/photo-1562577309-4932fdd64cd1",
    },
  ];

  return (
    <>
      <p className="font-bold text-3xl text-center mb-8">ServicesPage</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {data.map((item) => (
          <div
            key={item._id}
            className=" rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <Link href={`/services/${item._id}`}>
            {/* Content */}
          <div className="p-4">
            <p className="font-semibold text-lg">{item.title}</p>
          </div>
              <div className="w-full h-48 overflow-hidden">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

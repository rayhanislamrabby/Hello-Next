"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function AboutPage() {
  const router = useRouter();
  const isLoaggedIn = false;

  const handelNavigation = () => {
    if (isLoaggedIn) {
      router.push("/about/address");
    } else {
      router.push("/");
    }
  };

  return (
    <div>
      <h1 className="text-4xl text-purple-600"> This Is About </h1>
      <p>
      
        <Link href="/about/address">Address Page</Link>
      </p>
      <button type="button" onClick={handelNavigation}>
        Addres Page
      </button>
    </div>
  );
}

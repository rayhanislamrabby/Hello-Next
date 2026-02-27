"use client";

import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function MealsSearch() {
  const [search, setSearch] = useState("");
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const params = new URLSearchParams();

    if (search) {
      params.set("search", search);
    }

    const url = `${pathname}?${params.toString()}`;

    router.replace(url);
  }, [search, router, pathname]);

  return (
    <div>
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search meals..."
      />
    </div>
  );
}
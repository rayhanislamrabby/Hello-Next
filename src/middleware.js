import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {

  const token = await getToken({ req });

  const isAdminUser = token?.role === "admin";

  const isAddProductRoute =
    req.nextUrl.pathname.startsWith("/dashboard/products/add");


  if (!token && isAddProductRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token && !isAdminUser && isAddProductRoute) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/products/add/:path*"],
};
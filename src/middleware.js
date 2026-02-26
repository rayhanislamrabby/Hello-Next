import { NextResponse } from "next/server";

const dummyUserData = {
  role: "user",
  email: "text@admin.com",
};

export function middleware(request) {
  const isServicePage =
    request.nextUrl.pathname.startsWith("/services");

  const isAdmin = dummyUserData.role === "admin";

  if (isServicePage && !isAdmin) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/services/:path*"],
};
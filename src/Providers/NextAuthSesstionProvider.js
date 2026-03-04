"use client";

import { SessionProvider } from "next-auth/react";

export default function NextAuthSesstionProvider({ children }) {
  return <SessionProvider>{children}</SessionProvider>;
}

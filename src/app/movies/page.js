"use client";

import { useSession } from "next-auth/react";

export default function Movies() {
  const { data: session, status } = useSession();
  const date = new Date();

  console.log("Session status:", status);
  console.log("Session data:", session);
  console.log("Current date:", date);
  console.log("abc");
  return <div>Movies</div>;
}

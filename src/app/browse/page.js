"use client";

import UnauthPage from "@/components/unauth-page";
import { useSession } from "next-auth/react";

export default function Browse() {
  const { data: session, status } = useSession();
  const date = new Date();

  console.log("Session status:", status);
  console.log("Session data:", session);
  console.log("Current date:", date);
  console.log("abc");

  // if (session === null) {
  //   return <UnauthPage />;
  // }

  return <div>Browse</div>;
}

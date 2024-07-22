"use client";

import UnauthPage from "@/components/unauth-page";
import { useSession } from "next-auth/react";

export default function Browse() {
  const { data: session } = useSession();

  console.log("session", session);

  if (session === null) {
    return <UnauthPage />;
  }

  return (
    <div>
      Browse
      {/* <div>
        <p>{session.user?.name.toUpperCase()}</p>
        <img src={session.user?.image} alt="image" />
      </div> */}
    </div>
  );
}

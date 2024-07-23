"use client";

import UnauthPage from "@/components/unauth-page";
import { useSession } from "next-auth/react";
import { useContext } from "react";
import { GlobalContext } from "../../context";
import ManageAccouts from "@/components/manage-account";

export default function Browse() {
  const { loggedInAccount } = useContext(GlobalContext);

  const { data: session } = useSession();

  console.log("session", session);

  if (session === null) return <UnauthPage />;
  if (loggedInAccount === null) return <ManageAccouts />;

  return <div>Browse</div>;
}

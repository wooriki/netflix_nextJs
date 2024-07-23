"use client";

import { GlobalContext } from "@/app/context";
import ManageAccouts from "@/components/manage-account";
import UnauthPage from "@/components/unauth-page";
import { useSession } from "next-auth/react";
import { useContext } from "react";

export default function Search() {
  const { loggedInAccount } = useContext(GlobalContext);

  const { data: session } = useSession();

  if (session === null) return <UnauthPage />;

  if (loggedInAccount === null) return <ManageAccouts />;

  return <div>Search</div>;
}

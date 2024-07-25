"use client";

import { GlobalContext } from "@/context";
import ManageAccouts from "@/components/manage-accounts";
import UnauthPage from "@/components/unauth-page";
import { useSession } from "next-auth/react";
import { useParams } from "next/navigation";
import { useContext } from "react";

export default function Search() {
  const { loggedInAccount } = useContext(GlobalContext);

  const { data: session } = useSession();
  const params = useParams();

  if (session === null) return <UnauthPage />;

  if (loggedInAccount === null) return <ManageAccouts />;

  return <div>Search</div>;
}

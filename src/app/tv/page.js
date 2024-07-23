"use client";

import UnauthPage from "@/components/unauth-page";
import { useSession } from "next-auth/react";
import { useContext } from "react";
import { GlobalContext } from "../../context";
import ManageAccouts from "@/components/manage-account";

export default function Tv() {
  const { loggedInAccount } = useContext(GlobalContext);

  const { data: session } = useSession();
  if (session === null) return <UnauthPage />;

  if (loggedInAccount === null) return <ManageAccouts />;

  return <div>Tv</div>;
}

"use client";

import { GlobalContext } from "../../context";
import { useSession } from "next-auth/react";
import { useContext, useEffect } from "react";

export default function ManageAccouts() {
  const { accounts, setAccounts } = useContext(GlobalContext);
  const { data: session } = useSession();

  async function getAllAccounts() {
    const response = await fetch(
      `/api/account/get-all-account?id=${session?.user?.uid}`,
      {
        method: "GET",
      }
    );
    const data = await response.json();
    console.log("data", data);

    if (data && data.data && data.data.length) {
      setAccounts(data.data);
    }

    return data;
  }

  useEffect(() => {
    getAllAccounts();
  }, []);

  return (
    <div className="min-h-screen flex justify-center flex-col items-center relative">
      <div className="flex justify-center flex-col items-center">
        <h1 className="text-white font-bold text-[54px] my-[36px]">
          Who's Watching?
        </h1>
      </div>
    </div>
  );
}

import connetToDB from "@/database";
import Account from "@/models/Account";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connetToDB();

    const { pin, accountId, uid } = await req.json();

    const getCurrentAccount = await Account.findOne({ _id: accountId, uid });

    if (!getCurrentAccount) {
      return NextResponse.json({
        succes: false,
        messeage: "Account not found",
      });
    }

    const checkPin = await compare(pin, getCurrentAccount.pin);

    if (checkPin) {
      return NextResponse.json({
        succes: true,
        messeage: "Welcome to Netflix",
      });
    } else {
      return NextResponse.json({
        succes: false,
        messeage: "Incorrect PIN ! Please try again",
      });
    }
  } catch (e) {
    console.log(e);
    return NextResponse.json({
      succes: false,
      messeage: "Something Went To Wrong",
    });
  }
}

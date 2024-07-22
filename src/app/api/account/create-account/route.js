import connetToDB from "@/database";
import Account from "@/models/Account";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function POST(req) {
  try {
    await connetToDB();

    const { name, pin, uid } = await req.json();

    const isAccountAlreadyExists = await Account.find({ uid, name });

    const allAcoounts = await Account.find({});

    if (isAccountAlreadyExists) {
      return NextResponse.json({
        succes: true,
        messeage: "Please try with a diffrent name",
      });
    }

    if (allAcoounts && allAcoounts.length === 4) {
      return NextResponse.json({
        succes: false,
        messeage: "You can only add max 4 accounts",
      });
    }

    const hashPin = await hash(pin, 12);

    const newlyCreateAccount = await Account.create({
      name,
      pin: hashPin,
      uid,
    });

    if (newlyCreateAccount) {
      return NextResponse.json({
        succes: true,
        messeage: "Account created  successfully",
      });
    } else {
      return NextResponse.json({
        succes: false,
        messeage: "Something Went To Wrong",
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

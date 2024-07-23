import connectToDB from "../../../../database/index";
import Account from "../../../../models/Account";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(req) {
  try {
    await connectToDB();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    const getAllAccounts = await Account.find({ uid: id });

    if (getAllAccounts) {
      return NextResponse.json({
        success: true,
        date: getAllAccounts,
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

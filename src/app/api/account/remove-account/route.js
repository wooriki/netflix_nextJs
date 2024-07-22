import connetToDB from "@/database";
import Account from "@/models/Account";
import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export async function DELETE(req) {
  try {
    await connetToDB();

    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json({
        succes: false,
        messeage: "Account ID is mandatory",
      });
    }

    const deleteAccount = await Account.findByIdAndDelete(id);

    if (deleteAccount) {
      return NextResponse.json({
        succes: true,
        messeage: "Account deleted successfully",
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

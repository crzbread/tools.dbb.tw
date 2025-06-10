// src/app/api/translate/route.ts
import { NextRequest, NextResponse } from "next/server";
import translate from "@iamtraction/google-translate";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const text = searchParams.get("text") || "";

  try {
    const res = await translate(text, { to: "en" });
    return NextResponse.json({ translation: res.text });
  } catch (error) {
    console.error("Translation error:", error);
    return NextResponse.json({ error: "Translation failed" }, { status: 500 });
  }
}

import { NextResponse } from "next/server";
import { analyze } from "./gemini";

export async function POST(request: Request) {
  try {
    const userData = await request.json();
    console.log(userData);
    const analysis = await analyze(userData);

    return NextResponse.json({ analysis });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: "Erro ao processar análise" },
      { status: 500 },
    );
  }
}

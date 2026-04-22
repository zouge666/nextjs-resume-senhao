import { NextResponse } from "next/server";
import { buildPortfolioModel } from "@/application/buildPortfolioModel";

export async function GET() {
  const model = await buildPortfolioModel();
  return NextResponse.json(model);
}

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const sitio = await prisma.sitio.findMany();
    return NextResponse.json(sitio);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}

export async function POST(request: Request) {
  try {
    const { id, name, status } = await request.json();

    const newSitio = await prisma.sitio.create({
      data: {
        id: Number(id),
        name,
        status,
      },
    });

    return NextResponse.json(newSitio);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        {
          status: 500,
        }
      );
    }
  }
}

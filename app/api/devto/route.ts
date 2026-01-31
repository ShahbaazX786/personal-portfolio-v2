import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch(
    `https://dev.to/api/articles?username=${process.env.DEVTO_USERNAME}`,
    {
      headers: {
        "api-key": process.env.DEVTO_API_KEY!,
      },
      next: { revalidate: 3600 },
    },
  );

  if (!res.ok) {
    return NextResponse.json(
      { error: "Failed to fetch Dev.to posts" },
      { status: 500 },
    );
  }

  const data = await res.json();
  return NextResponse.json(data);
}

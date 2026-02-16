import { NextRequest, NextResponse } from "next/server";
import { mockSearchResults } from "@/data/searchResults";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { destination, serviceType, date } = body;

    // Validate required fields
    if (!destination || !serviceType || !date) {
      return NextResponse.json(
        { success: false, error: "All fields are required" },
        { status: 400 }
      );
    }

    // Simulate network delay
    await new Promise((resolve) => setTimeout(resolve, 800));

    // Filter mock results based on service type (case-insensitive partial match)
    const filteredResults = mockSearchResults.filter(
      (result) =>
        result.category.toLowerCase().includes(serviceType.toLowerCase()) ||
        result.location.toLowerCase().includes(destination.toLowerCase())
    );

    // Return filtered results or all if no specific matches
    const results = filteredResults.length > 0 ? filteredResults : mockSearchResults;

    return NextResponse.json({
      success: true,
      data: results,
    });
  } catch {
    return NextResponse.json(
      { success: false, error: "Internal server error" },
      { status: 500 }
    );
  }
}

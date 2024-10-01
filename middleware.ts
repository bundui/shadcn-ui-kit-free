import { NextResponse, type NextRequest } from "next/server";
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL("/dashboard/default", request.url));
}

export const config = {
  matcher: ["/dashboard", "/"]
};

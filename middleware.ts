import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
 
  const isPublicRoute = 
    pathname === "/" || 
    pathname.startsWith("/auth") || 
    pathname === "/jobs" ||
    // Allow /jobs/[id] but PROTECT /jobs/users or /jobs/create
    (pathname.startsWith("/jobs/") && !pathname.startsWith("/jobs/users") && !pathname.startsWith("/jobs/create"));

  const token = request.cookies.get("accessToken")?.value;

  if (!isPublicRoute && !token) {
    const loginUrl = new URL("/auth/login", request.url);
    // Add returnTo parameter so user goes back to the job after logging in
    loginUrl.searchParams.set("returnTo", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  // Apply middleware to all routes except static files/images
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
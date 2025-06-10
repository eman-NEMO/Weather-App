import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  // مجرد تحقق لو موجود كوكيس اسمها next-auth.session-token أو حسب إعداداتك
  const hasSession = req.cookies.get("next-auth.session-token")?.value;

  console.log(hasSession,"")
  if (!hasSession && req.nextUrl.pathname.startsWith("/favourate")) {
    const loginUrl = new URL("/auth/login", req.url);
    return NextResponse.redirect(loginUrl);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: ["/favourate/:path*", "/favourate"],
};

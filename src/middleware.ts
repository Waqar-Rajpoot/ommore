import createMiddleware from 'next-intl/middleware';
import { routing } from './i18n/routing';

export default createMiddleware(routing);

export const config = {
  // Match all routes except static files, Next internals, and /admin
  // (admin panel is English-only per the Security & Access Document — no locale prefix).
  matcher: ['/((?!api|admin|_next|.*\\..*).*)'],
};

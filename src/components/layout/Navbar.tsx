import Link from 'next/link';

// Stub for Ticket-008 (root layout). Full scroll/blur behavior, mega dropdown,
// and mobile drawer wiring land in Ticket-009 — not built here on purpose,
// per the PRD's own warning against building tickets out of order.
export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] flex h-[72px] items-center justify-between px-20 max-md:h-16 max-md:px-5">
      <Link href="/" className="font-display text-lg font-semibold text-text-primary">
        Ommore
      </Link>
    </header>
  );
}

// Stub for Ticket-008. Full four-column layout is Ticket-011.
export default function Footer() {
  return (
    <footer className="mt-auto bg-surface px-20 py-12 text-text-secondary max-md:px-5">
      <p className="font-display text-text-primary">Ommore</p>
      <p className="mt-2 text-sm">Your Gateway to Global Markets</p>
      <p className="mt-6 text-xs text-text-muted">
        © {new Date().getFullYear()} Ommore. All rights reserved.
      </p>
    </footer>
  );
}

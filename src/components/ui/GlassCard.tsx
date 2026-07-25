import { ReactNode } from 'react';

export default function GlassCard({
  children,
  className = '',
  as: As = 'div',
}: {
  children: ReactNode;
  className?: string;
  as?: React.ElementType;
}) {
  return (
    <As
      className={`glass-card group rounded-2xl border border-border-glass bg-glass p-7 shadow-glass backdrop-blur-glass backdrop-saturate-[180%] transition-all duration-300 hover:-translate-y-1 hover:border-border-glow hover:bg-glass-strong max-md:p-5 ${className}`}
    >
      {children}
    </As>
  );
}

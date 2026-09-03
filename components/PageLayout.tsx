import { cn } from "@/lib/utils";

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  /** Extra top padding to account for the fixed navbar */
  withHero?: boolean;
}

export default function PageLayout({ children, className, withHero = false }: PageLayoutProps) {
  return (
    <div className={cn("min-h-screen", withHero ? "pt-20" : "pt-24 pb-20", className)}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        {children}
      </div>
    </div>
  );
}

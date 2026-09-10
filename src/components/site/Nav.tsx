import { useEffect, useState } from "react";
import { brand, nav } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > window.innerHeight * 0.6);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-border/60 bg-background/85 py-3 backdrop-blur-xl"
          : "py-6"
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6">
        <a
          href="#journey"
          className={`font-display text-lg tracking-[0.18em] ${scrolled ? "text-foreground" : "text-bone"}`}
        >
          {brand.name}
        </a>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-xs tracking-[0.2em] uppercase transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-bone/70 hover:text-bone"
              }`}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Button asChild size="sm" className="hidden rounded-full px-5 sm:inline-flex">
            <a href="#contact">Talk to us</a>
          </Button>

          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button
                variant="ghost"
                size="icon"
                aria-label="Open menu"
                className={scrolled ? "" : "text-bone hover:text-bone"}
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="surface-canopy border-none">
              <SheetTitle className="sr-only">Menu</SheetTitle>
              <nav className="mt-16 flex flex-col gap-6 px-6" aria-label="Mobile">
                {nav.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="font-display text-3xl text-bone"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}

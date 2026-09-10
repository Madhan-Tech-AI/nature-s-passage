import { brand, nav } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-6 md:grid-cols-[1.2fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl tracking-[0.18em]">{brand.name}</p>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {brand.description}
          </p>
        </div>

        <nav aria-label="Footer">
          <p className="eyebrow text-muted-foreground">Explore</p>
          <ul className="mt-5 space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm text-foreground/80 transition-colors hover:text-foreground"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <address className="not-italic">
          <p className="eyebrow text-muted-foreground">Reach us</p>
          <ul className="mt-5 space-y-3 text-sm text-foreground/80">
            <li>
              <a href={`mailto:${brand.email}`} className="hover:text-foreground">
                {brand.email}
              </a>
            </li>
            <li>
              <a href={`tel:${brand.phone.replace(/\s/g, "")}`} className="hover:text-foreground">
                {brand.phone}
              </a>
            </li>
            <li className="text-muted-foreground">{brand.address}</li>
          </ul>
        </address>
      </div>

      <div className="mx-auto mt-14 flex w-full max-w-7xl flex-col gap-3 border-t border-border px-6 pt-8 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p>
          &copy; {new Date().getFullYear()} {brand.name}. All rights reserved.
        </p>
        <p className="tracking-[0.24em] uppercase">{brand.tagline}</p>
      </div>
    </footer>
  );
}

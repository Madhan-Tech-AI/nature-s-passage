import { stats, story } from "@/data/site";
import { useReveal } from "@/hooks/useReveal";
import hands from "@/assets/story-hands.jpg";

export function Story() {
  const scope = useReveal<HTMLElement>();

  return (
    <section id="story" ref={scope} className="bg-background py-28 sm:py-40">
      <div className="mx-auto grid w-full max-w-7xl gap-14 px-6 lg:grid-cols-2 lg:items-center">
        <div className="reveal-up relative overflow-hidden rounded-sm">
          <img
            src={hands}
            alt="A farmer's hands holding dark soil and young seedlings at golden hour"
            loading="lazy"
            width={1400}
            height={1000}
            className="h-full w-full object-cover"
          />
        </div>

        <div>
          <p className="eyebrow reveal-up text-moss">{story.eyebrow}</p>
          <h2 className="reveal-up mt-5 text-[clamp(2.25rem,5vw,3.75rem)] leading-[1.05]">
            {story.title}
          </h2>
          {story.body.map((paragraph) => (
            <p
              key={paragraph.slice(0, 24)}
              className="reveal-up mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground sm:text-base"
            >
              {paragraph}
            </p>
          ))}

          <dl className="mt-12 grid grid-cols-2 gap-8 border-t border-border pt-10 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="reveal-up">
                <dt className="font-display text-4xl text-foreground">{stat.value}</dt>
                <dd className="mt-2 text-[0.65rem] tracking-[0.18em] text-muted-foreground uppercase">
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

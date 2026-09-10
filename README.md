# Nature's Passage

You are an elite creative frontend engineer, interaction designer,

3D web developer, motion designer and digital art director.

Build a COMPLETE production-quality website for:

                    NAMO ORGANIC

The website must be built using:

- TypeScript

- TSX

- React

- GSAP

- GSAP ScrollTrigger

- shadcn/ui

- Tailwind CSS

- HTML5 Canvas

- Three.js / React Three Fiber where genuinely useful

- requestAnimationFrame

- modern responsive CSS

The final result must feel like a world-class premium organic

agriculture brand website.

This is NOT a normal corporate website.

This is NOT a normal ecommerce website.

This is NOT a template.

This is NOT a dashboard.

This is NOT a collection of animated cards.

The website must feel like an immersive cinematic journey through

the NAMO ORGANIC natural world.

============================================================

                    CORE CREATIVE CONCEPT

============================================================

The entire website should communicate:

                    GROW WITH NATURE.

The visitor should feel as though they have entered a living,

breathing tropical agricultural ecosystem.

The website experience should combine:

PREMIUM BRAND FILM

+

CINEMATIC CAMERA

+

3D ENVIRONMENT

+

SCROLL-DRIVEN STORYTELLING

+

PRODUCT DISCOVERY

+

NATURAL MOVEMENT

+

EDITORIAL DESIGN

+

SUBTLE INTERACTION

The experience should feel similar to entering a cinematic film,

where the user's scroll controls the camera.

The visitor should NEVER feel like they are simply scrolling through

web sections.

They should feel like:

                    "I am travelling through the NAMO ORGANIC world."

============================================================

IMPORTANT — UNDERSTAND THIS BEFORE CODING

============================================================

The most important design principle is:

                    THE CAMERA MOVES.

                    THE WORLD EXISTS.

                    THE PRODUCTS ARE PHYSICALLY THERE.

Do NOT make products behave like website UI elements.

Do NOT make products slide around the viewport.

Do NOT make products behave like carousel cards.

Do NOT create a product slider.

Instead:

CAMERA TRAVELS

        ↓

FOREST MOVES AROUND CAMERA

        ↓

NATURAL STONE APPEARS

        ↓

PRODUCT IS ALREADY THERE

        ↓

CAMERA APPROACHES PRODUCT

        ↓

PRODUCT BECOMES THE FOCUS

        ↓

PRODUCT REMAINS PHYSICALLY FIXED

        ↓

CAMERA CONTINUES TRAVELLING

        ↓

PRODUCT REMAINS BEHIND

        ↓

FOREST FILLS SCREEN

        ↓

CAMERA TRAVELS TO NEXT LOCATION

        ↓

NEXT PRODUCT IS DISCOVERED

This distinction is absolutely critical.

============================================================

                    BRAND DIRECTION

============================================================

Brand:

NAMO ORGANIC

Primary message:

GROW WITH NATURE.

Supporting message:

Organic solutions rooted in nature.

Brand philosophy:

IN HARMONY WITH THE EARTH

Additional supporting message:

Good for the soil.

Better for life.

Use the supplied visual reference as the primary art-direction

reference.

The visual language should be:

- premium

- natural

- cinematic

- sophisticated

- photorealistic

- organic

- modern

- trustworthy

- immersive

- quiet

- luxurious

============================================================

                    BRAND COLORS

============================================================

Use this exact brand palette:

Deep organic green:

#101800

Olive green:

#638D08

Lime green:

#A8E63A

Fresh green:

#76B82A

White:

#FFFFFF

Very light green/grey:

#F5F7F2

IMPORTANT:

Do not make the website neon green.

Lime green should be an accent, not the dominant environmental color.

The forest itself must remain photorealistic.

============================================================

                    TYPOGRAPHY

============================================================

Use a modern premium sans-serif.

Typography should feel:

- editorial

- elegant

- minimal

- contemporary

- highly readable

Use large typography strategically.

Primary hero:

GROW WITH

NATURE.

Do not make every section use huge typography.

Create hierarchy through:

- font size

- weight

- letter spacing

- opacity

- spacing

- animation

============================================================

                    SHADCN/UI

============================================================

Use shadcn/ui for interface components where appropriate.

Use shadcn for:

- buttons

- navigation controls

- dialogs

- menus

- form elements

- accordion

- sheets

- accessible interactive UI

- mobile navigation

BUT:

Do NOT make the cinematic environment look like shadcn UI.

Do NOT put the products inside shadcn cards during the cinematic

experience.

Do NOT use excessive rounded cards.

Do NOT use generic SaaS component styling.

The environment should remain cinematic.

shadcn is the UI foundation.

GSAP + Canvas + Three.js are the cinematic foundation.

============================================================

                    WEBSITE ARCHITECTURE

============================================================

Create the following major sections:

1. CINEMATIC HERO

2. PRODUCT JOURNEY / FOCUS PRODUCTS

3. OUR APPROACH

4. OUR WORLD / NATURE PHILOSOPHY

5. OUR STORY

6. AGRICULTURAL / PRODUCT BENEFITS

7. CTA / LET'S GROW TOGETHER

8. FOOTER

The exact content should remain easy to edit through structured

TypeScript data.

Do not hardcode repeated content directly inside JSX.

Use data structures.

============================================================

                    GLOBAL EXPERIENCE

============================================================

The website should feel like ONE continuous experience.

Do not make every section visually unrelated.

Maintain:

- consistent lighting

- consistent color grading

- consistent typography

- consistent spacing

- consistent motion language

- consistent organic textures

- consistent environmental storytelling

Transitions between major sections should be elegant.

Use:

GSAP

ScrollTrigger

clip-path

scale

opacity

transform

blur

parallax

depth

camera movement

where appropriate.

============================================================

                    SECTION 01

                  CINEMATIC HERO

============================================================

THIS IS THE MOST IMPORTANT SECTION.

The hero should occupy the full viewport.

Initial screen:

100vw

×

100vh

The first scene is a cinematic tropical forest.

The visitor initially sees:

- tall trees

- dense foliage

- grass

- ferns

- moss

- distant mountains

- agricultural fields

- morning atmosphere

- mist

- sunlight

- volumetric rays

- atmospheric depth

- foreground leaves

The scene should look photorealistic.

============================================================

                    FOREST MOVEMENT

============================================================

The forest must feel alive.

Grass gently bends in the wind.

Leaves gently sway.

Trees subtly move.

Ferns move.

Branches react to wind.

Mist slowly moves.

Light subtly changes.

Movement must NOT be exaggerated.

Do not create a storm.

Do not create looping robotic animation.

Movement should be organic and irregular.

The visitor should feel:

                    "The forest is breathing."

============================================================

                    HERO BRANDING

============================================================

Initial hero composition:

Top-left:

NAMO ORGANIC logo/brand.

Top navigation:

Our world

Our approach

Our story

Top-right:

Let's grow together ↗

Hero eyebrow:

IN HARMONY WITH THE EARTH

Headline:

GROW WITH

NATURE.

Supporting text:

Organic solutions rooted in nature.

Primary CTA:

EXPLORE PRODUCTS ↗

Secondary:

Our story ↗

Bottom:

SCROLL TO ENTER NATURE

Use the supplied screenshot as visual reference.

============================================================

                    HERO SCROLL EXPERIENCE

============================================================

The hero must be PINNED.

Concept:

hero scroll container:

approximately 800vh–1200vh

depending on the number of cinematic scenes.

Inside:

position: sticky

top: 0

width: 100vw

height: 100vh

The user scrolls vertically.

The viewport remains fixed.

The camera moves through the environment.

This should feel like:

                    SCRUBBING A CINEMATIC FILM.

============================================================

                    FRAME SEQUENCE

============================================================

The main cinematic forest journey should support a 30 FPS

frame sequence.

Pipeline:

CINEMATIC VIDEO

        ↓

30 FPS FRAME EXTRACTION

        ↓

WEBP / AVIF

        ↓

CANVAS

        ↓

SCROLL PROGRESS

        ↓

FRAME INDEX

Example:

450 frames

0%

→ frame 0001

25%

→ frame 0112

50%

→ frame 0225

75%

→ frame 0337

100%

→ frame 0450

Do NOT hardcode 450.

Create configurable:

TOTAL_FRAMES

FRAME_PATH

FRAME_FORMAT

FRAME_COUNT

============================================================

                    SMOOTH SCRUB

============================================================

Never simply do:

frame = scrollProgress * totalFrames

Use a smoothed target.

Conceptually:

targetFrame =

    scrollProgress * totalFrames

currentFrame =

    lerp(currentFrame, targetFrame, smoothing)

Use:

requestAnimationFrame()

The experience must feel smooth.

Support:

- slow scrolling

- fast scrolling

- stopping

- reversing

- partial scrolling

- touch scrolling

============================================================

                    REVERSE SCROLL

============================================================

If the visitor scrolls upward:

The entire cinematic journey must reverse.

Products disappear naturally.

Camera travels backward.

Forest returns naturally.

Do NOT restart the animation.

Do NOT jump.

Do NOT reset.

The entire timeline is bidirectional.

============================================================

                    CINEMATIC CAMERA

============================================================

Create the illusion of a real cinema camera.

Camera movement:

- slow forward dolly

- subtle lateral movement

- gentle vertical movement

- slight rotation

- subtle perspective shift

- natural acceleration

- natural deceleration

Avoid:

- spinning

- excessive zoom

- violent camera movement

- gaming camera movement

- artificial floating

- excessive motion blur

The movement should feel expensive.

============================================================

                    PARALLAX DEPTH

============================================================

Build multiple depth layers.

Depth:

1. Sky

2. Distant mountains

3. Distant forest

4. Midground trees

5. Nearby vegetation

6. Stone

7. Product

8. Foreground leaves

Use subtle depth multipliers.

Background:

0.90

Mountains:

0.93

Distant forest:

0.96

Midground:

1.00

Vegetation:

1.04

Stone:

1.07

Product:

1.08

Foreground:

1.14

Tune visually.

Do not exaggerate.

============================================================

                    MOUSE PARALLAX

============================================================

Desktop only.

Mouse movement creates subtle additional camera movement.

Maximum:

1–3 degrees.

Mouse movement must never override scroll.

Combine:

scroll camera position

+

mouse influence

smoothly.

============================================================

                    PRODUCT DISCOVERY

============================================================

Products should be discovered naturally.

Example:

FOREST

↓

CAMERA TRAVELS

↓

WOODEN SIGN

↓

CAMERA FOLLOWS DIRECTION

↓

STONE

↓

PRODUCT

↓

CAMERA APPROACHES

↓

PRODUCT FOCUS

↓

CAMERA LEAVES

↓

FOREST

↓

NEXT SIGN

↓

NEXT PRODUCT

============================================================

                    PRODUCT ANCHORING

============================================================

CRITICAL:

The product must remain spatially fixed.

Example:

A product is sitting on a stone.

The product stays on the stone.

The camera approaches it.

The camera stops.

The product remains there.

The camera then continues past it.

The product does not fly away.

The product does not slide.

The product does not rotate unnecessarily.

The product does not behave like a card.

The camera leaves the product behind.

============================================================

                    PRODUCT LIGHTING

============================================================

Products must visually belong to the environment.

Use:

- warm sunlight

- soft green ambient bounce

- realistic shadows

- subtle rim lighting

- contact shadows

- realistic reflections

Do not make the product look pasted into the forest.

============================================================

                    NATURAL STONE

============================================================

Use moss-covered natural stones as product stages.

They must feel physically part of the forest.

Characteristics:

- irregular shape

- moss

- damp natural surface

- subtle texture

- realistic shadow

- environmental lighting

Do NOT make them look like display pedestals.

============================================================

                    FOREGROUND OCCLUSION

============================================================

Use vegetation in front of the camera.

Example:

Leaf enters foreground

↓

passes across lens

↓

product is partially hidden

↓

leaf moves away

↓

product becomes visible.

This is essential for creating cinematic depth.

============================================================

                    DIRECTION SIGNBOARDS

============================================================

Create physical wooden signboards inside the environment.

They should look like real objects.

Examples:

ORGANIC PRODUCTS →

BIO INPUTS →

NATURAL SOLUTIONS →

OUR PRODUCTS →

The labels should be driven from TypeScript data.

The signboard should have:

- realistic wood

- natural imperfections

- moss

- shadows

- physical perspective

- environmental lighting

No UI-looking signboards.

============================================================

                    SIGNBOARD STORYTELLING

============================================================

The camera encounters the signboard.

The signboard becomes readable.

The camera follows the indicated direction.

The visitor then discovers a product.

This makes the product journey feel intentional.

============================================================

                    PRODUCT SCENE TRANSITIONS

============================================================

NEVER:

PRODUCT A

→ fade

→ PRODUCT B

Instead:

PRODUCT A

↓

CAMERA MOVES AWAY

↓

PRODUCT A STAYS BEHIND

↓

FOREGROUND LEAVES PASS

↓

FOREST FILLS SCREEN

↓

CAMERA MOVES DEEPER

↓

NEW SIGNBOARD

↓

CAMERA CHANGES DIRECTION

↓

NEW STONE

↓

PRODUCT B

↓

CAMERA APPROACHES

Every transition should feel spatial.

============================================================

                    PRODUCT DATA MODEL

============================================================

Create a TypeScript configuration similar to:

type ProductScene = {

    id: string

    name: string

    category: string

    image: string

    position: "left" | "right" | "center"

    direction: "left" | "right" | "forward"

    signText: string

    sceneStart: number

    sceneEnd: number

}

Use:

const productScenes: ProductScene[] = [...]

Do NOT hardcode filenames throughout components.

Make the entire product journey data-driven.

============================================================

                    HERO TIMELINE

============================================================

Create a master timeline.

Example:

0–12%

Opening forest

12–20%

Hero typography exits

20–28%

Camera enters deeper forest

28–35%

First signboard

35–45%

First product

45–53%

Travel through forest

53–60%

Second signboard

60–70%

Second product

70–78%

Forest journey

78–85%

Third signboard

85–93%

Third product

93–100%

Exit forest

The system must automatically distribute scenes based on the number

of products.

============================================================

                    HERO END

============================================================

After all products have been discovered:

The camera leaves the final product.

Forest becomes dominant.

The cinematic journey gradually concludes.

Only then:

hero releases

↓

next section enters.

Do not abruptly cut to the next section.

============================================================

              SECTION 02 — PRODUCT WORLD

============================================================

After the cinematic hero, transition into a premium product section.

Title:

OUR FOCUS PRODUCTS

Do not immediately revert to generic cards.

Use a sophisticated editorial layout.

Products can now become interactive UI elements because the cinematic

journey has finished.

Possible structure:

large featured product

+

supporting products

+

category information

+

subtle hover interactions.

Use shadcn components where appropriate.

Product images must remain accurate.

============================================================

              SECTION 03 — OUR APPROACH

============================================================

Create an immersive storytelling section explaining the NAMO

Organic approach.

Use large editorial typography.

Use natural imagery.

Use subtle GSAP reveal animations.

Possible visual concept:

SOIL

↓

ROOTS

↓

PLANT

↓

FARM

↓

LIFE

Animate these concepts through scroll.

Do not create excessive cards.

============================================================

              SECTION 04 — OUR WORLD

============================================================

Create a premium visual section about nature and agriculture.

Use:

- large imagery

- cinematic crop transitions

- layered typography

- parallax

- subtle horizontal movement

- organic textures

The section should feel connected to the forest hero.

============================================================

              SECTION 05 — OUR STORY

============================================================

Create an editorial brand story section.

Use:

large typography

+

imagery

+

timeline-like storytelling.

Animations should be subtle.

Do not overload the page.

============================================================

              SECTION 06 — BENEFITS

============================================================

Create a premium benefits section.

Use visual storytelling rather than generic icon grids.

Benefits may be represented with:

- soil

- roots

- leaves

- crops

- microorganisms

- natural agriculture

Use placeholders if exact business copy is not provided.

Do NOT invent unsupported product claims.

Keep editable content in data files.

============================================================

              SECTION 07 — CTA

============================================================

Create a powerful final CTA:

LET'S GROW

TOGETHER.

Use an immersive natural background.

CTA:

LET'S GROW TOGETHER ↗

The section should feel like the emotional conclusion of the website.

============================================================

                    FOOTER

============================================================

Premium minimal footer.

Include:

NAMO ORGANIC

Navigation

Our world

Our approach

Our products

Our story

Let's grow together

Social links

Copyright

Keep it minimal.

============================================================

                    NAVIGATION

============================================================

Desktop navigation should remain minimal.

Top:

NAMO ORGANIC

Our world

Our approach

Our story

Let's grow together ↗

The navigation should initially be transparent over the hero.

As the website transitions into lighter sections, dynamically adapt

navigation contrast.

Use smooth GSAP transitions.

============================================================

                    CUSTOM CURSOR

============================================================

On desktop, optionally create a premium custom cursor.

Normal:

small subtle dot.

Interactive element:

expand slightly.

Image/product hover:

show subtle label such as:

VIEW

EXPLORE

Do not make the cursor distracting.

Disable custom cursor on touch devices.

============================================================

                    SCROLL INDICATOR

============================================================

Create a minimal scroll indicator.

It should communicate that the visitor is entering the natural world.

Example:

SCROLL TO ENTER NATURE

↓ 

As scrolling starts:

indicator fades.

============================================================

                    MICRO INTERACTIONS

============================================================

Buttons:

subtle arrow movement.

Links:

underline animation.

Images:

slight scale on hover.

Navigation:

smooth color transition.

Signboards:

subtle movement.

Products:

very subtle parallax.

Everything should feel intentional.

============================================================

                    GSAP ARCHITECTURE

============================================================

Create reusable animation utilities.

Example structure:

src/

    components/

    sections/

    animations/

    hooks/

    data/

    lib/

    types/

    assets/

Possible files:

Hero.tsx

HeroCanvas.tsx

HeroOverlay.tsx

ProductJourney.tsx

ProductScene.tsx

DirectionSign.tsx

OurApproach.tsx

OurWorld.tsx

OurStory.tsx

Benefits.tsx

FinalCTA.tsx

Footer.tsx

animations/

    heroTimeline.ts

    parallax.ts

    reveal.ts

    transitions.ts

hooks/

    useScrollProgress.ts

    useMouseParallax.ts

    useFrameSequence.ts

    useReducedMotion.ts

data/

    products.ts

    scenes.ts

    navigation.ts

============================================================

                    GSAP CONTEXT

============================================================

Use gsap.context() or an equivalent cleanup architecture.

All ScrollTriggers must be cleaned up correctly.

Avoid memory leaks.

Handle React StrictMode correctly.

============================================================

                    PERFORMANCE

============================================================

Performance is extremely important.

Target:

60 FPS on modern devices.

Use:

requestAnimationFrame

Canvas

GPU-friendly transforms

lazy loading

progressive image loading

image decoding

efficient caching

responsive resolution

devicePixelRatio management.

Do NOT cause unnecessary React re-renders.

Keep animation state outside React whenever possible.

============================================================

                    FRAME LOADING

============================================================

Do not load hundreds of high-resolution frames simultaneously.

Implement:

initial preload

↓

progressive preload

↓

nearby frame priority

↓

image decode

↓

cache

↓

memory management.

Display:

NAMO ORGANIC

ENTERING NATURE...

during initial loading.

============================================================

                    RESPONSIVE

============================================================

Desktop:

full cinematic experience.

Tablet:

reduced effects.

Mobile:

dedicated composition.

Mobile should NOT simply be desktop scaled down.

Use:

- portrait framing

- lower frame resolution

- reduced parallax

- reduced particles

- simplified foreground

- readable typography

- touch-friendly controls.

============================================================

                    ACCESSIBILITY

============================================================

Respect:

prefers-reduced-motion.

If enabled:

- simplify frame animation

- reduce parallax

- reduce camera motion

- reduce environmental animation

- provide static/high-quality scenes.

Ensure:

- keyboard navigation

- semantic HTML

- accessible buttons

- sufficient contrast

- ARIA where necessary.

============================================================

                    FALLBACK

============================================================

If the device cannot comfortably run the cinematic experience:

fallback to:

high-quality static forest/product composition

+

subtle CSS/GSAP movement.

The website must never become unusable.

============================================================

                    3D SYSTEM

============================================================

Use Three.js / React Three Fiber only where it provides meaningful

value.

Potential uses:

- atmospheric particles

- subtle floating dust

- depth layers

- camera perspective

- environmental particles

- subtle fog

- foreground geometry

Do not turn the website into a videogame.

The aesthetic must remain cinematic.

============================================================

                    PARTICLES

============================================================

Use extremely subtle environmental particles:

dust

pollen

mist

tiny floating particles.

They should only become visible when appropriate.

No glowing sci-fi particles.

No excessive particle fields.

============================================================

                    IMAGE TREATMENT

============================================================

Use cinematic image treatment:

- subtle grain

- atmospheric haze

- natural contrast

- deep blacks

- warm highlights

- restrained saturation

Do not over-process images.

Product packaging must remain accurate.

============================================================

                    TRANSITIONS BETWEEN SECTIONS

============================================================

Major section transitions should feel cinematic.

Examples:

Forest darkens

↓

image emerges

↓

typography appears.

Or:

image expands

↓

clip-path opens

↓

next section appears.

Use GSAP.

Do not make every section perform the same animation.

Variation is important.

============================================================

                    IMPORTANT DESIGN RULE

============================================================

DO NOT OVER-ANIMATE.

Premium design is created by:

TIMING

+

SPACE

+

DEPTH

+

LIGHT

+

MOTION

+

RESTRAINT.

Every animation must have a reason.

============================================================

                    DO NOT DO

============================================================

Never create:

- generic gradient backgrounds

- excessive glassmorphism

- giant rounded cards

- neon effects

- excessive shadows

- generic AI landing-page aesthetics

- random floating blobs

- excessive animations

- stock SaaS layouts

- carousel hero

- product slider

- horizontal card slider

- autoplay product animations

- unrelated 3D objects

- excessive text

- unnecessary popups

============================================================

                    VISUAL HIERARCHY

============================================================

The hierarchy should always be:

1. ENVIRONMENT

2. CINEMATIC CAMERA

3. PRODUCT

4. BRAND MESSAGE

5. UI

The environment is the hero.

UI should never overpower the environment.

============================================================

                    PRODUCT ACCURACY

============================================================

When I upload product images:

Use them as the source of truth.

Do NOT:

- redesign packaging

- change labels

- modify logos

- modify colors

- invent text

- distort proportions

- change product identity.

If the image can be segmented cleanly, create depth layers.

If segmentation would produce ugly edges:

KEEP THE ORIGINAL IMAGE COMPOSITION.

Never generate an obviously fake product cutout.

============================================================

                    CONTENT ARCHITECTURE

============================================================

Create editable TypeScript data.

Example:

const siteConfig = {

    brand: "NAMO ORGANIC",

    heroTitle: "GROW WITH NATURE.",

    heroSubtitle: "Organic solutions rooted in nature."

}

const navigation = [...]

const products = [...]

const storySections = [...]

const benefits = [...]

This allows content to be changed without editing component logic.

============================================================

                    ROUTING

============================================================

If multiple pages are appropriate, structure the application so it can

later support:

/

 /products

 /products/[slug]

 /our-world

 /our-approach

 /our-story

 /contact

But initially make the primary homepage experience complete.

Do not overcomplicate routing if unnecessary.

============================================================

                    CODE QUALITY

============================================================

Use:

strict TypeScript.

Avoid:

any

unless absolutely unavoidable.

Create proper types.

Use reusable components.

Use clear naming.

Use comments only where they explain non-obvious animation logic.

Do not create one enormous component.

============================================================

                    DEVELOPMENT PROCESS

============================================================

Before coding:

STEP 1:

Inspect all uploaded assets.

STEP 2:

Identify:

- forest imagery

- product images

- product group images

- supporting images

- logos

- visual references.

STEP 3:

Study the provided NAMO ORGANIC hero reference.

STEP 4:

Determine the cinematic visual language.

STEP 5:

Create the information architecture.

STEP 6:

Create the component architecture.

STEP 7:

Create the animation architecture.

STEP 8:

Implement the hero first.

STEP 9:

Test the hero extensively.

STEP 10:

Build remaining sections.

STEP 11:

Connect section transitions.

STEP 12:

Optimize performance.

STEP 13:

Test responsive layouts.

STEP 14:

Test reduced motion.

STEP 15:

Test reverse scrolling.

STEP 16:

Test fast scrolling.

STEP 17:

Test slow scrolling.

STEP 18:

Test loading states.

============================================================

                    HERO TESTING REQUIREMENTS

============================================================

Verify:

SCROLL DOWN

Camera moves forward.

SCROLL UP

Camera moves backward.

STOP SCROLLING

Camera settles.

FAST SCROLL

Animation remains smooth.

SLOW SCROLL

Animation remains cinematic.

PRODUCT APPEARS

Product is physically anchored.

CONTINUE SCROLLING

Camera leaves product behind.

NEXT PRODUCT

Camera travels naturally to it.

NO ABRUPT CUTS.

============================================================

                    FINAL EXPERIENCE

============================================================

Imagine this exact user experience:

The website opens.

A peaceful tropical forest fills the entire screen.

Morning sunlight enters through the trees.

Grass gently moves.

Leaves sway.

Mist drifts.

The forest feels alive.

NAMO ORGANIC appears.

GROW WITH NATURE.

The visitor begins scrolling.

The text gently disappears.

The camera begins travelling forward.

Foreground vegetation passes close to the camera.

The visitor moves deeper into the forest.

A wooden signboard appears.

The camera approaches it.

The sign indicates a product direction.

The camera follows.

A moss-covered stone appears.

A NAMO Organic product is physically sitting there.

The camera approaches it.

The product becomes the visual focus.

The product remains fixed.

The environment continues moving.

The visitor scrolls.

The camera travels past the product.

The product remains behind.

Leaves cross the camera.

The forest fills the viewport.

Another signboard appears.

The camera changes direction.

Another stone.

Another product.

The journey continues.

The visitor is not browsing cards.

The visitor is travelling through a world.

Eventually all products have been discovered.

The camera leaves the final product.

The forest becomes quiet again.

The camera exits the cinematic environment.

The next website section appears.

The website continues with premium editorial storytelling.

The entire experience feels like one coherent cinematic film.

============================================================

                    FINAL QUALITY BAR

============================================================

The finished website should feel like it could belong to a

world-class premium agricultural/natural brand.

The goal is:

                    NOT "beautiful website"

The goal is:

                    "WOW, THIS FEELS LIKE A FILM."

The visitor should remember the experience.

The website should communicate:

NATURE

↓

SOIL

↓

AGRICULTURE

↓

LIFE

↓

NAMO ORGANIC

============================================================

                    FINAL INSTRUCTION

============================================================

DO NOT STOP AFTER CREATING A STATIC MOCKUP.

BUILD THE ACTUAL INTERACTIVE EXPERIENCE.

Implement the GSAP timelines.

Implement ScrollTrigger.

Implement the Canvas frame-sequence renderer.

Implement product scene transitions.

Implement parallax.

Implement responsive behavior.

Implement loading.

Implement fallbacks.

Implement accessibility.

Implement the complete page.

Use real TypeScript / TSX architecture.

Make every important animation configurable.

Do not fake the experience with a collection of static screenshots.

Build the experience so that when I later provide the cinematic

forest frame sequence and product assets, they can be dropped into

the asset/data system without rewriting the architecture.

MOST IMPORTANT:

THE USER IS NOT SCROLLING THROUGH A WEBSITE.

THE USER IS TRAVELLING THROUGH THE NAMO ORGANIC WORLD.

THE SCROLL IS THE CAMERA.

THE FOREST IS THE WORLD.

THE PRODUCTS ARE DISCOVERIES.

THE SIGNBOARDS GUIDE THE JOURNEY.

GSAP CONTROLS THE CINEMATIC TIMELINE.

CANVAS RENDERS THE CINEMATIC FRAMES.

THREE.JS ENHANCES DEPTH WHERE APPROPRIATE.

SHADCN PROVIDES THE UI FOUNDATION.

TYPESCRIPT / TSX PROVIDES THE APPLICATION ARCHITECTURE.

BUILD IT AS A PREMIUM PRODUCTION-QUALITY EXPERIENCE.

don't make it like a minimal theme and use a real 3D objects. instead of use a 3D elements.

design the website perfectly organic theme 3D animated smooth scrolling and smooth transition, parallax effect website.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0af79445-8064-4888-904c-13f3d5d8dd03).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```

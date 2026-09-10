/**
 * NAMO ORGANIC — all editable site content lives here.
 * Change copy, products, and journey beats without touching components.
 */

import productBottle from "@/assets/product-1.png";
import productPouch from "@/assets/product-2.png";
import productCan from "@/assets/product-3.png";

export const brand = {
  name: "NAMO ORGANIC",
  tagline: "Grow With Nature",
  description:
    "Regenerative organic inputs for farmers who work with the land, not against it.",
  email: "hello@namoorganic.com",
  phone: "+91 00000 00000",
  address: "Nashik, Maharashtra, India",
} as const;

export const nav = [
  { label: "Journey", href: "#journey" },
  { label: "Products", href: "#products" },
  { label: "Approach", href: "#approach" },
  { label: "Story", href: "#story" },
  { label: "Contact", href: "#contact" },
] as const;

export type Product = {
  id: string;
  name: string;
  category: string;
  summary: string;
  detail: string;
  image: string;
  /** Where in the hero journey (0-1) this product is anchored in the forest. */
  anchor: number;
  facts: string[];
};

export const products: Product[] = [
  {
    id: "bio-tonic",
    name: "Bio Tonic",
    category: "Foliar biostimulant",
    summary: "Cold-pressed botanical extract that wakes the leaf.",
    detail:
      "A fermented seaweed and neem concentrate that improves chlorophyll density and helps the crop hold flowering through heat stress.",
    image: productBottle,
    anchor: 0.26,
    facts: ["500 ml concentrate", "2 ml / litre", "Certified input"],
  },
  {
    id: "soil-culture",
    name: "Soil Culture",
    category: "Living soil amendment",
    summary: "Microbial compost culture for tired ground.",
    detail:
      "Fifteen native strains of nitrogen fixers and phosphate solubilisers, carried in slow-release vermicompost to rebuild structure season after season.",
    image: productPouch,
    anchor: 0.55,
    facts: ["1 kg pouch", "4 kg / acre", "Zero synthetic carriers"],
  },
  {
    id: "field-guard",
    name: "Field Guard",
    category: "Botanical crop protection",
    summary: "Plant-derived defence, safe on pollinators.",
    detail:
      "A karanja, garlic and chilli emulsion that disrupts sucking pest cycles without leaving residue on the harvest or the hands that pick it.",
    image: productCan,
    anchor: 0.82,
    facts: ["5 L canister", "3 ml / litre", "Nil residue window"],
  },
];

/** Wooden signboards planted along the forest path in the hero journey. */
export const signposts = [
  { at: 0.12, title: "Enter the grove", meta: "0 km" },
  { at: 0.42, title: "Living soil", meta: "2 km" },
  { at: 0.7, title: "The harvest", meta: "5 km" },
] as const;

/** Overlay chapters shown while the hero is pinned. */
export const chapters = [
  {
    at: 0.02,
    eyebrow: "Namo Organic",
    title: "Grow With Nature",
    body: "Scroll to walk into the forest where everything we make begins.",
  },
  {
    at: 0.2,
    eyebrow: "Chapter I",
    title: "The canopy remembers",
    body: "Every formula starts as an observation in the wild — what nature already solved.",
  },
  {
    at: 0.48,
    eyebrow: "Chapter II",
    title: "Below the leaf litter",
    body: "Soil is not a substrate. It is a colony of millions, and it can be brought back.",
  },
  {
    at: 0.76,
    eyebrow: "Chapter III",
    title: "Carried to the field",
    body: "Wild intelligence, bottled honestly, handed to the farmer.",
  },
] as const;

export const approach = [
  {
    step: "01",
    title: "Observe",
    body: "Agronomists live with the crop for a full cycle before a single formulation is drafted.",
  },
  {
    step: "02",
    title: "Ferment",
    body: "Botanicals are cold fermented in small batches so the active compounds stay alive.",
  },
  {
    step: "03",
    title: "Prove",
    body: "Every batch is trialled on partner farms and measured against the untreated block.",
  },
  {
    step: "04",
    title: "Return",
    body: "A share of every sale funds seed banks and soil testing for smallholder farmers.",
  },
] as const;

export const benefits = [
  { title: "Residue free", body: "Nothing that cannot be washed away by rain." },
  { title: "Pollinator safe", body: "Tested to leave bees and beneficials untouched." },
  { title: "Soil positive", body: "Organic carbon rises measurably within two seasons." },
  { title: "Traceable", body: "Batch codes trace back to the farm that grew the inputs." },
] as const;

export const stats = [
  { value: "12", label: "Years in the field" },
  { value: "8,400", label: "Partner farmers" },
  { value: "31", label: "Native crops supported" },
  { value: "0", label: "Synthetic residues" },
] as const;

export const story = {
  eyebrow: "Our story",
  title: "It started with one exhausted acre.",
  body: [
    "In 2013 a family plot outside Nashik stopped producing. The soil had been fed chemistry for thirty years and had forgotten how to feed itself.",
    "Namo Organic began as a compost pit and a microscope. Twelve years later the same acre grows three crops a year, and the methods learned there travel to thousands of farms.",
  ],
} as const;

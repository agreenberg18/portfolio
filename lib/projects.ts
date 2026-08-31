export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  id: string;
  name: string;
  tagline: string;
  description: string;
  badge?: string;
  emoji: string;
  gradient: string;
  accent: string;
  tags: string[];
  links: ProjectLink[];
  images: string[];
  imageStyle: "phone" | "motif";
};

export const projects: Project[] = [
  {
    id: "mahjong-mamas",
    name: "Mahjong Mamas",
    tagline: "Where every game night is a grand slam.",
    description:
      "A full-stack social club app shipped to the App Store and Google Play with 5★ ratings and 400+ monthly active users. Multi-tenant clubs with role-based access, invite codes, recurring game scheduling, RSVP/waitlist management, and in-game chat. Built with React Native (Expo) + Supabase (Postgres, Edge Functions, Realtime), plus Stripe for payments, push notifications, SSO, and calendar sync.",
    badge: "5★ on the App Store",
    emoji: "🀄",
    gradient: "from-teal via-violet to-bubblegum",
    accent: "#16c2a3",
    tags: ["React Native", "Expo", "Supabase", "Stripe", "EAS", "Realtime"],
    links: [
      { label: "mahjongmamas.app", href: "https://mahjongmamas.app" },
      {
        label: "iOS App",
        href: "https://apps.apple.com/app/id6762331619",
      },
      {
        label: "Android App",
        href: "https://play.google.com/store/apps/details?id=com.mahjonmamas.socialclub",
      },
    ],
    images: [
      "/projects/mahjong-home.png",
      "/projects/mahjong-reservation.png",
      "/projects/mahjong-create.png",
    ],
    imageStyle: "phone",
  },
  {
    id: "dinner-spinner",
    name: "Dinner Spinner",
    tagline: "Can't decide where to eat? Give it a spin.",
    description:
      "A restaurant-roulette app that picks local spots for you based on distance, price, and cuisine. Built with React Native (Expo) for iOS and Android, and on the web, backed by a Node/Express API hitting Google Maps. ~350 monthly active users.",
    badge: "4.3★ on the App Store",
    emoji: "🎡",
    gradient: "from-coral via-bubblegum to-sunshine",
    accent: "#ff6b6b",
    tags: ["React Native", "Expo", "TypeScript", "Node/Express", "Google Maps API", "EAS"],
    links: [
      { label: "Visit dinnerspinner.io", href: "https://dinnerspinner.io" },
      {
        label: "iOS App",
        href: "https://apps.apple.com/us/app/dinner-spinner/id6474522598",
      },
      {
        label: "Android App",
        href: "https://play.google.com/store/apps/details?id=io.dinnerspinner.dinspin",
      },
    ],
    images: ["/projects/dinspin-home.png", "/projects/dinspin-wheel.png"],
    imageStyle: "phone",
  },
  {
    id: "ibetyou",
    name: "iBetYou AI",
    tagline: "Friendly wagers, settled by AI judges.",
    description:
      "A cross-platform friendly-betting app with a 4-step bet wizard, character-themed AI judges powered by ElevenLabs TTS, a dice-based horse-race mini-game, friends & groups, a full bet lifecycle with ledger/settlement, and a native iMessage extension. Built on Expo React Native + Supabase with push notifications and deep linking. Reach out if you want to join the beta!",
    badge: "Closed Beta",
    emoji: "🎲",
    gradient: "from-violet via-coral to-sunshine",
    accent: "#7c5cff",
    tags: ["React Native", "TypeScript", "Supabase", "ElevenLabs TTS", "AI Judges", "iMessage"],
    links: [],
    images: ["/projects/ibetyou-onboarding.png", "/projects/ibetyou-friends.png"],
    imageStyle: "phone",
  },
  {
    id: "arbitrage",
    name: "Arbitrage Scanner",
    tagline: "Sniffing out spreads across prediction markets.",
    description:
      "A Python scanner that discovers overlapping markets between Polymarket and Kalshi, matches them conservatively with structural rules, subscribes to live quotes over WebSockets, and logs potential arbitrage spreads to CSV. Redis-backed with automatic rate-limit backoff.",
    badge: "Open Source",
    emoji: "📈",
    gradient: "from-sunshine via-teal to-violet",
    accent: "#ffc94d",
    tags: ["Python", "WebSockets", "Redis", "Polymarket", "Kalshi"],
    links: [
      { label: "View on GitHub", href: "https://github.com/agreenberg18/arbitrage" },
    ],
    images: [],
    imageStyle: "motif",
  },
];

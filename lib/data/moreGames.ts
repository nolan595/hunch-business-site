export interface ComingSoonGame {
  id: string;
  name: string;
  tagline: string;
  description: string;
  screenshotSrcs: string[]; // empty until screenshots are available
  gradient: string; // placeholder gradient when no screenshot
}

export const comingSoonGames: ComingSoonGame[] = [
  {
    id: "money-heist",
    name: "Money Heist",
    tagline: "Plan the perfect heist.",
    description:
      "A daily traffic driver built for scale. Players return each day to input their code and attempt to crack the safe — but one wrong move sounds the alarm. Crack it correctly, take the winnings inside and run.",
    screenshotSrcs: ["/games/money1.webp", "/games/money2.webp", "/games/money3.webp"],
    gradient: "from-amber-500/30 via-brand-violet to-brand-violet-dk",
  },
];

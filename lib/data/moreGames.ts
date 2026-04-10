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
    id: "pass-the-ball",
    name: "Pass the Ball",
    tagline: "Keep it moving.",
    description:
      "A social prediction game built around passing — players chain correct answers to keep a virtual ball alive. Miss and the chain breaks. Perfect for live match engagement.",
    screenshotSrcs: ["/games/Ptb2.png", "/games/Ptb1.png", "/games/Ptb3.jpg"],
    gradient: "from-brand-magenta/30 via-brand-violet to-brand-violet-dk",
  },
  {
    id: "connect3",
    name: "Connect3",
    tagline: "Three in a row.",
    description:
      "Grid-based prediction game. Pick three outcomes across three matches to complete a row, column, or diagonal. Simple to understand, surprisingly deep to master.",
    screenshotSrcs: ["/games/connect2.png", "/games/connect1.png", "/games/connect3.png"],
    gradient: "from-brand-cyan/30 via-brand-violet to-brand-violet-dk",
  },
  {
    id: "money-heist",
    name: "Money Heist",
    tagline: "Plan the perfect heist.",
    description:
      "A narrative-driven pick'em game inspired by the hit series. Players assemble a crew of predictions — each correct pick opens the vault a little further.",
    screenshotSrcs: ["/games/money1.png", "/games/money2.png", "/games/money3.png"],
    gradient: "from-amber-500/30 via-brand-violet to-brand-violet-dk",
  },
];

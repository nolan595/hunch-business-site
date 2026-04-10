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
      "A multiplayer F2P game built to drive Same Game Accumulators. Friends build a bet together, each picking a leg — then ride the result as a team. Bet together, win together.",
    screenshotSrcs: ["/games/Ptb2.png", "/games/Ptb1.png", "/games/Ptb3.jpg"],
    gradient: "from-brand-magenta/30 via-brand-violet to-brand-violet-dk",
  },
  {
    id: "connect3",
    name: "Connect3",
    tagline: "Three in a row.",
    description:
      "Bingo reimagined for sports. Players get a bingo sheet filled with betting markets instead of numbers — then watch it come alive as results roll in, with animations marking each hit. First to connect three wins.",
    screenshotSrcs: ["/games/connect2.png", "/games/connect1.png", "/games/connect3.png"],
    gradient: "from-brand-cyan/30 via-brand-violet to-brand-violet-dk",
  },
  {
    id: "money-heist",
    name: "Money Heist",
    tagline: "Plan the perfect heist.",
    description:
      "A daily traffic driver built for scale. Players return each day to input their code and attempt to crack the safe — but one wrong move sounds the alarm. Crack it correctly, take the winnings inside and run.",
    screenshotSrcs: ["/games/money1.png", "/games/money2.png", "/games/money3.png"],
    gradient: "from-amber-500/30 via-brand-violet to-brand-violet-dk",
  },
];

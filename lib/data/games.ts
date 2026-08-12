export interface GameStat {
  value: string;
  label: string;
}

export interface Game {
  id: string;
  name: string;
  tagline: string;
  description: string;
  color: "magenta" | "cyan";
  mockupSrcs: string[];
  stats: GameStat[];
}

// TODO: confirm all stat values with Hunch
export const games: Game[] = [
  {
    id: "hotstreak",
    name: "Hotstreak",
    tagline: "Don\u2019t break the chain.",
    description:
      "Daily prediction challenges that compound. Players return every day to keep their streak alive and chase the jackpot.",
    color: "cyan",
    mockupSrcs: [
      "/games/StreakLeft.webp",
      "/games/StreakMain.webp",
      "/games/StreakRight.webp",
    ],
    stats: [
      { value: "Daily", label: "active streaks" },
      { value: "Jackpot", label: "mechanic" },
      { value: "Native", label: "to Super app" },
    ],
  },
  {
    id: "superpredictor",
    name: "Superpredictor",
    tagline: "Predict the unpredictable.",
    description:
      "Pick\u2019em games tied to real fixtures. Players predict scores, stats, and outcomes \u2014 then win free bets, spins, and loyalty coins.",
    color: "cyan",
    mockupSrcs: [
      "/games/PredictorLeft.webp",
      "/games/PredictorMain.webp",
      "/games/PredictorRight.webp",
    ],
    stats: [
      { value: "44M+", label: "predictions placed" },
      { value: "85%", label: "WoW retention" },
      { value: "6", label: "live markets" },
    ],
  },
  {
    id: "pass-the-ball",
    name: "Pass the Ball",
    tagline: "Keep it moving.",
    description:
      "A multiplayer F2P game built to drive Same Game Accumulators. Friends build a bet together, each picking a leg \u2014 then ride the result as a team.",
    color: "magenta",
    mockupSrcs: [
      "/games/Ptb2.webp",
      "/games/Ptb1.webp",
      "/games/Ptb3.webp",
    ],
    stats: [
      { value: "Multiplayer", label: "bet building" },
      { value: "SGA", label: "driven mechanic" },
      { value: "Native", label: "to Super app" },
    ],
  },
  {
    id: "connect3",
    name: "Connect3",
    tagline: "Three in a row.",
    description:
      "Bingo reimagined for sports. Players get a bingo sheet filled with betting markets instead of numbers \u2014 then watch it come alive as results roll in. First to connect three wins.",
    color: "cyan",
    mockupSrcs: [
      "/games/connect2.webp",
      "/games/connect1.webp",
      "/games/connect3.webp",
    ],
    stats: [
      { value: "Bingo", label: "reimagined" },
      { value: "Live", label: "results tracking" },
      { value: "Native", label: "to Super app" },
    ],
  },
];

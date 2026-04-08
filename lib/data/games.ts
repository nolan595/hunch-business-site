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
    id: "superpredictor",
    name: "Superpredictor",
    tagline: "Predict the unpredictable.",
    description:
      "Pick\u2019em games tied to real fixtures. Players predict scores, stats, and outcomes \u2014 then win free bets, spins, and loyalty coins.",
    color: "magenta",
    mockupSrcs: [
      "/games/PredictorLeft.jpg",
      "/games/PredictorMain.png",
      "/games/PredictorRight.png",
    ],
    stats: [
      { value: "10M+", label: "predictions placed" },
      { value: "32%", label: "D7 retention" },
      { value: "6", label: "live markets" },
    ],
  },
  {
    id: "hotstreak",
    name: "Hotstreak",
    tagline: "Don\u2019t break the chain.",
    description:
      "Daily prediction challenges that compound. Players return every day to keep their streak alive and chase the jackpot.",
    color: "cyan",
    mockupSrcs: [
      "/games/StreakLeft.png",
      "/games/StreakMain.png",
      "/games/StreakRight.jpg",
    ],
    stats: [
      { value: "Daily", label: "active streaks" },
      { value: "Jackpot", label: "mechanic" },
      { value: "Native", label: "to Superbet app" },
    ],
  },
];

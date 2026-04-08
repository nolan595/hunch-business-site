export interface Region {
  code: string;
  name: string;
  flag: string;
  coordinates: [number, number];
  liveSince: number;
  partner: string;
}

// TODO: confirm liveSince years with Hunch
export const regions: Region[] = [
  { code: "BR", name: "Brazil", flag: "\u{1F1E7}\u{1F1F7}", coordinates: [-51.92, -14.23], liveSince: 2024, partner: "Superbet Brasil" },
  { code: "RO", name: "Romania", flag: "\u{1F1F7}\u{1F1F4}", coordinates: [24.97, 45.94], liveSince: 2021, partner: "Superbet Romania" },
  { code: "PL", name: "Poland", flag: "\u{1F1F5}\u{1F1F1}", coordinates: [19.13, 51.92], liveSince: 2023, partner: "Superbet Poland" },
  { code: "BE", name: "Belgium", flag: "\u{1F1E7}\u{1F1EA}", coordinates: [4.47, 50.50], liveSince: 2023, partner: "Superbet Belgium" },
  { code: "GR", name: "Greece", flag: "\u{1F1EC}\u{1F1F7}", coordinates: [21.82, 39.07], liveSince: 2024, partner: "Superbet Greece" },
  { code: "RS", name: "Serbia", flag: "\u{1F1F7}\u{1F1F8}", coordinates: [21.01, 44.02], liveSince: 2022, partner: "Superbet Serbia" },
];

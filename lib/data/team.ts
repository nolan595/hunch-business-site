export interface TeamMember {
  name: string;
  role: string;
  slug: string;
  bio: string;
  photoPosition?: string;
}

export const leadership: TeamMember[] = [
  { name: "Rob Egan", role: "Co-founder & MD", slug: "Rob", bio: "", photoPosition: "center 10%" },
  { name: "Mark Nolan", role: "Co-founder & CTO", slug: "markN", bio: "" },
  { name: "Renata Dima", role: "Head of Design & Research", slug: "Renata", bio: "" },
];

export const product: TeamMember[] = [
  { name: "Odhran O'Maoileidigh", role: "Senior Product Manager", slug: "Odhran", bio: "" },
  { name: "Andrew Tibot", role: "Senior Product Manager", slug: "tibot", bio: "" },
  { name: "Jack Barry", role: "Junior Product Manager", slug: "jack", bio: "" },
  { name: "Caitriona McNamara", role: "Junior Product Manager", slug: "Caitriona", bio: "" },
];

export const ops: TeamMember[] = [
  { name: "David Kiernan", role: "Ops Executive", slug: "david", bio: "" },
  { name: "Cian Cullen", role: "Ops Executive", slug: "cian", bio: "" },
];

// TODO: confirm bios and team photos with Hunch

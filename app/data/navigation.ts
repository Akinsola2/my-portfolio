export const navigation = [
  { label: "Home", href: "/", id: "home" },
  { label: "About", href: "/about", id: "about" },
  { label: "Skills", href: "/skills", id: "skills" },
  { label: "Projects", href: "/projects", id: "projects" },
  { label: "Contact", href: "/contact", id: "contact" },
] as const;

export type PageId = (typeof navigation)[number]["id"];

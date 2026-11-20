export type ProjectKind = "secure-notes" | "library" | "notes" | "weather";

export type Project = {
  name: string;
  description: string;
  technologies: string[];
  repositoryUrl: string;
  liveUrl?: string;
  coverImage: string;
  kind: ProjectKind;
};

export const projects: Project[] = [
  {
    name: "Secure Notes",
    description:
      "A private notes workspace with Supabase authentication, tags, and search, built for tutors.",
    technologies: ["Next.js", "React", "Supabase", "Tailwind CSS"],
    repositoryUrl: "https://github.com/Akinsola2/secure-notes-app.git",
    liveUrl: "https://secure-notes-app-3kc4-53ybb3jb9-akinsola-temiloluwa.vercel.app/",
    coverImage: "/projects/secure-notes.svg",
    kind: "secure-notes",
  },
  {
    name: "Library",
    description:
      "A library collection dashboard for browsing the collection and checking book availability.",
    technologies: ["Next.js", "React", "PostgreSQL", "Tailwind CSS"],
    repositoryUrl: "https://github.com/Akinsola2/library-app.git",
    liveUrl: "https://library-iy23-dizc0pf8w-akinsola-temiloluwa.vercel.app",
    coverImage: "/projects/library.svg",
    kind: "library",
  },
  {
    name: "Notes App",
    description:
      "A Markdown note-taking workspace with tags, search, editing, and local browser storage.",
    technologies: ["Next.js", "React", "React Markdown", "Tailwind CSS"],
    repositoryUrl: "https://github.com/Akinsola2/note-app.git",
    liveUrl: "https://notes-dp6bc3vdj-akinsola-temiloluwa.vercel.app",
    coverImage: "/projects/notes.svg",
    kind: "notes",
  },
  {
    name: "Weather App",
    description:
      "Search for a city to view its current temperature and a four-day forecast.",
    technologies: ["React", "TypeScript", "Vite", "Open-Meteo"],
    repositoryUrl: "https://github.com/Akinsola2/weather-app.git",
    liveUrl: "https://weather-hucz1l8en-akinsola-temiloluwa.vercel.app",
    coverImage: "/projects/weather.svg",
    kind: "weather",
  },
];

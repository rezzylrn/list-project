export type ProjectTag = "open-source" | "live" | "private";

export type Project = {
  slug: string;
  name: string;
  description: string;
  stack: string[];
  year: string;
  featured?: boolean;
  tags: ProjectTag[];
  links: {
    label: string;
    href: string;
    primary?: boolean;
  }[];
  note?: string;
};

export const projects: Project[] = [
  {
    slug: "vibe-test",
    name: "Vibe Test",
    description:
      "Platform ujian akademik untuk siswa, dengan materi latihan, pembahasan, dan penjelasan berbantuan AI setelah pengerjaan.",
    stack: ["Next.js", "AI", "CSS"],
    year: "2026",
    featured: true,
    tags: ["live", "private"],
    links: [
      {
        label: "Open Site",
        href: "https://ujian.darksecret.cloud",
        primary: true,
      },
    ],
    note: "Cocok untuk evaluasi materi dan pembelajaran mandiri."
  },
  {
    slug: "builder-apk-webview",
    name: "Builder APK (WebView)",
    description:
      "Bot Telegram untuk membuat APK berbasis WebView dari URL, sehingga website bisa dipaketkan jadi aplikasi Android tanpa setup dan compile manual.",
    stack: ["Telegram Bot", "Node.js", "Android WebView"],
    year: "2026",
    featured: false,
    tags: ["open-source"],
    links: [
      {
        label: "GitHub",
        href: "https://github.com/rezzylrn/Converter-Url-To-Apk",
        primary: true,
      },
    ],
    note: "Open source dan bisa dikembangkan atau di-fork."
  },
];

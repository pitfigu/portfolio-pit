const config = {
  title: "pitfigu | Full Stack Developer",
  description: {
    long: "Explore the portfolio of pitfigu, a full-stack developer and process automation engineer based in Barcelona. From enterprise automation tools and AI-powered Excel add-ins to trading engines and ticket booking platforms — discover innovative projects built with Python, TypeScript, React, and more.",
    short:
      "Portfolio of pitfigu — full-stack developer building automation tools, web apps, and AI-powered solutions.",
  },
  keywords: [
    "pitfigu",
    "portfolio",
    "full-stack developer",
    "process automation",
    "web development",
    "Python",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "NestJS",
    "Docker",
    "AWS",
    "AI tools",
    "VBA",
    "Barcelona",
  ],
  author: "pit figu",
  email: "pit@figueiras.de",
  site: "https://pitfigueiras.vercel.app",

  // for github stars button
  githubUsername: "pitfigu",
  githubRepo: "3d-portfolio",

  get ogImg() {
    return this.site + "/assets/seo/og-image.png";
  },
  social: {
    twitter: "",
    linkedin: "",
    instagram: "https://www.instagram.com/pitfigu",
    facebook: "",
    github: "https://github.com/pitfigu",
  },
};
export { config };

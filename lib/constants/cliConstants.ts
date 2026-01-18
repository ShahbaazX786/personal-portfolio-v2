import { AuthorDetails } from "./AuthorConstant";

export const cliCommands = {
  /* ---------- Identity ---------- */
  whoami: AuthorDetails.name,

  profession: AuthorDetails.title,

  /* ---------- Help ---------- */
  help: () =>
    `
Available commands:

  whoami        - About me
  profession   - Current role
  skills       - Technical skills
  work         - Work experience
  projects     - Key projects
  socials      - Social links
  echo <text>  - Echo input
  clear        - Clear terminal
`.trim(),

  /* ---------- Echo ---------- */
  echo: (args: string[]) => args.join(" "),

  /* ---------- Skills (table-like) ---------- */
  skills: () =>
    `
+-------------------+-------------------------------+
| Category          | Technologies                  |
+-------------------+-------------------------------+
| Frontend          | React, Next.js, Angular       |
| Backend           | Node.js, NestJS, Spring Boot  |
| Languages         | TypeScript, Java, JavaScript  |
| Databases         | MongoDB, PostgreSQL           |
| Styling           | Tailwind, CSS, Shadcn UI      |
| Tools             | Git, Docker, Postman          |
+-------------------+-------------------------------+
`.trim(),

  /* ---------- Work experience ---------- */
  work: () =>
    `
+-------------------+----------------------+----------+
| Company           | Role                 | Years    |
+-------------------+----------------------+----------+
| Fintech Startup   | Full Stack Engineer  | 2022-Now |
| SaaS Company      | Frontend Engineer    | 2020-22  |
+-------------------+----------------------+----------+
`.trim(),

  /* ---------- Projects ---------- */
  projects: () =>
    `
+--------------------+--------------------------------------+
| Project            | Description                          |
+--------------------+--------------------------------------+
| Portfolio V2 | MacOS-style portfolio in Next.js       |
| GloboTalk          | Real-time chat & translation app     |
| Admin Dashboard    | Role-based analytics dashboard       |
+--------------------+--------------------------------------+
`.trim(),

  /* ---------- Socials ---------- */
  socials: () =>
    `
GitHub   : https://github.com/
LinkedIn : https://linkedin.com/in/
Twitter  : https://twitter.com/
`.trim(),
};

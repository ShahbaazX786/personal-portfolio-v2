import { AuthorDetails } from "./AuthorConstant";
import { socials } from "./SocialConstants";

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
| Frontend          | Angular, React, Next.js,      |
| Backend           | Node.js, Express.js, NestJS,  |
| Languages         | TypeScript, Java, JavaScript  |
| Databases         | MongoDB, PostgreSQL, Redis    |
| Styling           | CSS, SCSS, Tailwind           |
| Styling Libs      | MUI, ShadcnUI, DaisyUI etc    |
| Tools             | Git, Docker, Postman          |
| State Management  | Redux, Zustand                |
| Testing           | Jest, RTL, Jasmine            |
| Other             | A11y, i18n, SEO, Web vitals   |
+-------------------+-------------------------------+
`.trim(),

  /* ---------- Work experience ---------- */
  work: () =>
    `
+-------------------------------+----------------------+----------+
| Company                       | Role                 | Years(4) |
+-------------------------------+----------------------+----------+
| Accenture (Arizona Client)    | Full Stack Engineer  | 2022-25  |
| Accenture                     | Frontend Engineer    | 2021-22  |
+-------------------------------+----------------------+----------+
`.trim(),

  /* ---------- Projects ---------- */
  projects: () =>
    `

  \n>>>
  
Featured Projects (3)
+--------------------+-------------------------------------------------+
| Project            | Description                                     |
+--------------------+-------------------------------------------------+
| GloboTalk          | 1-to-1 Real-time chat & translation app         |
| CarHuz             | Used Car Retailing & Rental SaaS app.           |
| Media.ai           | AI media generation app based on OPEN AI API    |
+--------------------+-------------------------------------------------+
Note: For More Detailed Projects checkout the finder.
`.trim(),

  /* ---------- Socials ---------- */
  socials: () =>
    `
  LinkedIn : ${socials[0].link}
GitHub   : ${socials[1].link}
Twitter  : ${socials[2].link}
Email: ${socials[3].link.slice(7)}
`.trim(),
  clear: () => "Yet to implement this command... try other commands",
};

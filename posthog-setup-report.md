# PostHog post-wizard report

The wizard has completed a PostHog integration for this Next.js portfolio site. PostHog is initialized via `instrumentation-client.ts` (the recommended approach for Next.js 15.3+), which runs before page hydration on the client. Four key user interaction events are captured across the Hero, Nav, Projects, and Contact sections. Environment variables are stored in `.env.local`.

| Event | Description | File |
|---|---|---|
| `hero_cta_clicked` | User clicks a CTA button in the Hero section (see work, say hello, github, linkedin) | `components/Hero.tsx` |
| `nav_link_clicked` | User clicks a nav link to navigate to a section | `components/Nav.tsx` |
| `project_link_clicked` | User clicks an external link on a project card (live site or app store) | `components/ProjectCard.tsx` |
| `contact_link_clicked` | User clicks the email, GitHub, or LinkedIn link in the Contact section | `components/Contact.tsx` |

## Next steps

We've built some insights and a dashboard to keep an eye on visitor behavior:

- [Analytics basics (wizard) — Dashboard](https://us.posthog.com/project/472316/dashboard/1718255)
- [Portfolio engagement overview](https://us.posthog.com/project/472316/insights/Z1Kfv5ju) — All 4 event types over time (line chart)
- [Hero CTA clicks by button](https://us.posthog.com/project/472316/insights/3NARl3fC) — Which hero buttons visitors click most
- [Project link clicks by project](https://us.posthog.com/project/472316/insights/eKEYBjG3) — Which projects get the most click-throughs
- [Contact link clicks by type](https://us.posthog.com/project/472316/insights/qBBlqmMp) — Email vs GitHub vs LinkedIn

## Verify before merging

- [ ] Run a full production build (`npm run build`) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `NEXT_PUBLIC_POSTHOG_PROJECT_TOKEN` and `NEXT_PUBLIC_POSTHOG_HOST` to `.env.example` and any monorepo/bootstrap scripts so collaborators know what to set.
- [ ] Wire source-map upload (`posthog-cli sourcemap` or your bundler's upload step) into CI so production stack traces de-minify.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.

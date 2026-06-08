export type Role = {
  company: string;
  title: string;
  period: string;
  emoji: string;
  color: string;
  highlight: string;
};

export const experience: Role[] = [
  {
    company: "Uber",
    title: "Partner Engineer",
    period: "Oct 2023 - Present",
    emoji: "🚗",
    color: "#1f1235",
    highlight:
      "Lead 0-to-1 enterprise delivery integrations and build internal tooling that helps partners launch and scale.",
  },
  {
    company: "Branch",
    title: "Solutions Engineer / Technical Account Manager",
    period: "Jan 2023 - Oct 2023",
    emoji: "🌿",
    color: "#16c2a3",
    highlight:
      "Helped enterprise clients integrate and troubleshoot mobile and web SDKs across iOS, Android, and web.",
  },
  {
    company: "Twitter",
    title: "Partner Engineer II (Sr. Solutions Engineer)",
    period: "May 2022 - Jan 2023",
    emoji: "🐦",
    color: "#7c5cff",
    highlight:
      "Supported Twitter's largest partners across the Ads API ecosystem with hands-on technical guidance.",
  },
  {
    company: "Dun & Bradstreet",
    title: "Technical Implementation Consultant",
    period: "Feb 2020 - May 2022",
    emoji: "📊",
    color: "#ff6b6b",
    highlight:
      "Delivered marketing technology implementations and built internal tools and web apps to automate manual workflows.",
  },
  {
    company: "3Q Digital",
    title: "Analyst → Data Technology Manager, Decision Sciences",
    period: "Jul 2017 - Feb 2020",
    emoji: "📈",
    color: "#ffc94d",
    highlight:
      "Led a team delivering analytics audits and custom tagging solutions for large enterprises.",
  },
];

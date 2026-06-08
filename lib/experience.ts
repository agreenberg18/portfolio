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
    highlight: "Led 0-to-1 enterprise delivery integrations.",
  },
  {
    company: "Branch",
    title: "Solutions Engineer / Technical Account Manager",
    period: "Jan 2023 - Oct 2023",
    emoji: "🌿",
    color: "#16c2a3",
    highlight:
      "Debugged JavaScript, Swift & Java across iOS, Android, and Web SDKs.",
  },
  {
    company: "Twitter",
    title: "Partner Engineer II (Sr. Solutions Engineer)",
    period: "May 2022 - Jan 2023",
    emoji: "🐦",
    color: "#7c5cff",
    highlight:
      "Supported Twitter's largest partners (Amazon, Walmart, Publicis) on the Ads API ecosystem and saved $14MM by surfacing an undocumented endpoint and shipping docs plus code snippets.",
  },
  {
    company: "Dun & Bradstreet",
    title: "Technical Implementation Consultant",
    period: "Feb 2020 - May 2022",
    emoji: "📊",
    color: "#ff6b6b",
    highlight:
      "Built Python scripts and React/Vue web apps to automate processes (20+ business hours saved per month) and a GTM community tag integrating Visitor Intelligence into Google Analytics.",
  },
  {
    company: "3Q Digital",
    title: "Analyst → Data Technology Manager, Decision Sciences",
    period: "Jul 2017 - Feb 2020",
    emoji: "📈",
    color: "#ffc94d",
    highlight:
      "Led a team delivering Tag Management & Google Analytics audits and custom JavaScript tagging solutions for clients like LinkedIn and Intuit.",
  },
];

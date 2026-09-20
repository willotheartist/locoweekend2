import Link from "next/link";
import { EditorialSectionPage, sectionMetadata } from "@/components/site/EditorialSectionPage";
const BUSINESS_TOPICS = [
  {
    title: "MVPs",
    description: "What to build, what it costs, how long it takes and who should build it.",
    links: [
      {
        label: "Best MVP development companies in the UK",
        href: "/business/best-mvp-development-companies-uk-2026",
      },
      {
        label: "How much does an MVP cost?",
        href: "/business/how-much-does-an-mvp-cost-uk-2026",
      },
      {
        label: "How long does an MVP take?",
        href: "/business/how-long-does-it-take-to-build-an-mvp-uk-2026",
      },
      {
        label: "Freelancer vs agency vs in-house",
        href: "/business/freelancer-vs-agency-vs-in-house-mvp-uk-2026",
      },
      {
        label: "MVP vs prototype vs proof of concept",
        href: "/business/mvp-vs-prototype-vs-proof-of-concept-uk-2026",
      },
    ],
  },
  {
    title: "SaaS",
    description: "UK SaaS development partners, pricing, architecture and founder planning.",
    links: [
      {
        label: "Best SaaS development companies in the UK",
        href: "/business/best-saas-development-companies-uk-2026",
      },
      {
        label: "How much does a SaaS MVP cost?",
        href: "/business/how-much-does-a-saas-mvp-cost-uk-2026",
      },
    ],
  },
  {
    title: "AI",
    description: "Production AI products, RAG, agents, model costs and UK development teams.",
    links: [
      {
        label: "Best AI app development companies in the UK",
        href: "/business/best-ai-app-development-companies-uk-2026",
      },
      {
        label: "How much does it cost to build an AI app?",
        href: "/business/how-much-does-it-cost-to-build-an-ai-app-uk-2026",
      },
    ],
  },
  {
    title: "Web & custom software",
    description: "Web applications, bespoke systems and broader digital-product partners.",
    links: [
      {
        label: "Best web app development companies in the UK",
        href: "/business/best-web-app-development-companies-uk-2026",
      },
      {
        label: "Best custom software companies in the UK",
        href: "/business/best-custom-software-development-companies-uk-2026",
      },
      {
        label: "Best UK digital product companies",
        href: "/business/best-uk-digital-product-companies-2026",
      },
      {
        label: "Who owns the code an agency builds?",
        href: "/business/who-owns-the-code-when-an-agency-builds-your-app-uk-2026",
      },
    ],
  },
  {
    title: "Apps & marketplaces",
    description: "Mobile products, marketplace builds and the commercial realities behind them.",
    links: [
      {
        label: "Best app development companies in London",
        href: "/business/best-app-development-companies-london-2026",
      },
      {
        label: "How much does it cost to build an app?",
        href: "/business/how-much-does-it-cost-to-build-an-app-uk-2026",
      },
      {
        label: "Best marketplace development companies in the UK",
        href: "/business/best-marketplace-development-companies-uk-2026",
      },
    ],
  },
] as const;

export const metadata = sectionMetadata("business");
export default function Page() { return <EditorialSectionPage id="business">
        <nav
          aria-label="Business research topics"
          className="border-b border-grey-line py-8"
        >
          <div className="mb-5 flex items-end justify-between gap-6">
            <div>
              <div className="font-mono text-[10px] font-bold tracking-[0.18em] uppercase text-grey-text">
                Software-building research desk
              </div>
              <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-semibold tracking-[-0.02em] text-ink">
                Start with the problem you are trying to solve
              </h2>
            </div>
          </div>

          <div className="grid gap-px border border-black/15 bg-black/15 sm:grid-cols-2 lg:grid-cols-5">
            {BUSINESS_TOPICS.map((topic) => (
              <section key={topic.title} className="bg-paper p-4 sm:p-5">
                <h3 className="font-mono text-[11px] font-bold tracking-[0.14em] uppercase text-ink">
                  {topic.title}
                </h3>
                <p className="mt-2 font-crimson text-[16px] leading-[1.45] text-grey-dark">
                  {topic.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {topic.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="font-crimson text-[15px] leading-snug text-ink underline decoration-1 underline-offset-2 hover:text-grey-dark"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </nav>

</EditorialSectionPage>; }

import type { Metadata } from 'next';

import { SolutionsByUseCasePage } from '@/module/solutions';

export const metadata: Metadata = {
  title: 'Defense-Side Pitching & Patent Litigation Business Development | &AI',
  description:
    'Identify pitch-worthy patent cases faster with a personalized litigation opportunities feed, team matching, and complaint-to-pitch drafting. Generate pitch decks and outreach materials in hours.',
};

const challenges = [
  'Docket monitoring is necessary, but pitching is the hard part',
  'Defense teams lose time stitching together: case signal → relevance → partner match → outreach content → deck formatting',
  "Traditional tools provide filings but don't finish the job",
  'First-mover advantage goes to whoever can act fastest',
];

const workflowSteps = [
  {
    title: 'Opportunities',
    description:
      'Personalized opportunities feed, not a generic report. Built to answer one question quickly: "Is this worth pitching?" Use a feed designed for defense-side BD triage—paired with notifications so your team can act quickly.',
    image: '/feature-2-1.png',
  },
  {
    title: 'Team matching',
    description:
      "Route matters to the right partner instantly. Defense BD isn't just finding a case—it's choosing who should reach out. Opportunities supports team evaluation so one person can scan and triage, while the right partner gets the right case context.",
    image: '/feature-2-2.png',
  },
  {
    title: 'Pitch Decks',
    description:
      'Complaint-to-pitch deck in one workflow. Upload a complaint, select a template, choose depth, and generate a polished pitch package—purpose-built around litigation intake.',
    image: '/3.1.png',
  },
  {
    title: 'Drafts',
    description:
      'Generate the outreach materials your team actually sends. Templates and collaborative editing for pitch letters, client emails, and longer-form pitch memos—grounded in the case context.',
    image: '/3.2.png',
  },
];

const products = [
  {
    name: 'Business Development',
    href: '/product/patent-litigation-business-development',
    description: 'Personalized opportunities feed and pitch tools.',
    image: '/feature-2-1.png',
  },
  {
    name: 'Prior Art Search',
    href: '/product/prior-art-search',
    description: 'Rapid searches to enrich pitch materials.',
    image: '/1.1.png',
  },
  {
    name: 'Claim Charts',
    href: '/product/claim-charts',
    description: 'Preliminary analysis for pitch presentations.',
    image: '/3.1.png',
  },
];

const relatedUseCases = [
  { name: 'Defense Litigation', href: '/solutions/defense-litigation' },
  { name: 'Plaintiff Litigation', href: '/solutions/plaintiff-litigation' },
  { name: 'Litigation Funding', href: '/solutions/litigation-funding' },
];

export default function DefenseSidePitchingPage() {
  return (
    <SolutionsByUseCasePage
      badge="Use Case"
      h1="Defense-Side"
      h1Highlight="Pitching"
      subheading="Patent litigation business development—faster, smarter, first-to-market."
      description="Defense-side BD is a speed game: spot the right new cases early, triage them to the right partner, and send polished outreach before the window closes. Opportunities + Drafts + Pitch Decks compress that workflow into one system—fast enough for pitches, strong enough for review."
      challengeTitle="The problem"
      challenges={challenges}
      workflowTitle="How &AI works for defense-side BD"
      workflowDescription="Find the case → confirm fit → generate the pitch"
      workflowSteps={workflowSteps}
      productsTitle="Products for business development"
      products={products}
      relatedUseCases={relatedUseCases}
      faqs={[
        {
          question: 'What is "defense-side pitching" in patent litigation?',
          answer:
            'Defense-side pitching is the business development workflow of identifying new patent cases worth pursuing and reaching potential defendants quickly with a credible pitch.',
        },
        {
          question:
            'How is this different from PACER or generic docket alerts?',
          answer:
            'PACER provides electronic public access to federal court records; docket alerts and current awareness products summarize and notify. &AI adds personalization, team matching, and complaint-to-pitch drafting to execute the outreach faster.',
        },
        {
          question: 'Is this "law firm BD automation"?',
          answer:
            'Yes—Opportunities helps teams discover and triage pitch-worthy matters, and Drafts/Pitch Decks generate the outreach materials so teams can act without rebuilding the same pitch workflow every time.',
        },
        {
          question: 'Can &AI generate a pitch deck from a complaint?',
          answer:
            "That's the complaint-to-pitch deck workflow: upload the complaint, choose a template, and generate a draft pitch package that your team can refine.",
        },
      ]}
    />
  );
}

import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Product Overview',
  description:
    'Explore the AI workspace for patent litigation. Tools for infringement detection, invalidity analysis, claim charts, prior art search, and business development.',
};

export default function ProductLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}

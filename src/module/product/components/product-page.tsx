'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { Button } from '@/common/components/button';
import { Footer } from '@/common/components/footer';
import { ProductCard } from '@/common/components/product-card';
import { SubHeader } from '@/common/components/subheader';
import { cn } from '@/common/functions/cn';
import { BrandColor } from '@/common/types/common';

import { CTASection } from '@/module/cta';

export interface FAQ {
  question: string;
  answer: string;
}

export interface RelatedProduct {
  name: string;
  href: string;
  image?: string;
  description?: string;
}

export interface BreadcrumbItem {
  name: string;
  href: string;
}

// Flexible content section types
export type ContentSectionType =
  | 'bullets' // Simple bullet list (no boxes)
  | 'numbered-steps' // Numbered workflow steps
  | 'list' // Simple list with checkmarks (no boxes)
  | 'tags' // Pill/tag style items
  | 'paragraphs' // Text paragraphs
  | 'feature-cards' // Cards with bold title + description
  | 'feature-list'; // Bold title + description as simple list (no boxes)

export type ImageColor = 'gray' | 'blue' | 'purple' | 'orange';

export interface ContentSection {
  label?: string; // Small uppercase label above title
  title: string;
  subtitle?: string;
  description?: string; // Body text paragraph between subtitle and items
  type: ContentSectionType;
  items: string[] | { title: string; description: string }[];
  image?: string; // Optional image for side-by-side layout
  imageColor?: ImageColor; // Background color for styled image container (gray, blue, purple, orange)
  background?: 'default' | 'light'; // 'light' adds the gray background
  centered?: boolean; // Center the section instead of alternating left/right
  bulletStyle?: 'bullet' | 'check'; // For 'bullets' type: circle bullet or checkmark (default: check)
  dividerBelow?: boolean; // Add a horizontal line below the section
  dividerAbove?: boolean; // Add a horizontal line above the section
  cardGroup?: string; // Group sections with same cardGroup into a card on grid background
}

export interface ComparisonTable {
  title?: string;
  description?: string;
  columns: { name: string; highlight?: boolean }[];
  rows: {
    feature: string;
    values: (string | boolean)[];
  }[];
  inCardGroup?: boolean; // Wrap in card on grid background
}

export interface ProductPageProps {
  // Hero
  h1: string;
  h1HighlightPrefix?: string; // Regular text before the highlight (e.g., "for ")
  h1Highlight?: string;
  subheading?: string;
  valueProp: string;

  // CTAs (optional customization)
  primaryCta?: { label: string; href: string };
  secondaryCta?: { label: string; href: string };

  // Flexible content sections - each page defines its own
  sections: ContentSection[];

  // Comparison table (optional)
  comparisonTable?: ComparisonTable;

  // FAQ (consistent across pages)
  faqs: FAQ[];

  // Internal links
  relatedProducts: RelatedProduct[];

  // Breadcrumbs (kept for schema but not displayed)
  breadcrumbs?: BreadcrumbItem[];
}

export function ProductPage({
  h1,
  h1HighlightPrefix,
  h1Highlight,
  subheading,
  valueProp,
  primaryCta = { label: 'Book demo', href: '/book-demo' },
  secondaryCta = { label: 'See pricing', href: '/pricing' },
  sections,
  comparisonTable,
  faqs,
  relatedProducts,
}: ProductPageProps) {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section - Left Aligned */}
      <section className="mx-auto w-full px-4 py-16 md:px-6 md:py-20 xl:max-w-[80rem] xl:px-8 xl:py-24">
        <div className="max-w-4xl">
          <Link className="mb-6 flex w-fit" href="/product">
            <SubHeader brand={BrandColor.PRIMARY} title="Product" />
          </Link>
          <h1 className="text-element-high-em text-4xl md:text-5xl xl:text-6xl">
            {h1Highlight ? (
              <>
                {h1}
                {h1HighlightPrefix ? (
                  <span className="block">
                    {h1HighlightPrefix}
                    <span className="font-martina italic">{h1Highlight}</span>
                  </span>
                ) : (
                  <>
                    {' '}
                    <span className="font-martina italic">{h1Highlight}</span>
                  </>
                )}
              </>
            ) : (
              h1
            )}
          </h1>
          {subheading && (
            <p className="text-element-high-em mt-4 text-xl font-medium md:text-2xl">
              {subheading}
            </p>
          )}
          <div className="text-element-mid-em mt-6 space-y-4 text-lg xl:text-xl">
            {valueProp.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button href={primaryCta.href}>{primaryCta.label}</Button>
            <Button href={secondaryCta.href} variant="secondary">
              {secondaryCta.label}
            </Button>
          </div>
        </div>
      </section>

      {/* Dynamic Content Sections - Alternating */}
      {(() => {
        const elements: React.ReactNode[] = [];
        let i = 0;
        let globalIndex = 0;

        while (i < sections.length) {
          const section = sections[i];

          // Check if this section starts a card group
          if (section.cardGroup) {
            const groupId = section.cardGroup;
            const groupSections: { section: ContentSection; index: number }[] =
              [];

            // Collect all sections in this group
            while (i < sections.length && sections[i].cardGroup === groupId) {
              groupSections.push({ section: sections[i], index: globalIndex });
              i++;
              globalIndex++;
            }

            // Render the card group with grid background
            elements.push(
              <section
                key={`card-group-${groupId}`}
                className="relative py-16 md:py-20"
              >
                {/* Grid Background */}
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-0"
                >
                  <div className="relative h-full w-full [background-image:linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_5%,rgba(0,0,0,1)_95%,rgba(0,0,0,0)_100%)] [background-size:20px_20px] [background-position:0_0] [background-repeat:repeat] [mask-repeat:no-repeat] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_5%,rgba(0,0,0,1)_95%,rgba(0,0,0,0)_100%)] [-webkit-mask-repeat:no-repeat]" />
                </div>

                {/* Card Container */}
                <div className="relative z-10 mx-auto w-full px-4 md:px-6 xl:max-w-[80rem] xl:px-8">
                  <div className="bg-background-lighter rounded-xs border border-gray-300 shadow shadow-gray-400/10">
                    {groupSections.map(({ section: groupSection, index }, gi) => (
                      <ContentSectionRenderer
                        key={index}
                        inCard
                        index={index}
                        isFirstInCard={gi === 0}
                        isLastInCard={gi === groupSections.length - 1}
                        section={groupSection}
                      />
                    ))}
                  </div>
                </div>
              </section>,
            );
          } else {
            // Render single section normally
            elements.push(
              <ContentSectionRenderer
                key={globalIndex}
                index={globalIndex}
                section={section}
              />,
            );
            i++;
            globalIndex++;
          }
        }

        return elements;
      })()}

      {/* Comparison Table */}
      {comparisonTable && (
        <section
          className={`relative hidden py-16 md:block md:py-20 xl:py-24 ${!comparisonTable.inCardGroup ? 'mx-auto w-full px-4 md:px-6 xl:max-w-[80rem] xl:px-8' : ''}`}
        >
          {/* Grid Background (only when inCardGroup) */}
          {comparisonTable.inCardGroup && (
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 z-0"
            >
              <div className="relative h-full w-full [background-image:linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_5%,rgba(0,0,0,1)_95%,rgba(0,0,0,0)_100%)] [background-size:20px_20px] [background-position:0_0] [background-repeat:repeat] [mask-repeat:no-repeat] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_5%,rgba(0,0,0,1)_95%,rgba(0,0,0,0)_100%)] [-webkit-mask-repeat:no-repeat]" />
            </div>
          )}

          <div
            className={
              comparisonTable.inCardGroup
                ? 'relative z-10 mx-auto w-full px-4 md:px-6 xl:max-w-[80rem] xl:px-8'
                : ''
            }
          >
            <div
              className={
                comparisonTable.inCardGroup
                  ? 'bg-background-lighter rounded-xs border border-gray-300 px-6 py-12 shadow shadow-gray-400/10 md:px-16 md:py-16'
                  : 'mx-auto max-w-4xl'
              }
            >
              {comparisonTable.title && (
                <h2 className="font-martina text-element-high-em text-4.5xl mb-4 text-center xl:text-5xl">
                  {comparisonTable.title}
                </h2>
              )}
              {comparisonTable.description && (
                <p className="text-element-mid-em mb-12 text-center text-lg">
                  {comparisonTable.description}
                </p>
              )}
              <div
                className={`overflow-x-auto ${!comparisonTable.description ? 'mt-8' : ''} ${comparisonTable.inCardGroup ? 'mx-auto max-w-4xl' : ''}`}
              >
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b-2 border-gray-300">
                      <th className="text-element-high-em px-4 py-4 text-left font-semibold">
                        Feature
                      </th>
                      {comparisonTable.columns.map((col, idx) => (
                        <th
                          key={idx}
                          className={`px-4 py-4 text-center font-semibold ${
                            col.highlight
                              ? 'bg-orange-50 text-orange-600'
                              : 'text-element-high-em'
                          }`}
                        >
                          {col.name}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonTable.rows.map((row, rowIdx) => (
                      <tr
                        key={rowIdx}
                        className="border-b border-gray-200 last:border-b-0"
                      >
                        <td className="text-element-mid-em px-4 py-4">
                          {row.feature}
                        </td>
                        {row.values.map((value, colIdx) => (
                          <td
                            key={colIdx}
                            className={`px-4 py-4 text-center ${
                              comparisonTable.columns[colIdx]?.highlight
                                ? 'bg-orange-50/50'
                                : ''
                            }`}
                          >
                            {typeof value === 'boolean' ? (
                              value ? (
                                <svg
                                  className="mx-auto h-5 w-5 text-green-600"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth={2}
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    d="M5 13l4 4L19 7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                  />
                                </svg>
                              ) : (
                                <span className="text-gray-400">—</span>
                              )
                            ) : (
                              <span className="text-element-mid-em">
                                {value}
                              </span>
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {faqs.length > 0 && (
        <section className="mx-auto w-full px-4 py-16 md:px-6 md:py-20 xl:max-w-[80rem] xl:px-8 xl:py-24">
          <div className="grid gap-12 lg:grid-cols-[1fr_2fr] lg:gap-16 xl:gap-24">
            <div>
              <h2 className="font-martina text-element-high-em text-4.5xl xl:text-5xl">
                Frequently asked questions
              </h2>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div
                  key={index}
                  className="border-gray-dark/10 border-b last:border-b-0"
                >
                  <button
                    aria-expanded={openFAQ === index}
                    className="text-element-high-em hover:text-element-high-em/70 flex w-full items-start justify-between gap-4 py-6 text-left transition-colors"
                    onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
                  >
                    <span className="text-lg font-medium">{faq.question}</span>
                    <span className="mt-1 flex size-6 shrink-0 items-center justify-center transition-transform duration-200">
                      {openFAQ === index ? (
                        <svg
                          className="size-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M5 12h14"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      ) : (
                        <svg
                          className="size-6"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          viewBox="0 0 24 24"
                        >
                          <path
                            d="M12 5v14m-7-7h14"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      )}
                    </span>
                  </button>
                  <div
                    className="overflow-hidden transition-all duration-200"
                    style={{
                      maxHeight: openFAQ === index ? '500px' : '0px',
                    }}
                  >
                    <div className="text-element-mid-em pb-6 text-base">
                      {faq.answer.split('\n\n').map((paragraph, i) => (
                        <p key={i} className={i > 0 ? 'mt-4' : ''}>
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="relative py-16 md:py-20">
          {/* Grid Background */}
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 z-0"
          >
            <div className="relative h-full w-full [background-image:linear-gradient(to_right,rgba(0,0,0,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.06)_1px,transparent_1px)] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_5%,rgba(0,0,0,1)_95%,rgba(0,0,0,0)_100%)] [background-size:20px_20px] [background-position:0_0] [background-repeat:repeat] [mask-repeat:no-repeat] [-webkit-mask-image:linear-gradient(to_bottom,rgba(0,0,0,0)_0%,rgba(0,0,0,1)_5%,rgba(0,0,0,1)_95%,rgba(0,0,0,0)_100%)] [-webkit-mask-repeat:no-repeat]" />
          </div>

          <div className="relative z-10 mx-auto w-full px-4 md:px-6 xl:max-w-[80rem] xl:px-8">
            <div className="bg-background-lighter rounded-xs border border-gray-300 px-6 py-12 shadow shadow-gray-400/10 md:px-16 md:py-16">
              <h3 className="text-element-mid-em mb-10 text-center text-sm font-medium tracking-wide uppercase">
                Explore the platform
              </h3>
              <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {relatedProducts.map((product) => (
                  <ProductCard
                    key={product.href}
                    description={product.description ?? ''}
                    href={product.href}
                    image={product.image ?? ''}
                    name={product.name}
                    variant="compact"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <CTASection showPricing />

      <Footer />
    </main>
  );
}

// Helper to get image container background and gradient classes
function getImageColorClasses(color?: ImageColor) {
  switch (color) {
    case 'blue':
      return {
        bg: 'bg-feature-2/50',
        gradient: 'to-feature-2',
      };
    case 'purple':
      return {
        bg: 'bg-feature-3/50',
        gradient: 'to-feature-3',
      };
    case 'orange':
      return {
        bg: 'bg-[#f5e6d3]',
        gradient: 'to-[#f5e6d3]',
      };
    case 'gray':
    default:
      return {
        bg: 'bg-feature-1',
        gradient: 'to-feature-1',
      };
  }
}

// Styled image container component matching features section style
function StyledImage({
  src,
  alt,
  color,
}: {
  src: string;
  alt: string;
  color?: ImageColor;
}) {
  const { bg, gradient } = getImageColorClasses(color);

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-sm border border-gray-200 pt-4 pl-4 md:pt-8 md:pl-8',
        bg,
      )}
    >
      <div className="relative h-[280px] w-full md:h-[400px]">
        <Image
          fill
          alt={alt}
          className="object-cover object-top-left"
          sizes="(max-width: 1024px) 100vw, 50vw"
          src={src}
        />
      </div>
      {/* Gradient overlay */}
      <div
        className={cn(
          'pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-100%',
          gradient,
        )}
      />
    </div>
  );
}

// Render different section types with alternating alignment
function ContentSectionRenderer({
  section,
  index,
  inCard,
  isFirstInCard,
  isLastInCard,
}: {
  section: ContentSection;
  index: number;
  inCard?: boolean;
  isFirstInCard?: boolean;
  isLastInCard?: boolean;
}) {
  const isEven = index % 2 === 0;
  const hasImage = !!section.image;
  const bgClass =
    section.background === 'light'
      ? 'bg-background-lighter border-y border-gray-200'
      : '';

  // When inside a card, render without the outer section wrapper
  if (inCard) {
    const cardPadding = `px-6 py-12 md:px-16 md:py-16 ${!isFirstInCard ? 'border-t border-dashed border-gray-300' : ''}`;

    if (hasImage) {
      return (
        <div className={cardPadding}>
          <div
            className={`flex flex-col items-center gap-12 lg:flex-row lg:gap-16 ${
              isEven ? '' : 'lg:flex-row-reverse'
            }`}
          >
            {/* Image */}
            <div className="w-full lg:w-1/2">
              <StyledImage
                alt={section.title}
                color={section.imageColor}
                src={section.image!}
              />
            </div>
            {/* Content */}
            <div className="w-full lg:w-1/2">
              {section.label && (
                <p className="text-element-mid-em mb-2 text-xs font-medium tracking-wide uppercase">
                  {section.label}
                </p>
              )}
              <h2 className="text-element-high-em mb-4 text-2xl font-medium md:text-3xl">
                {section.title}
              </h2>
              {section.subtitle && (
                <h3 className="text-element-mid-em mb-4 text-lg font-medium">
                  {section.subtitle}
                </h3>
              )}
              {section.description && (
                <p className="text-element-mid-em mb-6 text-base leading-relaxed">
                  {section.description}
                </p>
              )}
              <SectionContent section={section} />
            </div>
          </div>
        </div>
      );
    }

    // Full-width layout inside card
    const alignment = section.centered
      ? 'mx-auto text-center'
      : isEven
        ? ''
        : 'ml-auto';

    return (
      <div className={cardPadding}>
        <div className={`max-w-4xl ${alignment}`}>
          {section.label && (
            <p className="text-element-mid-em mb-2 text-xs font-medium tracking-wide uppercase">
              {section.label}
            </p>
          )}
          <h2 className="text-element-high-em mb-4 text-2xl font-medium md:text-3xl">
            {section.title}
          </h2>
          {section.subtitle && (
            <h3 className="text-element-mid-em mb-4 text-lg font-medium">
              {section.subtitle}
            </h3>
          )}
          {section.description && (
            <p
              className={`text-element-mid-em mb-8 text-base leading-relaxed ${section.centered ? '' : 'max-w-2xl'}`}
            >
              {section.description}
            </p>
          )}
          <SectionContent centered={section.centered} section={section} />
        </div>
      </div>
    );
  }

  // Side-by-side layout when there's an image
  if (hasImage) {
    return (
      <>
        {section.dividerAbove && (
          <div className="mx-auto w-full px-4 md:px-6 xl:max-w-[80rem] xl:px-8">
            <hr className="border-gray-300" />
          </div>
        )}
        <section className={`py-16 md:py-20 ${bgClass}`}>
          <div className="mx-auto w-full px-4 md:px-6 xl:max-w-[80rem] xl:px-8">
            <div
              className={`flex flex-col items-center gap-12 lg:flex-row lg:gap-16 ${
                isEven ? '' : 'lg:flex-row-reverse'
              }`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2">
                <StyledImage
                  alt={section.title}
                  color={section.imageColor}
                  src={section.image!}
                />
              </div>
              {/* Content */}
              <div className="w-full lg:w-1/2">
                {section.label && (
                  <p className="text-element-mid-em mb-2 text-xs font-medium tracking-wide uppercase">
                    {section.label}
                  </p>
                )}
                <h2 className="text-element-high-em mb-4 text-2xl font-medium md:text-3xl">
                  {section.title}
                </h2>
                {section.subtitle && (
                  <h3 className="text-element-mid-em mb-4 text-lg font-medium">
                    {section.subtitle}
                  </h3>
                )}
                {section.description && (
                  <p className="text-element-mid-em mb-6 text-base leading-relaxed">
                    {section.description}
                  </p>
                )}
                <SectionContent section={section} />
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }

  // Full-width layout with alternating text alignment (or centered)
  const alignment = section.centered
    ? 'mx-auto text-center'
    : isEven
      ? ''
      : 'ml-auto';

  return (
    <>
      {section.dividerAbove && (
        <div className="mx-auto w-full px-4 md:px-6 xl:max-w-[80rem] xl:px-8">
          <hr className="border-gray-300" />
        </div>
      )}
      <section className={`py-16 md:py-20 ${bgClass}`}>
        <div className="mx-auto w-full px-4 md:px-6 xl:max-w-[80rem] xl:px-8">
          <div className={`max-w-4xl ${alignment}`}>
            {section.label && (
              <p className="text-element-mid-em mb-2 text-xs font-medium tracking-wide uppercase">
                {section.label}
              </p>
            )}
            <h2 className="text-element-high-em mb-4 text-2xl font-medium md:text-3xl">
              {section.title}
            </h2>
            {section.subtitle && (
              <h3 className="text-element-mid-em mb-4 text-lg font-medium">
                {section.subtitle}
              </h3>
            )}
            {section.description && (
              <p
                className={`text-element-mid-em mb-8 text-base leading-relaxed ${section.centered ? '' : 'max-w-2xl'}`}
              >
                {section.description}
              </p>
            )}
            <SectionContent centered={section.centered} section={section} />
          </div>
        </div>
      </section>
      {section.dividerBelow && (
        <div className="mx-auto w-full px-4 md:px-6 xl:max-w-[80rem] xl:px-8">
          <hr className="border-gray-300" />
        </div>
      )}
    </>
  );
}

// Section content renderer
function SectionContent({
  section,
  centered,
}: {
  section: ContentSection;
  centered?: boolean;
}) {
  switch (section.type) {
    case 'bullets':
      return (
        <BulletsContent
          bulletStyle={section.bulletStyle}
          centered={centered}
          items={section.items as string[]}
        />
      );
    case 'numbered-steps':
      return (
        <NumberedStepsContent
          items={section.items as { title: string; description: string }[]}
        />
      );
    case 'list':
      return <ListContent items={section.items as string[]} />;
    case 'tags':
      return <TagsContent items={section.items as string[]} />;
    case 'paragraphs':
      return <ParagraphsContent items={section.items as string[]} />;
    case 'feature-cards':
      return (
        <FeatureCardsContent
          items={section.items as { title: string; description: string }[]}
        />
      );
    case 'feature-list':
      return (
        <FeatureListContent
          items={section.items as { title: string; description: string }[]}
        />
      );
    default:
      return null;
  }
}

// Bullets - simple list with bullet points
function BulletsContent({
  items,
  centered,
  bulletStyle = 'check',
}: {
  items: string[];
  centered?: boolean;
  bulletStyle?: 'bullet' | 'check';
}) {
  return (
    <ul className={`space-y-3 ${centered ? 'inline-block text-left' : ''}`}>
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          {bulletStyle === 'bullet' ? (
            <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-orange-500" />
          ) : (
            <svg
              className="mt-1 h-5 w-5 shrink-0 text-orange-500"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                d="M5 13l4 4L19 7"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
          <span className="text-element-mid-em">{item}</span>
        </li>
      ))}
    </ul>
  );
}

// Numbered steps - workflow style
function NumberedStepsContent({
  items,
}: {
  items: { title: string; description: string }[];
}) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div key={index} className="flex gap-4">
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-medium text-orange-600">
            {index + 1}
          </div>
          <div>
            <h3 className="text-element-high-em font-medium">{item.title}</h3>
            <p className="text-element-mid-em mt-1 text-sm">
              {item.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

// List - simple list with checkmarks (no boxes)
function ListContent({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-3">
          <svg
            className="mt-1 h-5 w-5 shrink-0 text-orange-500"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
          >
            <path
              d="M5 13l4 4L19 7"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <span className="text-element-mid-em">{item}</span>
        </li>
      ))}
    </ul>
  );
}

// Tags - pill style
function TagsContent({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((item, index) => (
        <span
          key={index}
          className="rounded-full border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

// Paragraphs - text content
function ParagraphsContent({ items }: { items: string[] }) {
  return (
    <div className="space-y-4">
      {items.map((item, index) => (
        <p
          key={index}
          className="text-element-mid-em text-base leading-relaxed"
        >
          {item}
        </p>
      ))}
    </div>
  );
}

// Feature cards - cards with bold title + description (kept for when boxes are wanted)
function FeatureCardsContent({
  items,
}: {
  items: { title: string; description: string }[];
}) {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {items.map((item, index) => (
        <div
          key={index}
          className="rounded-lg border border-gray-200 bg-white p-5"
        >
          <h3 className="text-element-high-em mb-2 font-medium">
            {item.title}
          </h3>
          <p className="text-element-mid-em text-sm">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

// Feature list - bold title + description as simple list (no boxes)
function FeatureListContent({
  items,
}: {
  items: { title: string; description: string }[];
}) {
  return (
    <div className="space-y-6">
      {items.map((item, index) => (
        <div key={index}>
          <h3 className="text-element-high-em font-medium">{item.title}</h3>
          <p className="text-element-mid-em mt-1">{item.description}</p>
        </div>
      ))}
    </div>
  );
}

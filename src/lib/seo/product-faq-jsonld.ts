import type { FAQPage, WithContext } from 'schema-dts'

type ProductFaqItem = {
  question: string
  answer: string
}

export function buildProductFaqJsonLd(
  faqItems: ProductFaqItem[],
): WithContext<FAQPage> | null {
  if (faqItems.length !== 3) {
    return null
  }

  const normalizedFaqs = faqItems
    .map((item) => ({
      question: item.question.trim(),
      answer: item.answer.trim(),
    }))
    .filter((item) => item.question && item.answer)

  if (normalizedFaqs.length !== 3) {
    return null
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: normalizedFaqs.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }
}

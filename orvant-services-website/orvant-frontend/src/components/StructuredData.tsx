import { Helmet } from 'react-helmet-async'

const SITE_URL = import.meta.env.VITE_SITE_URL || 'https://business-service-website-3w4lo7sy.devinapps.com'

export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'FinancialService',
    name: 'Orvantt Services',
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: 'Expert financial advisory services for M&A, restructuring, and capital raising. Comprehensive business solutions tailored to your needs.',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'IE',
    },
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'filipberg@orvanttservices.com',
      contactType: 'Customer Service',
    },
    sameAs: [
      'https://www.linkedin.com/company/orvant-services',
    ],
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export function WebsiteSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Orvantt Services',
    url: SITE_URL,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export function BreadcrumbSchema({ items }: { items: Array<{ name: string; url: string }> }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

export function ServiceSchema({ service }: { service: { name: string; description: string } }) {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service.name,
    description: service.description,
    provider: {
      '@type': 'FinancialService',
      name: 'Orvantt Services',
      url: SITE_URL,
    },
  }

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  )
}

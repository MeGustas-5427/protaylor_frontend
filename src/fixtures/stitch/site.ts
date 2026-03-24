export const ROUTES = {
  home: '/',
  category: '/products/soft-serve-machines',
  product:
    '/products/soft-serve-machines/icm-t836-twin-system-soft-serve-machine',
  contact: '/contact',
  resources: '/resources',
  article: '/resources/how-to-choose-the-right-soft-serve-machine',
  solution: '/solutions/commercial-wholesale-oem',
  company: '/company/factory-and-quality-control',
} as const

export const navItems = [
  { key: 'products', label: 'Products', href: ROUTES.category },
  { key: 'solutions', label: 'Solutions', href: ROUTES.solution },
  { key: 'resources', label: 'Resources', href: ROUTES.resources },
  { key: 'company', label: 'Company', href: ROUTES.company },
] as const

export const trustItems = [
  { key: 'oem', label: 'OEM/ODM Support', icon: 'settings_suggest' },
  { key: 'ce', label: 'CE Compliance', icon: 'verified' },
  { key: 'shipping', label: 'Global Shipping', icon: 'public' },
  { key: 'factory', label: 'Factory Direct', icon: 'factory' },
] as const

export const footerGroups = [
  {
    title: 'Products',
    links: [
      { label: 'Soft Serve', href: ROUTES.category },
      { label: 'Ice Lolly', href: ROUTES.category },
      { label: 'Slush Machines', href: ROUTES.category },
      { label: 'Batch Freezers', href: ROUTES.category },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Technical Guides', href: ROUTES.resources },
      { label: 'OEM Request', href: ROUTES.solution },
      { label: 'Shipping Policy', href: ROUTES.contact },
      { label: 'Parts Catalog', href: ROUTES.resources },
    ],
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: ROUTES.company },
      { label: 'Factory Tour', href: ROUTES.company },
      { label: 'Certificates', href: ROUTES.company },
      { label: 'Contact', href: ROUTES.contact },
    ],
  },
] as const

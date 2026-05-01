export const ROUTES = {
  home: '/',
  products: '/products',
  solutions: '/solutions',
  category: '/products/ice-cream-machine',
  categoryIceLolly: '/products/popsicle-machine',
  categorySlush: '/products/slush-freezer-machine',
  categoryGelato: '/products/ice-cream-machine?subcategory_slug=gelato-batch-freezer',
  categoryFrozenDrink: '/products/multifunction-ice-cream-frozen-drink-machine',
  categoryIceMakers: '/products/ice-making-machine',
  product:
    '/products/soft-ice-cream-machine/icm-t838-twin-twist-soft-serve-machine',
  contact: '/contact',
  resources: '/resources',
  article: '/resources/how-to-choose-the-right-soft-serve-machine',
  solution: '/solutions/commercial-wholesale-oem',
  solutionCafe: '/solutions/shop-cafe-dessert-business',
  solutionHospitality: '/solutions/hospitality-buffet',
  solutionDistributor: '/solutions/distributor-import-program',
  company: '/company/factory-and-quality-control',
} as const

export const navItems = [
  { key: 'products', label: 'Products', href: ROUTES.products },
  { key: 'solutions', label: 'Solutions', href: ROUTES.solutions },
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
      { label: 'Ice Cream Machine', href: ROUTES.category },
      { label: 'Popsicle Machine', href: ROUTES.categoryIceLolly },
      { label: 'Slush Freezer Machine', href: ROUTES.categorySlush },
      { label: 'Gelato Batch Freezer', href: ROUTES.categoryGelato },
    ],
  },
  {
    title: 'Support',
    links: [
      { label: 'Technical Guides', href: ROUTES.resources },
      { label: 'OEM Request', href: ROUTES.solutions },
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

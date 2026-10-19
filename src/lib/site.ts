export const site = {
  name: 'NEFNAI',
  fullName: 'New Followership, New Africa Initiative',
  motto: 'Save Africa at all cost.',
  description:
    'NEFNAI is a non-governmental organisation founded in 2018 that revives integrity and patriotic values in Africans through civic education, anti-corruption campaigns, training and empowerment.',
  email: 'newfnewam@gmail.com',
  phones: ['+234 813 851 5294', '+234 703 159 8626'],
  offices: ['8a Ishaya Bakut Road, High Level, Makurdi', '1a Lushakyaa Anja Street, Old G.R.A, Makurdi'],
  state: 'Benue State, Nigeria',
  campaign: {
    petitionUrl: 'https://c.org/9xygPdzYk6',
    surveyUrl: 'https://forms.gle/g6J9puGfmW4eiEY96',
    whatsapp: '0818 382 3510',
    whatsappHref: 'https://wa.me/2348183823510',
  },
} as const;

export const nav = [
  { href: '/who-we-are', label: 'Who we are' },
  { href: '/news-events', label: 'News & Events' },
  { href: '/training-certification', label: 'Training & Certification' },
  { href: '/local-government-autonomy', label: 'LG Autonomy' },
  { href: '/get-help', label: 'Get help' },
] as const;

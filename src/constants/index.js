const navLinks = [
  {
    url: '/catalog',
    title: 'Cocktails',
  },
  {
    url: '/#about',
    title: 'About Us',
  },
  {
    url: '/#contact',
    title: 'Contact',
  },
  {
    url: '/cart',
    title: 'Cart',
  },
];

const cocktailLists = [
  {
    name: 'Chapel Hill Shiraz',
    country: 'AU',
    detail: 'Battle',
    price: '$10',
  },
  {
    name: 'Caten Malbee',
    country: 'AU',
    detail: 'Battle',
    price: '$49',
  },
  {
    name: 'Rhino Pale Ale',
    country: 'CA',
    detail: '750 ml',
    price: '$20',
  },
  {
    name: 'Irish Guinness',
    country: 'IE',
    detail: '600 ml',
    price: '$29',
  },
];

const mockTailLists = [
  {
    name: 'Tropical Bloom',
    country: 'US',
    detail: 'Battle',
    price: '$10',
  },
  {
    name: 'Passionfruit Mint',
    country: 'US',
    detail: 'Battle',
    price: '$49',
  },
  {
    name: 'Citrus Glow',
    country: 'CA',
    detail: '750 ml',
    price: '$20',
  },
  {
    name: 'Lavender Fizz',
    country: 'IE',
    detail: '600 ml',
    price: '$29',
  },
];

const profileLists = [
  {
    imgPath: '/src/assets/images/profile1.png',
  },
  {
    imgPath: '/src/assets/images/profile2.png',
  },
  {
    imgPath: '/src/assets/images/profile3.png',
  },
  {
    imgPath: '/src/assets/images/profile4.png',
  },
];

const featureLists = [
  'Perfectly balanced blends',
  'Garnished to perfection',
  'Ice-cold every time',
  'Expertly shaken & stirred',
];

const goodLists = [
  'Handpicked ingredients',
  'Signature techniques',
  'Bartending artistry in action',
  'Freshly muddled flavors',
];

const contactInfo = {
  phone: '(305) 555-1234',
  email: 'hello@hello.com',
};

const barLocations = [
  {
    name: 'Velvet Pour Miami Beach',
    address: '1020 Ocean Dr, Miami Beach, FL 33139',
  },
  {
    name: 'Velvet Pour Austin',
    address: '600 Congress Ave, Austin, TX 78701',
  },
];

const openingHours = [
  { day: 'Mon–Thu', time: '11:00am – 12am' },
  { day: 'Fri', time: '11:00am – 2am' },
  { day: 'Sat', time: '9:00am – 2am' },
  { day: 'Sun', time: '9:00am – 1am' },
];

const socials = [
  {
    name: 'Pinterest',
    icon: '/src/assets/icons/pinterest.svg',
    url: '#',
  },
  {
    name: 'X (Twitter)',
    icon: '/src/assets/icons/x.svg',
    url: '#',
  },
  {
    name: 'Facebook',
    icon: '/src/assets/icons/facebook.svg',
    url: '#',
  },
];

const sliderLists = [
  {
    id: 1,
    name: 'Classic Mojito',
    image: '/src/assets/images/drink1.png',
    title: 'Simple Ingredients, Bold Flavor',
    description:
      'Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.',
  },
  {
    id: 2,
    name: 'Raspberry Mojito',
    image: '/src/assets/images/drink2.png',
    title: 'A Zesty Classic That Never Fails',
    description:
      'The Margarita is a classic that balances tangy lime, smooth tequila, and a touch of sweetness. Shaken, frozen, or on the rocks—it’s always crisp & refreshing.',
  },
  {
    id: 3,
    name: 'Violet Breeze',
    image: '/src/assets/images/drink3.png',
    title: 'Simple Ingredients, Bold Flavor',
    description:
      'Made with tequila, lime juice, and orange liqueur, the Margarita is easy to make and full of character. Add a salted rim for the perfect drink on summer nights.',
  },
  {
    id: 4,
    name: 'Curacao Mojito',
    image: '/src/assets/images/drink4.png',
    title: 'Crafted With Care, Poured With Love',
    description:
      "Each cocktail is made with fresh ingredients and a passion for perfecting every pour, whether you're celebrating or simply relaxing.",
  },
];

export {
  navLinks,
  cocktailLists,
  mockTailLists,
  profileLists,
  featureLists,
  goodLists,
  barLocations,
  contactInfo,
  openingHours,
  socials,
  sliderLists,
};

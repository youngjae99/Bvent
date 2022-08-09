const twitterUrl = (account: string) => `https://twitter.com/${account}`;
const profileImageUrl = (name: string) => `/image/profile/${name}.png`;
const advisorImageUrl = (name: string) => `/image/advisor/${name}.png`;

const instagramUrl = (account: string) =>
  `https://www.instagram.com/${account}/`;
const linkedinUrl = (account: string) =>
  `https://www.linkedin.com/in/${account}/`;

export interface Profile {
  name: string | null;
  profileImageUrl: string | null;
  role: string | null;
  introduction?: string | null;
  twitter?: string | null;
  instagram?: string | null;
  linkedin?: string | null;
}

export const profiles: Profile[] = [
  {
    name: 'Lucia',
    role: 'Founder',
    twitter: twitterUrl('@LuciaBling'),
    profileImageUrl: profileImageUrl('lucia'),
    introduction: 'Follow your soul, It knows the way',
  },
  {
    name: 'LOong',
    role: 'Artist with soul',
    profileImageUrl: profileImageUrl('loong'),
    twitter: twitterUrl('@LOong16266196'),
    introduction:
      'Even a billion dollars of capital cannot compete with a project having a soul - Vitalik',
  },
  {
    name: 'nova0soul',
    role: 'Film',
    profileImageUrl: profileImageUrl('nova0soul'),
    introduction: "A vision's always right when it's backed by good intention",
    instagram: instagramUrl('nova0soul'),
  },
  {
    name: 'dduckjin',
    role: 'Film',
    profileImageUrl: profileImageUrl('dduckjin'),
    introduction: 'Flâneur in the Mars',
    twitter: twitterUrl('kingdduckjin'),
    instagram: instagramUrl('dduckjin'),
  },
  {
    name: 'kimminhyun',
    role: 'AI from Mars',
    introduction: 'AI Network, the internet for AI',
    profileImageUrl: profileImageUrl('kimminhyun'),
    twitter: twitterUrl('kmh4500'),
    linkedin: linkedinUrl('minhyun-kim-b5578519'),
  },
  {
    name: 'Jake',
    role: 'Dev Lead',
    profileImageUrl: profileImageUrl('jake'),
    introduction: 'Eung ue',
  },
  {
    name: 'kitkat',
    role: 'Dev Lead',
    profileImageUrl: profileImageUrl('kitkat'),
    introduction: 'Web3 Product based company builder',
  },
  {
    name: 'Snow Marshmellow',
    role: 'CM Lead',
    profileImageUrl: profileImageUrl('Wintermute'),
    twitter: twitterUrl('0xwintermute'),
    introduction: 'Just coffee. Black - like my soul',
  },
  {
    name: 'Nala',
    role: 'CM',
    profileImageUrl: profileImageUrl('Nala'),
    twitter: twitterUrl('Crypto_Nala'),
    introduction:
      'Crypto Maximalist <br/> “Some things have to be believed to be seen”',
  },
  {
    name: 'luckyjinwon',
    role: 'CM',
    profileImageUrl: profileImageUrl('luckyjinwon'),
    twitter: twitterUrl('TheJinKang'),
    instagram: instagramUrl('jkangggg7'),
    linkedin: linkedinUrl('jin-kang-091a6735'),
    introduction:
      'A crypto degen, with former experience in finance turned full time web 3.0 native',
  },
  {
    name: 'Jini',
    role: 'Contents',
    profileImageUrl: profileImageUrl('jini'),
    introduction: 'Starve your ego. Feed your soul',
  },
  {
    name: 'Liana',
    role: 'PM',
    profileImageUrl: profileImageUrl('Liana'),
    twitter: twitterUrl('Soulpreneur_'),
    introduction:
      'Super excited about this journey together with 15,000 soulinkers!',
  },
  {
    name: 'HyungKoo Kang',
    role: 'Artist',
    profileImageUrl: profileImageUrl('HyungKooKang'),
    introduction: 'My soul finds rest while I draw',
  },
  {
    name: 'Yosup Lee',
    role: 'Videographer',
    profileImageUrl: profileImageUrl('yosuplee'),
    introduction: 'Take time to do what makes your soul happy',
  },
  {
    name: 'shu',
    role: 'Product Designer',
    profileImageUrl: profileImageUrl('yooragoh'),
    introduction: 'The soul becomes dyed with the color of its thoughts',
  },
  {
    name: 'isabu11y',
    role: 'Storyteller',
    profileImageUrl: profileImageUrl('Isabelle'),
    twitter: twitterUrl('@isabellekoh13'),
    introduction: 'Listening to neo soul',
  },
  {
    name: 'Sana',
    role: 'CM',
    profileImageUrl: profileImageUrl('Sana'),
    twitter: twitterUrl('@Sana_Park11'),
    introduction: 'You never know where life will take you',
  },
  {
    name: 'noni',
    role: 'Designer',
    profileImageUrl: profileImageUrl('noni'),
    twitter: twitterUrl('@jiyukimdesign'),
    introduction: 'A happy soul is the best shield for a cruel world.',
  },
  {
    name: 'Lazaroos',
    role: 'Artist',
    profileImageUrl: profileImageUrl('Lazaroos'),
    introduction: 'To infinity and beyond',
    twitter: twitterUrl('@L2R00S8B'),
  },
  {
    name: null,
    role: null,
    profileImageUrl: null,
    introduction: null,
  },
];

export const advisorProfile: Profile[] = [
  // 1st row
  {
    name: 'Krista Kim',
    role: null,
    twitter: twitterUrl('Krista_Kim'),
    profileImageUrl: advisorImageUrl('Krista Kim'),
    introduction: 'Creator of Mars House Co-Founder, Beyond Studio',
  },
  {
    name: 'Daniel Kim',
    role: null,
    twitter: twitterUrl('dan_nftbank'),
    profileImageUrl: advisorImageUrl('Daniel Kim'),
    introduction: 'CEO, NFTBank',
  },
  {
    name: 'Hsin-Ju Chuang',
    role: null,
    twitter: twitterUrl('hsinjuchuang'),
    profileImageUrl: advisorImageUrl('Hsin-Ju'),
    introduction: 'Founder, DystopiaLabs ',
  },
  {
    name: 'Daniel Hwang',
    role: null,
    twitter: twitterUrl('danhwang88'),
    profileImageUrl: advisorImageUrl('Daniel Hwang'),
    introduction: 'Protocol Specialist, StakeFish',
  },

  // 2nd row

  {
    name: 'Gabriel Santos',
    role: null,
    twitter: twitterUrl('gblsts'),
    profileImageUrl: advisorImageUrl('Gabriel Santos'),
    introduction: 'CryptoArt Collector',
  },
  {
    name: 'Peter',
    role: null,
    instagram: instagramUrl('valisstudio'),
    profileImageUrl: advisorImageUrl('Perter Martin'),
    introduction: 'CEO, Valis Studio',
  },
  {
    name: 'Dong-Seon Chang',
    role: null,
    profileImageUrl: '/image/advisor/dongseonchang.jpg',
    introduction: 'Neuroscientist / CEO, Curious Brain Lab',
    instagram: 'https://youtube.com/c/CuriousBrainLab',
  },
  {
    name: 'Justin Oh (JO7)',
    role: null,
    twitter: twitterUrl('JO7eth'),
    profileImageUrl: advisorImageUrl('Justin'),
    introduction: 'Co-founder, BeetDAO',
  },

  //todo : png 요청하기

  // 3rd row

  {
    name: 'Barthazian',
    role: null,
    twitter: twitterUrl('Barthazian'),
    profileImageUrl: advisorImageUrl('Barthazian'),
    introduction: 'NFT Degen',
  },
  {
    name: 'Henry (Cal)',
    role: null,
    // twitter: twitterUrl('NFTpho?s=20'),
    profileImageUrl: advisorImageUrl('Cal'),
    introduction: 'NFT Degen',
  },
  {
    name: 'Cecilia Li',
    role: null,
    profileImageUrl: '/image/advisor/Cecilia Li.jpg',
    introduction: 'Partner at Formless Capital & Mask.io Ecosystem',
    twitter: twitterUrl('Cecilia_liCC'),
  },
  {
    name: 'Jihoon Jeong',
    role: null,
    profileImageUrl: advisorImageUrl('Jihoon Jeong'),
    introduction: 'AI Visionary, CVO at ModuLabs',
    twitter: twitterUrl('@hiconcep'),
  },
];

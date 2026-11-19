export type Project = Readonly<{
  title: string;
  path: string;
  src: string;
}>;

const projectCatalog = [
  {
    title: 'Yonex – Espresso Brown',
    path: 'yonex-espresso-brown',
    src: 'https://play.gumlet.io/embed/6afe894788996d78dd0eb278?autoplay=true',
  },
  {
    title: 'Club Scar ft. Ober & Red Fingers – GHOST',
    path: 'club-scar-ghost',
    src: 'https://play.gumlet.io/embed/6afe894888996d78dd0eb27d?autoplay=true',
  },
  {
    title: 'Parco – Shinsaibashi, The Move Begins',
    path: 'parco-the-move-begins',
    src: 'https://play.gumlet.io/embed/6afe8949c7baea8324557d40?autoplay=true',
  },
  {
    title: 'Mizuno x Freddie Gibbs – Recap',
    path: 'mizuno-freddie-gibbs-recap',
    src: 'https://play.gumlet.io/embed/6afe8949c7baea8324557d42?autoplay=true',
  },
  {
    title: 'Mizuno x Freddie Gibbs – Sabukaru Documentary',
    path: 'mizuno-freddie-gibbs-sabukaru',
    src: 'https://play.gumlet.io/embed/6afe894ac7baea8324557d45?autoplay=true',
  },
  {
    title: 'Sony – 1000X THE COLLEXION',
    path: 'sony-1000x',
    src: 'https://play.gumlet.io/embed/6afe894b88996d78dd0eb284?autoplay=true',
  },
  {
    title: 'Red Fingers, Baby Jey, Kuroh – SE K TU',
    path: 'se-k-tu',
    src: 'https://play.gumlet.io/embed/6afe894b88996d78dd0eb2b1?autoplay=true',
  },
  {
    title: 'Brandy Senki – No More',
    path: 'no-more-brandy-senki',
    src: 'https://play.gumlet.io/embed/6afe894c88996d78dd0eb2b3?autoplay=true',
  },
  {
    title: 'Suntory – The Craft of Kimono with Anna Sawai',
    path: 'suntory-hibiki-kimono',
    src: 'https://play.gumlet.io/embed/6afe894dc7baea8324557d48?autoplay=true',
  },
  {
    title: 'Suntory – The Art of Washi with Anna Sawai',
    path: 'suntory-hibiki-washi',
    src: 'https://play.gumlet.io/embed/6afe894d88996d78dd0eb2ba?autoplay=true',
  },
  {
    title: 'Lululemon – Choi Seung-Yeon',
    path: 'lululemon-choi',
    src: 'https://play.gumlet.io/embed/6afe894ec7baea8324557d4c?autoplay=true',
  },
  {
    title: 'Yonex – An Se Young',
    path: 'yonex-an-se-young',
    src: 'https://play.gumlet.io/embed/6afe894f88996d78dd0eb2bf?autoplay=true',
  },
  {
    title: 'Vogue Japan – Chanmina April Cover',
    path: 'vogue-chanmina',
    src: 'https://play.gumlet.io/embed/6afe894fc7baea8324557d4e?autoplay=true',
  },
  {
    title: 'Lululemon – Brick Tokyo',
    path: 'lululemon-x-brick',
    src: 'https://play.gumlet.io/embed/6afe8950c7baea8324557d50?autoplay=true',
  },
  {
    title: 'Lululemon – Breezily',
    path: 'lululemon-breezily',
    src: 'https://play.gumlet.io/embed/6afe8950c7baea8324557d52?autoplay=true',
  },
  {
    title: 'Dior – Addict (Best of film)',
    path: 'dior-addict-best-of',
    src: 'https://play.gumlet.io/embed/6afe8951c7baea8324557d54?autoplay=true',
  },
  {
    title: 'Club Scar – Motion',
    path: 'club-scar-motion',
    src: 'https://play.gumlet.io/embed/6afe895288996d78dd0eb2c5?autoplay=true',
  },
  {
    title: 'Musinsa – Musinsa Japan「らしさ。」',
    path: 'musinsa-rashisa',
    src: 'https://play.gumlet.io/embed/6afe8952c7baea8324557d60?autoplay=true',
  },
  {
    title: 'adidas – FOS / Future of Style',
    path: 'adidas-future-of-style',
    src: 'https://play.gumlet.io/embed/6afe8953c7baea8324557d62?autoplay=true',
  },
  {
    title: 'IQOS – Passion, Daito Manabe',
    path: 'iqos-passion-daito-manabe',
    src: 'https://play.gumlet.io/embed/6afe895488996d78dd0eb2ca?autoplay=true',
  },
  {
    title: 'IQOS – Passion, KELO',
    path: 'iqos-passion-kelo',
    src: 'https://play.gumlet.io/embed/6afe8954c7baea8324557d65?autoplay=true',
  },
  {
    title: 'IQOS – Passion, Saki Matsumura',
    path: 'iqos-passion-saki-matsumura',
    src: 'https://play.gumlet.io/embed/6afe8955c7baea8324557d67?autoplay=true',
  },
  {
    title: 'Parco – Shinsaibashi 50th Anniversary',
    path: 'parco-shinsaibashi-50th-anniversary',
    src: 'https://play.gumlet.io/embed/6afe895588996d78dd0eb2cd?autoplay=true',
  },
  {
    title: 'Red Bull – Tokyo Drift [editors cut]',
    path: 'red-bull-tokyo-drift',
    src: 'https://play.gumlet.io/embed/6afe895688996d78dd0eb2cf?autoplay=true',
  },
  {
    title: 'Cartier – Santos Titanium',
    path: 'cartier-santos',
    src: 'https://play.gumlet.io/embed/6afe895788996d78dd0eb2d1?autoplay=true',
  },
  {
    title: 'On Running – On Labs Tokyo',
    path: 'on-running-olt',
    src: 'https://play.gumlet.io/embed/6afe8958c7baea8324557d95?autoplay=true',
  },
  {
    title: "Pei-Yu Hung – It's Nothing Personal",
    path: 'pei-yu-hung-its-nothing-personal',
    src: 'https://play.gumlet.io/embed/6afe896d88996d78dd0eb31c?autoplay=true',
  },
  {
    title: 'NIGHTCRWLR – Madhouse',
    path: 'nightcrwlr-madhouse',
    src: 'https://play.gumlet.io/embed/6afe895888996d78dd0eb2d7?autoplay=true',
  },
  {
    title: 'Sweet Revenge – Mine',
    path: 'sweet-revenge-mine',
    src: 'https://play.gumlet.io/embed/6afe895988996d78dd0eb2da?autoplay=true',
  },
  {
    title: 'Without a Sound [short film]',
    path: 'without-a-sound',
    src: 'https://play.gumlet.io/embed/6afe895ac7baea8324557d99?autoplay=true',
  },
  {
    title: 'Sabukaru – Everyone x adidas',
    path: 'everyone-x-adidas',
    src: 'https://play.gumlet.io/embed/6afe895a88996d78dd0eb2e0?autoplay=true',
  },
  {
    title: '_J.L-A.L_ x Kolon Sport – Winter 2025',
    path: 'jlal-kolon-winter-25',
    src: 'https://play.gumlet.io/embed/6afe895bc7baea8324557d9f?autoplay=true',
  },
  {
    title: '_J.L-A.L_ x Kolon Sport – Fall 2025',
    path: 'jlal-kolon-fall-25',
    src: 'https://play.gumlet.io/embed/6afe895cc7baea8324557da1?autoplay=true',
  },
  {
    title: 'Slam Jam x Puma Mostro Gyaru',
    path: 'slam-jam-puma-gyaru',
    src: 'https://play.gumlet.io/embed/6afe895c88996d78dd0eb2e9?autoplay=true',
  },
  {
    title: 'Slam Jam x Puma Mostro Gyaru Teaser',
    path: 'slam-jam-puma-gyaru-teaser',
    src: 'https://play.gumlet.io/embed/6afe895d88996d78dd0eb2f0?autoplay=true',
  },
  {
    title: 'Louis Vuitton – Visionary Journeys',
    path: 'louis-vuitton-visionary-journeys',
    src: 'https://play.gumlet.io/embed/6afe895e88996d78dd0eb2f3?autoplay=true',
  },
  {
    title: 'NVSCVR – Pensarte',
    path: 'nvscvr-pensarte',
    src: 'https://play.gumlet.io/embed/6afe895ec7baea8324557db2?autoplay=true',
  },
  {
    title: 'Casio – Future Classic',
    path: 'casio-future-classic',
    src: 'https://play.gumlet.io/embed/6afe895fc7baea8324557db5?autoplay=true',
  },
  {
    title: 'Casio – Future Classic Interviews',
    path: 'casio-future-classic-interviews',
    src: 'https://play.gumlet.io/embed/6afe895f88996d78dd0eb2f9?autoplay=true',
  },
  {
    title: 'Casio – Future Classic 3.0',
    path: 'casio-future-classic-3',
    src: 'https://play.gumlet.io/embed/6afe8960c7baea8324557de4?autoplay=true',
  },
  {
    title: 'Clarks – Wallabee Day',
    path: 'clarks-wallabee-day',
    src: 'https://play.gumlet.io/embed/6afe8961c7baea8324557de7?autoplay=true',
  },
  {
    title: 'Brandy Senki – Fix',
    path: 'fix-brandy-senki',
    src: 'https://play.gumlet.io/embed/6afe896188996d78dd0eb2fc?autoplay=true',
  },
  {
    title: 'Shu Uemura – Needle Brow Pencils',
    path: 'needle-brow-pencils',
    src: 'https://play.gumlet.io/embed/6afe896288996d78dd0eb2ff?autoplay=true',
  },
  {
    title: 'adidas China – future prophecy',
    path: 'adidas-china-future-prophecy',
    src: 'https://play.gumlet.io/embed/6afe8963c7baea8324557de9?autoplay=true',
  },
  {
    title: 'Brandy Senki – Last Live',
    path: 'last-live-brandy-senki',
    src: 'https://play.gumlet.io/embed/6afe8963c7baea8324557deb?autoplay=true',
  },
  {
    title: 'ASICS x size – GEL-SEKIRAN',
    path: 'asics-x-size-gel-sekiran',
    src: 'https://play.gumlet.io/embed/6afe896488996d78dd0eb302?autoplay=true',
  },
  {
    title: 'Liza ft. Sheida – Paradise',
    path: 'liza-paradise',
    src: 'https://play.gumlet.io/embed/6afe8965c7baea8324557ded?autoplay=true',
  },
  {
    title: 'Nike – SNDR',
    path: 'nike-sndr',
    src: 'https://play.gumlet.io/embed/6afe8965c7baea8324557df0?autoplay=true',
  },
  {
    title: 'Shu Uemura – Kinu Care Glow Up',
    path: 'kinu-care-glow-up',
    src: 'https://play.gumlet.io/embed/6afe896688996d78dd0eb305?autoplay=true',
  },
  {
    title: 'Shu Uemura – Kinu Care Lip Hack',
    path: 'kinu-care-lip-hack',
    src: 'https://play.gumlet.io/embed/6afe896688996d78dd0eb307?autoplay=true',
  },
  {
    title: 'Brandy Senki – 27:00',
    path: '2700-brandy-senki',
    src: 'https://play.gumlet.io/embed/6afe8967c7baea8324557df3?autoplay=true',
  },
  {
    title: 'HÄN – BRIDGES',
    path: 'han-bridges',
    src: 'https://play.gumlet.io/embed/6afe8967c7baea8324557df5?autoplay=true',
  },
  {
    title: 'Brandy Senki – Coming-of-Age Story',
    path: 'coming-of-age-story-brandy-senki',
    src: 'https://play.gumlet.io/embed/6afe8968c7baea8324557df7?autoplay=true',
  },
  {
    title: 'HÄN – CHROME',
    path: 'han-chrome',
    src: 'https://play.gumlet.io/embed/6afe8969c7baea8324557df9?autoplay=true',
  },
  {
    title: 'NENE ft. Young Coco – Yummy',
    path: 'yummy-nene-ft-young-coco',
    src: 'https://play.gumlet.io/embed/6afe8969c7baea8324557e00?autoplay=true',
  },
  {
    title: 'Yurufuwa Gang x Glogang – Do It Like Me',
    path: 'do-it-like-me-yurufuwa-gang-x-glogang',
    src: 'https://play.gumlet.io/embed/6afe896ac7baea8324557e02?autoplay=true',
  },
  {
    title: 'Sony – Nuro Mobile Brand Commercial',
    path: 'sony-nuro-mobile-brand-commercial',
    src: 'https://play.gumlet.io/embed/6afe896ac7baea8324557e2e?autoplay=true',
  },
  {
    title: 'Sony – Nuro Mobile Plan Commercial',
    path: 'sony-nuro-mobile-plan-commercial',
    src: 'https://play.gumlet.io/embed/6afe896b88996d78dd0eb318?autoplay=true',
  },
  {
    title: 'SoftBank – StationAI Teaser',
    path: 'softbank-station-ai-teaser',
    src: 'https://play.gumlet.io/embed/6afe896c88996d78dd0eb31a?autoplay=true',
  },
  {
    title: 'The Nunchuck Princess',
    path: 'the-nunchuck-princess',
    src: 'https://play.gumlet.io/embed/6afe896cc7baea8324557e31?autoplay=true',
  },
  {
    title: 'adidas Forum – Phoebes Angels',
    path: 'phoebes-angels-adidas-forum',
    src: 'https://play.gumlet.io/embed/6afe896dc7baea8324557e33?autoplay=true',
  },
] as const satisfies readonly Project[];

const projectOrder = [
  'yonex-espresso-brown',
  'sony-1000x',
  'club-scar-ghost',
  'parco-the-move-begins',
  'yonex-an-se-young',
  'musinsa-rashisa',
  'mizuno-freddie-gibbs-recap',
  'mizuno-freddie-gibbs-sabukaru',
  'no-more-brandy-senki',
  'lululemon-choi',
  'club-scar-motion',
  'clarks-wallabee-day',
  'parco-shinsaibashi-50th-anniversary',
  'casio-future-classic',
  'casio-future-classic-3',
  'casio-future-classic-interviews',
  'iqos-passion-daito-manabe',
  'iqos-passion-kelo',
  'iqos-passion-saki-matsumura',
  'suntory-hibiki-kimono',
  'suntory-hibiki-washi',
  'needle-brow-pencils',
  'kinu-care-glow-up',
  'kinu-care-lip-hack',
  'without-a-sound',
  'lululemon-x-brick',
  'vogue-chanmina',
  'louis-vuitton-visionary-journeys',
  'dior-addict-best-of',
  'adidas-future-of-style',
  'han-bridges',
  'fix-brandy-senki',
  'cartier-santos',
  'lululemon-breezily',
  'sweet-revenge-mine',
  'softbank-station-ai-teaser',
  'everyone-x-adidas',
  'on-running-olt',
  'liza-paradise',
  'nvscvr-pensarte',
  'slam-jam-puma-gyaru',
  'slam-jam-puma-gyaru-teaser',
  'last-live-brandy-senki',
  'coming-of-age-story-brandy-senki',
  '2700-brandy-senki',
  'do-it-like-me-yurufuwa-gang-x-glogang',
  'adidas-china-future-prophecy',
  'se-k-tu',
  'yummy-nene-ft-young-coco',
  'jlal-kolon-winter-25',
  'jlal-kolon-fall-25',
  'red-bull-tokyo-drift',
  'pei-yu-hung-its-nothing-personal',
  'nike-sndr',
  'asics-x-size-gel-sekiran',
  'sony-nuro-mobile-brand-commercial',
  'sony-nuro-mobile-plan-commercial',
  'nightcrwlr-madhouse',
  'han-chrome',
  'phoebes-angels-adidas-forum',
] as const;

const projectsByPath = new Map(
  projectCatalog.map((project) => [project.path, project]),
);

const orderedProjects = projectOrder.map((path) => {
  const project = projectsByPath.get(path);

  if (!project) {
    throw new Error(`Missing project data for "${path}"`);
  }

  return project;
});

const firstProject = orderedProjects[0];

if (!firstProject) {
  throw new Error('At least one project is required');
}

export const projects = [firstProject, ...orderedProjects.slice(1)] as const;

export type VideoSource = Readonly<{
  provider: 'gumlet';
  assetId: string;
  /** Duration in seconds, used for VideoObject structured data. */
  duration: number;
}>;

export type Project = Readonly<{
  title: string;
  path: string;
  video: VideoSource;
}>;

const projectCatalog = [
  {
    title: 'Fortnite – Tokyo Treasure Hunters',
    path: 'fortnite-tokyo-treasure-hunters',
    video: { provider: 'gumlet', assetId: '6afeb46c88996d78dd0f4a75', duration: 50 },
  },
  {
    title: 'Yonex – Espresso Brown',
    path: 'yonex-espresso-brown',
    video: { provider: 'gumlet', assetId: '6afe894788996d78dd0eb278', duration: 81 },
  },
  {
    title: 'Club Scar ft. Ober & Red Fingers – GHOST',
    path: 'club-scar-ghost',
    video: { provider: 'gumlet', assetId: '6afe894888996d78dd0eb27d', duration: 172 },
  },
  {
    title: 'El Capitxn – Sing This Song For Me',
    path: 'el-capitxn-sing-this-song-for-me',
    video: { provider: 'gumlet', assetId: '6afeb395c7baea8324560fe6', duration: 264 },
  },
  {
    title: "El Capitxn – Don't Say Love",
    path: 'el-capitxn-dont-say-love',
    video: { provider: 'gumlet', assetId: '6afeb2c2c7baea8324560cf1', duration: 240 },
  },
  {
    title: 'Parco – Shinsaibashi, The Move Begins',
    path: 'parco-the-move-begins',
    video: { provider: 'gumlet', assetId: '6afe8949c7baea8324557d40', duration: 60 },
  },
  {
    title: 'Mizuno x Freddie Gibbs – Recap',
    path: 'mizuno-freddie-gibbs-recap',
    video: { provider: 'gumlet', assetId: '6afe8949c7baea8324557d42', duration: 110 },
  },
  {
    title: 'Mizuno x Freddie Gibbs – Sabukaru Documentary',
    path: 'mizuno-freddie-gibbs-sabukaru',
    video: { provider: 'gumlet', assetId: '6afe894ac7baea8324557d45', duration: 485 },
  },
  {
    title: 'Sony – 1000X THE COLLEXION',
    path: 'sony-1000x',
    video: { provider: 'gumlet', assetId: '6afe894b88996d78dd0eb284', duration: 107 },
  },
  {
    title: 'Red Fingers, Baby Jey, Kuroh – SE K TU',
    path: 'se-k-tu',
    video: { provider: 'gumlet', assetId: '6afe894b88996d78dd0eb2b1', duration: 220 },
  },
  {
    title: 'Brandy Senki – No More',
    path: 'no-more-brandy-senki',
    video: { provider: 'gumlet', assetId: '6afe894c88996d78dd0eb2b3', duration: 194 },
  },
  {
    title: 'Suntory – The Craft of Kimono with Anna Sawai',
    path: 'suntory-hibiki-kimono',
    video: { provider: 'gumlet', assetId: '6afe894dc7baea8324557d48', duration: 184 },
  },
  {
    title: 'Suntory – The Art of Washi with Anna Sawai',
    path: 'suntory-hibiki-washi',
    video: { provider: 'gumlet', assetId: '6afe894d88996d78dd0eb2ba', duration: 187 },
  },
  {
    title: 'Lululemon – Choi Seung-Yeon',
    path: 'lululemon-choi',
    video: { provider: 'gumlet', assetId: '6afe894ec7baea8324557d4c', duration: 34 },
  },
  {
    title: 'Yonex – An Se Young',
    path: 'yonex-an-se-young',
    video: { provider: 'gumlet', assetId: '6afe894f88996d78dd0eb2bf', duration: 189 },
  },
  {
    title: 'Vogue Japan – Chanmina April Cover',
    path: 'vogue-chanmina',
    video: { provider: 'gumlet', assetId: '6afe894fc7baea8324557d4e', duration: 31 },
  },
  {
    title: 'Lululemon – Brick Tokyo',
    path: 'lululemon-x-brick',
    video: { provider: 'gumlet', assetId: '6afe8950c7baea8324557d50', duration: 35 },
  },
  {
    title: 'Lululemon – Breezily',
    path: 'lululemon-breezily',
    video: { provider: 'gumlet', assetId: '6afe8950c7baea8324557d52', duration: 20 },
  },
  {
    title: 'Dior – Addict (Best of film)',
    path: 'dior-addict-best-of',
    video: { provider: 'gumlet', assetId: '6afe8951c7baea8324557d54', duration: 55 },
  },
  {
    title: 'Club Scar – Motion',
    path: 'club-scar-motion',
    video: { provider: 'gumlet', assetId: '6afe895288996d78dd0eb2c5', duration: 99 },
  },
  {
    title: 'さらさ – Sobaniite',
    path: 'sarasa-soba-ni-ite',
    video: { provider: 'gumlet', assetId: '6afeb21ac7baea8324560ae4', duration: 207 },
  },
  {
    title: 'Musinsa – Musinsa Japan「らしさ。」',
    path: 'musinsa-rashisa',
    video: { provider: 'gumlet', assetId: '6afe8952c7baea8324557d60', duration: 30 },
  },
  {
    title: 'GQ x Hublot – Yuya Yagira',
    path: 'gq-hublot-yuya-yagira',
    video: { provider: 'gumlet', assetId: '6afeb400c7baea83245610b4', duration: 47 },
  },
  {
    title: 'adidas – FOS / Future of Style',
    path: 'adidas-future-of-style',
    video: { provider: 'gumlet', assetId: '6afe8953c7baea8324557d62', duration: 30 },
  },
  {
    title: 'IQOS – Passion, Daito Manabe',
    path: 'iqos-passion-daito-manabe',
    video: { provider: 'gumlet', assetId: '6afe895488996d78dd0eb2ca', duration: 54 },
  },
  {
    title: 'IQOS – Passion, KELO',
    path: 'iqos-passion-kelo',
    video: { provider: 'gumlet', assetId: '6afe8954c7baea8324557d65', duration: 59 },
  },
  {
    title: 'IQOS – Passion, Saki Matsumura',
    path: 'iqos-passion-saki-matsumura',
    video: { provider: 'gumlet', assetId: '6afe8955c7baea8324557d67', duration: 37 },
  },
  {
    title: 'Parco – Shinsaibashi 50th Anniversary',
    path: 'parco-shinsaibashi-50th-anniversary',
    video: { provider: 'gumlet', assetId: '6afe895588996d78dd0eb2cd', duration: 60 },
  },
  {
    title: 'Subtitle x Godzilla – TIDES',
    path: 'subtitle-godzilla-tides',
    video: { provider: 'gumlet', assetId: '6afeb19dc7baea83245609b4', duration: 19 },
  },
  {
    title: 'Red Bull – Tokyo Drift [editors cut]',
    path: 'red-bull-tokyo-drift',
    video: { provider: 'gumlet', assetId: '6afe895688996d78dd0eb2cf', duration: 52 },
  },
  {
    title: 'Cartier – Santos Titanium',
    path: 'cartier-santos',
    video: { provider: 'gumlet', assetId: '6afe895788996d78dd0eb2d1', duration: 60 },
  },
  {
    title: 'On Running – On Labs Tokyo',
    path: 'on-running-olt',
    video: { provider: 'gumlet', assetId: '6afe8958c7baea8324557d95', duration: 27 },
  },
  {
    title: 'Pei-Yu Hung – It\'s Nothing Personal',
    path: 'pei-yu-hung-its-nothing-personal',
    video: { provider: 'gumlet', assetId: '6afe896d88996d78dd0eb31c', duration: 204 },
  },
  {
    title: 'NIGHTCRWLR – Madhouse',
    path: 'nightcrwlr-madhouse',
    video: { provider: 'gumlet', assetId: '6afe895888996d78dd0eb2d7', duration: 368 },
  },
  {
    title: 'Sweet Revenge – Mine',
    path: 'sweet-revenge-mine',
    video: { provider: 'gumlet', assetId: '6afe895988996d78dd0eb2da', duration: 203 },
  },
  {
    title: 'Without a Sound [short film]',
    path: 'without-a-sound',
    video: { provider: 'gumlet', assetId: '6afe895ac7baea8324557d99', duration: 1823 },
  },
  {
    title: 'Sabukaru – Everyone x adidas',
    path: 'everyone-x-adidas',
    video: { provider: 'gumlet', assetId: '6afe895a88996d78dd0eb2e0', duration: 283 },
  },
  {
    title: '_J.L-A.L_ x Kolon Sport – Winter 2025',
    path: 'jlal-kolon-winter-25',
    video: { provider: 'gumlet', assetId: '6afe895bc7baea8324557d9f', duration: 96 },
  },
  {
    title: '_J.L-A.L_ x Kolon Sport – Fall 2025',
    path: 'jlal-kolon-fall-25',
    video: { provider: 'gumlet', assetId: '6afe895cc7baea8324557da1', duration: 94 },
  },
  {
    title: 'Slam Jam x Puma Mostro Gyaru',
    path: 'slam-jam-puma-gyaru',
    video: { provider: 'gumlet', assetId: '6afe895c88996d78dd0eb2e9', duration: 197 },
  },
  {
    title: 'Slam Jam x Puma Mostro Gyaru Teaser',
    path: 'slam-jam-puma-gyaru-teaser',
    video: { provider: 'gumlet', assetId: '6afe895d88996d78dd0eb2f0', duration: 30 },
  },
  {
    title: 'Louis Vuitton – Visionary Journeys',
    path: 'louis-vuitton-visionary-journeys',
    video: { provider: 'gumlet', assetId: '6afe895e88996d78dd0eb2f3', duration: 188 },
  },
  {
    title: 'NVSCVR – Pensarte',
    path: 'nvscvr-pensarte',
    video: { provider: 'gumlet', assetId: '6afe895ec7baea8324557db2', duration: 196 },
  },
  {
    title: 'Casio – Future Classic',
    path: 'casio-future-classic',
    video: { provider: 'gumlet', assetId: '6afe895fc7baea8324557db5', duration: 61 },
  },
  {
    title: 'Casio – Future Classic Interviews',
    path: 'casio-future-classic-interviews',
    video: { provider: 'gumlet', assetId: '6afe895f88996d78dd0eb2f9', duration: 129 },
  },
  {
    title: 'Casio – Future Classic 3.0',
    path: 'casio-future-classic-3',
    video: { provider: 'gumlet', assetId: '6afe8960c7baea8324557de4', duration: 60 },
  },
  {
    title: 'Clarks – Wallabee Day',
    path: 'clarks-wallabee-day',
    video: { provider: 'gumlet', assetId: '6afe8961c7baea8324557de7', duration: 90 },
  },
  {
    title: 'Brandy Senki – Fix',
    path: 'fix-brandy-senki',
    video: { provider: 'gumlet', assetId: '6afe896188996d78dd0eb2fc', duration: 221 },
  },
  {
    title: 'Shu Uemura – Needle Brow Pencils',
    path: 'needle-brow-pencils',
    video: { provider: 'gumlet', assetId: '6afe896288996d78dd0eb2ff', duration: 18 },
  },
  {
    title: 'adidas China – future prophecy',
    path: 'adidas-china-future-prophecy',
    video: { provider: 'gumlet', assetId: '6afe8963c7baea8324557de9', duration: 29 },
  },
  {
    title: 'Brandy Senki – Last Live',
    path: 'last-live-brandy-senki',
    video: { provider: 'gumlet', assetId: '6afe8963c7baea8324557deb', duration: 171 },
  },
  {
    title: 'ASICS x size – GEL-SEKIRAN',
    path: 'asics-x-size-gel-sekiran',
    video: { provider: 'gumlet', assetId: '6afe896488996d78dd0eb302', duration: 19 },
  },
  {
    title: 'Liza ft. Sheida – Paradise',
    path: 'liza-paradise',
    video: { provider: 'gumlet', assetId: '6afe8965c7baea8324557ded', duration: 186 },
  },
  {
    title: 'Nike – SNDR',
    path: 'nike-sndr',
    video: { provider: 'gumlet', assetId: '6afe8965c7baea8324557df0', duration: 45 },
  },
  {
    title: 'Shu Uemura – Kinu Care Glow Up',
    path: 'kinu-care-glow-up',
    video: { provider: 'gumlet', assetId: '6afe896688996d78dd0eb305', duration: 16 },
  },
  {
    title: 'Shu Uemura – Kinu Care Lip Hack',
    path: 'kinu-care-lip-hack',
    video: { provider: 'gumlet', assetId: '6afe896688996d78dd0eb307', duration: 17 },
  },
  {
    title: 'Brandy Senki – 27:00',
    path: '2700-brandy-senki',
    video: { provider: 'gumlet', assetId: '6afe8967c7baea8324557df3', duration: 260 },
  },
  {
    title: 'HÄN – BRIDGES',
    path: 'han-bridges',
    video: { provider: 'gumlet', assetId: '6afe8967c7baea8324557df5', duration: 301 },
  },
  {
    title: 'Brandy Senki – Coming-of-Age Story',
    path: 'coming-of-age-story-brandy-senki',
    video: { provider: 'gumlet', assetId: '6afe8968c7baea8324557df7', duration: 215 },
  },
  {
    title: 'HÄN – CHROME',
    path: 'han-chrome',
    video: { provider: 'gumlet', assetId: '6afe8969c7baea8324557df9', duration: 156 },
  },
  {
    title: 'NENE ft. Young Coco – Yummy',
    path: 'yummy-nene-ft-young-coco',
    video: { provider: 'gumlet', assetId: '6afe8969c7baea8324557e00', duration: 139 },
  },
  {
    title: 'Yurufuwa Gang x Glogang – Do It Like Me',
    path: 'do-it-like-me-yurufuwa-gang-x-glogang',
    video: { provider: 'gumlet', assetId: '6afe896ac7baea8324557e02', duration: 156 },
  },
  {
    title: 'Sony – Nuro Mobile Brand Commercial',
    path: 'sony-nuro-mobile-brand-commercial',
    video: { provider: 'gumlet', assetId: '6afe896ac7baea8324557e2e', duration: 60 },
  },
  {
    title: 'Sony – Nuro Mobile Plan Commercial',
    path: 'sony-nuro-mobile-plan-commercial',
    video: { provider: 'gumlet', assetId: '6afe896b88996d78dd0eb318', duration: 30 },
  },
  {
    title: 'SoftBank – StationAI Teaser',
    path: 'softbank-station-ai-teaser',
    video: { provider: 'gumlet', assetId: '6afe896c88996d78dd0eb31a', duration: 15 },
  },
  {
    title: 'The Nunchuck Princess',
    path: 'the-nunchuck-princess',
    video: { provider: 'gumlet', assetId: '6afe896cc7baea8324557e31', duration: 85 },
  },
  {
    title: 'adidas Forum – Phoebes Angels',
    path: 'phoebes-angels-adidas-forum',
    video: { provider: 'gumlet', assetId: '6afe896dc7baea8324557e33', duration: 90 },
  },
] as const;

export const projects = projectCatalog;

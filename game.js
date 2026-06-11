/* ════════════════════════════════════════════════════
   PORTFOLIO QUEST — a tiny game portfolio
   Pierre Sabbagh · vanilla JS · PICO-8 palette
   ════════════════════════════════════════════════════ */
(function () {
'use strict';

/* ───────────────────────── DATA ───────────────────────── */

const DATA = {
  about: {
    name: 'Pierre Sabbagh',
    role: 'Senior Mobile & Web Developer',
    loc: 'Biaqout, Lebanon · Remote',
    bio: 'Building performant, beautiful experiences across Flutter, React Native & Angular — from app stores to production web, for users at scale.',
    bio2: 'Led the migration of Lebanon’s top news apps to Flutter, keeping them online 24/7 for millions of users during national instability. Currently building across mobile & web simultaneously at DomainAgents and Adrea.',
    stats: [['5+', 'YEARS EXPERIENCE'], ['15+', 'APPS SHIPPED'], ['1M+', 'USERS REACHED']],
  },
  skills: [
    { name: 'STACK', items: 'Flutter · Angular · React Native · React · Node.js · iOS & Android · tvOS & Tizen · Go · MySQL' },
    { name: 'AI & DEVOPS', items: 'Claude Code · MCP · Firebase · CI/CD · Docker · Kubernetes · Cloudflare · App & Play Store deployments' },
    { name: 'LANGUAGES', items: 'Arabic (native) · English (professional) · French (professional)' },
    { name: 'EDUCATION', items: 'BS Computer Science — Arab Open University, Antelias · 2017–2020' },
  ],
  xp: [
    {
      co: 'Adrea', role: 'Mobile Developer', date: 'Jan 2025 — Present', loc: 'Remote · Contract', now: true,
      points: [
        'Lead mobile development of the Adrea app — a comprehensive equestrian facility management platform with live video feed, push notifications, horse medical records, and data analytics driven by AI oversight.',
      ],
      tags: 'Flutter · AI · Live Streaming · Push Notifications',
    },
    {
      co: 'DomainAgents', role: 'Web Developer', date: 'Nov 2024 — Apr 2026', loc: 'Remote',
      points: [
        'Lead front-end development, maintaining and enhancing features of domainagents.com and various sub-projects.',
        'Engineered a custom Dynamic Landing Page Builder from scratch, increasing internal marketing agility.',
        'Full Stack contribution on the Backend/DevOps side.',
      ],
      tags: 'Angular · Full Stack · DevOps',
    },
    {
      co: 'Softimpact', role: 'Mobile Developer', date: 'Jan 2023 — Nov 2024', loc: 'Jdeideh',
      points: [
        'Led migration of top news apps to Flutter — Al Jadeed and Lebanon 24 — maintaining 24/7 uptime for millions of users during national instability. Also built Fujairah TV, Aliman TV, and Ekher el Akhbar with live streaming, Google Cast & AirPlay, PiP, IMA Ads, QR Code login, and more.',
        'Led Al Jadeed for tvOS in React Native and contributed to its Tizen implementation using web technologies.',
        'Developed Ian Assist (Mideast Assistance) with support tickets, live chat, claim submissions & document uploads.',
        'Rebuilt the Ticketing Box Office app with event browsing, direct booking, ticket scanning, and integrated charts.',
      ],
      tags: 'Flutter · React Native · tvOS · Tizen · Live Streaming · Google Cast',
    },
    {
      co: 'Early Career', role: 'Mobile Developer', sub: 'TheWebAddicts · Fodigi · Behind Pixel', date: 'Jan 2021 — Jan 2023', loc: 'Lebanon',
      points: [
        'Architected a unified cinema booking ecosystem (POS Desktop, Kiosk, Mobile) for Iraqi Cinema; shipped Target Food, Artist and More, and USA Cab Ads with GPS tracking and analytics.',
        'Built e-commerce apps (Urban Beirut, Beirutic) and a real-time delivery tracking app with Google Maps integration.',
      ],
      tags: 'Flutter · E-commerce · GPS & Maps · Analytics',
    },
  ],
  projects: [
    { name: 'Al Jadeed', platforms: 'iOS · Android · tvOS',
      desc: 'Leading Lebanese news app rebuilt in Flutter — live streaming, Google Cast & AirPlay, PiP, IMA Ads, QR Code login, and Push Notifications for millions of daily users.',
      tags: 'Flutter · Live Streaming · Google Cast',
      icon: 'https://play-lh.googleusercontent.com/ReFFJhnXvO9OzTmH9VukFQzJxxgZhPD-NXBD5HL3HvJ90H7RMseOXc7LAETb0cjr3A=w120-h120',
      links: [['PLAY STORE', 'https://play.google.com/store/apps/details?id=mobi.foo.aljadeed'], ['APP STORE', 'https://apps.apple.com/us/app/al-jadeed/id548634879']] },
    { name: 'Adrea', platforms: 'iOS · Android',
      desc: 'Equestrian facility management platform — live video feed, AI-driven health analytics, horse medical records, push notifications, and daily operations oversight.',
      tags: 'Flutter · AI · Live Video',
      icon: 'https://play-lh.googleusercontent.com/GIXOPsIwCMz2TgqzGTHYAdnW_t2wRYBdEZEE2V0B5iMkgNbcuIggOG3xKAgDtc0VTZKL-EWPJx9s5YpKNLfPWdc=w120-h120',
      links: [['PLAY STORE', 'https://play.google.com/store/apps/details?id=ae.adrea.app'], ['APP STORE', 'https://apps.apple.com/ca/app/adrea/id6758053445']] },
    { name: 'DomainAgents', platforms: 'Web',
      desc: 'Domain name broker & marketplace platform. Led front-end development and engineered a custom Dynamic Landing Page Builder, plus full-stack DevOps contributions.',
      tags: 'Angular · Full Stack · DevOps',
      icon: 'https://www.google.com/s2/favicons?domain=domainagents.com&sz=128',
      links: [['VISIT SITE', 'https://domainagents.com']] },
    { name: 'Lebanon 24', platforms: 'iOS · Android',
      desc: 'Top Lebanese digital news platform migrated to Flutter — real-time alerts, live coverage, and seamless multimedia experience for millions of readers.',
      tags: 'Flutter · Push Notifications · Live News',
      icon: 'https://play-lh.googleusercontent.com/JhR2vPoauftbRuKA5QqgbUiFk9J8Zom_ug3vT1mrLkSSFyI99tE_aUPVpgMEiRq_340=w120-h120',
      links: [['PLAY STORE', 'https://play.google.com/store/apps/details?id=mobi.foo.lebanon24iPad'], ['APP STORE', 'https://apps.apple.com/us/app/lebanon-24-%D9%84%D8%A8%D9%86%D8%A7%D9%86-24/id595926843']] },
    { name: 'Fujairah TV', platforms: 'iOS · Android',
      desc: 'UAE news & entertainment app with live TV streaming, catch-up playback, sports coverage, and social sharing built with Flutter.',
      tags: 'Flutter · Live Streaming',
      icon: 'https://play-lh.googleusercontent.com/2IFD58yrUKASZJyqMpZRvRhbP1kFc3JHDh6WFy2FnsSnkHhNXGU_2T-9WNHVBBBrag=w120-h120',
      links: [['PLAY STORE', 'https://play.google.com/store/apps/details?id=com.fujairah.tv'], ['APP STORE', 'https://apps.apple.com/lb/app/fujairah-tv/id6479038841']] },
    { name: 'Ticketing Box Office', platforms: 'iOS · Android',
      desc: 'Event ticketing app rebuilt from scratch — event browsing, seat selection, direct booking, and ticket scanning with integrated analytics charts.',
      tags: 'Flutter · Ticketing · QR Scan',
      icon: 'https://play-lh.googleusercontent.com/oRuRzJ_TGDboW5nw1ErgzMij7SfNwoFJFGqsAoRKhZENARDwwxv79k1wOiENA1CcZg=w120-h120',
      links: [['PLAY STORE', 'https://play.google.com/store/apps/details?id=air.com.ticketingboxoffice.mobileapp'], ['APP STORE', 'https://apps.apple.com/lb/app/ticketing-boxoffice/id928469595']] },
    { name: 'Ekher El Akhbar', platforms: 'iOS · Android',
      desc: 'Lebanese breaking news app with instant push alerts and topic customization across politics, sports, and entertainment.',
      tags: 'Flutter · Push Notifications',
      icon: 'https://play-lh.googleusercontent.com/NjB0jmFtxDPrKG-ClqBxMe8ygMV20tdi9UUTGrPC0uxJwLfPxVvMSH-qUciLKIbaRQ=w120-h120',
      links: [['PLAY STORE', 'https://play.google.com/store/apps/details?id=air.ekherelakhbar.com'], ['APP STORE', 'https://apps.apple.com/us/app/ekher-el-akhbar/id797601087']] },
    { name: 'Aliman TV', platforms: 'iOS · Android',
      desc: 'Lebanese TV channel app with live broadcast streaming, program schedules, and episode catch-up built with Flutter.',
      tags: 'Flutter · Live TV',
      icon: 'https://play-lh.googleusercontent.com/0xzwga2oE-6bUp7tggVMlMKCbPVmfXf0xwKpUF6UQ_qPveg3riA6EeE29COrCXKUhGTN=w120-h120',
      links: [['PLAY STORE', 'https://play.google.com/store/apps/details?id=air.com.lb.alimantv.app'], ['APP STORE', 'https://apps.apple.com/us/app/%D9%82%D9%86%D8%A7%D8%A9-%D8%A7%D9%84%D8%A7%D9%8A%D9%85%D8%A7%D9%86-%D8%A7%D9%84%D9%81%D8%B6%D8%A7%D8%A6%D9%8A%D8%A9/id1591624476']] },
    { name: 'Ian Assist', platforms: 'iOS · Android',
      desc: 'Mideast Assistance app featuring live chat support, claim submissions, document uploads, and real-time ticket tracking.',
      tags: 'Flutter · Live Chat · Claims',
      icon: 'https://play-lh.googleusercontent.com/ylzgUrn0IgOnJcS5MeWfr9kOkrzcpefvwU5XJm894kjuAHH1qrte-Bvhtetb812BiqRt=w120-h120',
      links: [['PLAY STORE', 'https://play.google.com/store/apps/details?id=com.ianassist.ianapp'], ['APP STORE', 'https://apps.apple.com/us/app/ian-assist/id1667218731']] },
    { name: 'Iraqi Cinema', platforms: 'Desktop · Kiosk · Mobile',
      desc: 'Unified cinema booking ecosystem — POS desktop, self-service kiosk, and mobile app built for Iraqi Cinema with seat selection and payment processing.',
      tags: 'Flutter · POS · Kiosk',
      icon: 'https://play-lh.googleusercontent.com/J3n2CpwB9lPhm2RwJQR7hayxOarr2Qs2EXgNhpz8DGoEHvVYYBYOd35f-LYqh0LMD8M=w120-h120',
      links: [], private: true },
    { name: 'Target Food', platforms: 'iOS · Android',
      desc: 'Full-featured e-commerce grocery app with product browsing, cart, checkout, and delivery tracking built with Flutter for a seamless shopping experience.',
      tags: 'Flutter · E-commerce · Grocery',
      icon: 'https://play-lh.googleusercontent.com/P7RHfYsTNpww7P0j_FMCn9GHhlEDjTxa-LDDj-HTgW-cvkTHjJ8FY0gKZP8oI_3Fnl8=w120-h120',
      links: [['PLAY STORE', 'https://play.google.com/store/apps/details?id=com.thewebaddicts.targetfood'], ['APP STORE', 'https://apps.apple.com/lb/app/target-food/id1629391815']] },
    { name: 'Urban Beirut', platforms: 'iOS · Android',
      desc: 'E-commerce app for purchasing customizable furniture with a seamless, user-centric shopping experience built with Flutter.',
      tags: 'Flutter · E-commerce · Furniture',
      icon: 'https://play-lh.googleusercontent.com/Nk60R9EnjCX97tTtUuqVKP8A_wbKBZNHrWangkbq1wN42HxgbbPO0xndQUaIwIPj2zk=w120-h120',
      links: [['PLAY STORE', 'https://play.google.com/store/apps/details?id=com.fodigi.urbanbeirut'], ['APP STORE', 'https://apps.apple.com/us/app/urban-beirut/id1622005589']] },
    { name: 'Beirutic', platforms: 'iOS · Android',
      desc: 'E-commerce app for purchasing tech products and appliances with smooth browsing, filtering, and a seamless purchase flow built with Flutter.',
      tags: 'Flutter · E-commerce · Tech Products',
      icon: 'https://play-lh.googleusercontent.com/ulef_K3Uu7_k1uXN1eimCdIoqDCEe-P_FaPwuejs3D0AmhLcV1Z_m2ruUcxGBMgDrtY=w120-h120',
      links: [['PLAY STORE', 'https://play.google.com/store/apps/details?id=com.fodigi.beirutic'], ['APP STORE', 'https://apps.apple.com/us/app/beirutic/id6480465383']] },
    { name: 'Artist and More', platforms: 'iOS · Android',
      desc: 'Event admission ticket scanner app — fast QR/barcode scanning, attendee validation, and real-time entry management built with Flutter.',
      tags: 'Flutter · QR Scan · Events',
      icon: 'https://play-lh.googleusercontent.com/qo5bb8IO-5weDL4IRIoUYOu8EeejVN9oIzlvtCCL5v7nP2J1ZBvNm2kzy1dE0QieaOQ=w120-h120',
      links: [['PLAY STORE', 'https://play.google.com/store/apps/details?id=com.thewebaddicts.artists_and_more_door_control'], ['APP STORE', 'https://apps.apple.com/lb/app/artists-and-more/id1632908576']] },
    { name: 'USA Cab Ads', platforms: 'iOS · Android',
      desc: 'NYC cab advertisement monitoring app with real-time GPS tracking, campaign analytics, and advanced reporting dashboards built with Flutter.',
      tags: 'Flutter · GPS Tracking · Analytics',
      icon: 'https://play-lh.googleusercontent.com/cdTEQTDG45N4c9JBPxrMKSc0K3y9bTGk--jAELFWqwyStjZQi3E0EX4CmTqfVsQjBIZm=w120-h120',
      links: [['PLAY STORE', 'https://play.google.com/store/apps/details?id=com.thewebaddicts.usa_cab_ads_app'], ['APP STORE', 'https://apps.apple.com/us/app/usa-cab-ads/id6445888428']] },
  ],
  contact: {
    line: 'Open to new opportunities, collaborations, and interesting projects. Drop me a line!',
    email: 'sabbaghpierre@proton.me',
    github: 'https://github.com/sabbaghpierre',
  },
};

/* ───────────────────────── PALETTE (PICO-8) ───────────────────────── */

const P8 = ['#000000', '#1D2B53', '#7E2553', '#008751', '#AB5236', '#5F574F', '#C2C3C7', '#FFF1E8',
            '#FF004D', '#FFA300', '#FFEC27', '#00E436', '#29ADFF', '#83769C', '#FF77A8', '#FFCCAA'];

const TILE = 16, COLS = 15, ROWS = 10, W = 240, H = 160;

/* ───────────────────────── ROOMS ───────────────────────── */

const ROOMS = {
  plaza: {
    name: 'TOWN PLAZA',
    exits: { w: 'arcade', e: 'town', n: { to: 'garden', col: 7 }, s: { to: 'pier', col: 7 } },
    map: [
      '#######p#######',
      '#......p...c..#',
      '#..S...p...C..#',
      '#......p......#',
      '#.,....p....,.#',
      'ppppppppppppppp',
      '#......p......#',
      '#..G...p...f..#',
      '#......p......#',
      '#######p#######',
    ],
  },
  garden: {
    name: 'SKILL GARDEN',
    exits: { s: { to: 'plaza', col: 7 }, n: { to: 'grove', col: 12 } },
    map: [
      // one quiet gap in the north tree line — the way into the grove
      '############,##',
      '#..f.....f....#',
      '#......L....,.#',
      '#..f...p....f.#',
      '#......p......#',
      '#.f....p...Q..#',
      '#...f..p.f....#',
      '#.f....p....f.#',
      '#......p......#',
      '#######p#######',
    ],
  },
  town: {
    name: 'CAREER STREET',
    exits: { w: 'plaza' },
    map: [
      '###############',
      'RRR#RRR#RRR#RRR',
      'H1H#H2H#H3H#H4H',
      '#p...p...p...p#',
      '#p...p...p...p#',
      'pppppppppppppp#',
      '#..f...b..,...#',
      '#.,...f....f..#',
      '#......,......#',
      '###############',
    ],
  },
  arcade: {
    name: 'PROJECT ARCADE',
    exits: { e: 'plaza' },
    map: [
      '###############',
      '#.....,.......#',
      '#....AAA..K...#',
      '#.....p.......#',
      '#.....p..f....#',
      '#.....ppppppppp',
      '#..,......f...#',
      '#...f...,.....#',
      '#.....f.......#',
      '###############',
    ],
  },
  pier: {
    name: 'CONTACT PIER',
    exits: { n: { to: 'plaza', col: 7 } },
    map: [
      '#######p#######',
      '#..,...pwwwwww#',
      '#.f....pwwwwww#',
      '#......pwwwwww#',
      '#..f...pwwwwww#',
      '#......pBBBBBM#',
      '#.,....,wwwwww#',
      '#..f...,wwwwww#',
      '#.....,.wwwwww#',
      '###############',
    ],
  },
  grove: {
    name: 'HIDDEN GROVE',
    exits: { s: { to: 'garden', col: 12 } },
    map: [
      '###############',
      '##.........####',
      '#...##.......##',
      '##......T....##',
      '#.....,.......#',
      '##..#....##..##',
      '#......,.....##',
      '##...##.......#',
      '###..........##',
      '############,##',
    ],
  },
};

const WALKABLE = new Set(['.', ',', 'f', 'p', 'B']);
const INTERACT = {
  S: { id: 'about',     hint: true },
  T: { id: 'terminal',  hint: true },
  L: { id: 'expertise', hint: true },
  A: { id: 'projects',  hint: true },
  b: { id: 'bugs',      hint: true },
  K: { id: 'catcher',   hint: true },
  Q: { id: 'simon',     hint: true },
  M: { id: 'contact',   hint: true },
  G: { id: 'map',       hint: true },
  C: { id: 'clock',     hint: true },
  c: { id: 'clock',     hint: true },
  w: { id: 'fish',      hint: true },
  1: { id: 'xp-0',      hint: true },
  2: { id: 'xp-1',      hint: true },
  3: { id: 'xp-2',      hint: true },
  4: { id: 'xp-3',      hint: true },
};
const EXIT_ROW = 5;

/* ───────────────────────── PLAYER SPRITES ───────────────────────── */

const SPRITE_COLORS = { k: P8[0], s: P8[15], h: P8[4], b: P8[12], d: P8[1] };

const SPR = {
  down: [[
    '............',
    '....kkkk....',
    '...khhhhk...',
    '..khhhhhhk..',
    '..khhhhhhk..',
    '..kssssssk..',
    '..kskssksk..',
    '..kssssssk..',
    '...kssssk...',
    '..kbbbbbbk..',
    '.kbbbbbbbbk.',
    '.ksbbbbbbsk.',
    '.kkbbbbbbkk.',
    '..kddddddk..',
    '..kdk..kdk..',
    '..kk....kk..',
  ], [
    '............',
    '....kkkk....',
    '...khhhhk...',
    '..khhhhhhk..',
    '..khhhhhhk..',
    '..kssssssk..',
    '..kskssksk..',
    '..kssssssk..',
    '...kssssk...',
    '..kbbbbbbk..',
    '.kbbbbbbbbk.',
    '.ksbbbbbbsk.',
    '.kkbbbbbbkk.',
    '..kddddddk..',
    '...kdkkdk...',
    '...kk..kk...',
  ]],
  up: [[
    '............',
    '....kkkk....',
    '...khhhhk...',
    '..khhhhhhk..',
    '..khhhhhhk..',
    '..khhhhhhk..',
    '..khhhhhhk..',
    '..khhhhhhk..',
    '...khhhhk...',
    '..kbbbbbbk..',
    '.kbbbbbbbbk.',
    '.ksbbbbbbsk.',
    '.kkbbbbbbkk.',
    '..kddddddk..',
    '..kdk..kdk..',
    '..kk....kk..',
  ], [
    '............',
    '....kkkk....',
    '...khhhhk...',
    '..khhhhhhk..',
    '..khhhhhhk..',
    '..khhhhhhk..',
    '..khhhhhhk..',
    '..khhhhhhk..',
    '...khhhhk...',
    '..kbbbbbbk..',
    '.kbbbbbbbbk.',
    '.ksbbbbbbsk.',
    '.kkbbbbbbkk.',
    '..kddddddk..',
    '...kdkkdk...',
    '...kk..kk...',
  ]],
  right: [[
    '............',
    '....kkkk....',
    '...khhhhk...',
    '..khhhhhhk..',
    '..khhhhhhk..',
    '..khsssssk..',
    '..khsskssk..',
    '..khsssssk..',
    '...kssssk...',
    '..kbbbbbbk..',
    '.kbbbbbbbbk.',
    '.kbbbbbbsbk.',
    '.kkbbbbbbkk.',
    '..kddddddk..',
    '..kdk..kdk..',
    '..kk....kk..',
  ], [
    '............',
    '....kkkk....',
    '...khhhhk...',
    '..khhhhhhk..',
    '..khhhhhhk..',
    '..khsssssk..',
    '..khsskssk..',
    '..khsssssk..',
    '...kssssk...',
    '..kbbbbbbk..',
    '.kbbbbbbbbk.',
    '.kbbbbbbsbk.',
    '.kkbbbbbbkk.',
    '..kddddddk..',
    '...kdkkdk...',
    '...kk..kk...',
  ]],
};

/* ───────────────────────── CANVAS ───────────────────────── */

const cvs = document.getElementById('game');
const ctx = cvs.getContext('2d');
ctx.imageSmoothingEnabled = false;

const wrap = document.getElementById('screenWrap');
const stage = document.getElementById('stage');

function fit() {
  const touchVisible = getComputedStyle(document.getElementById('touch')).display !== 'none';
  const availW = window.innerWidth - 20;
  const availH = window.innerHeight - (touchVisible ? 200 : 90);
  let s = Math.min(availW / W, availH / H);
  if (s >= 2) s = Math.floor(s);                  // crisp integer scaling on big screens
  else s = Math.max(1, Math.floor(s * 4) / 4);    // quarter-steps on phones so the console fills the width
  wrap.style.width = (W * s) + 'px';
  wrap.style.height = (H * s) + 'px';
}
window.addEventListener('resize', fit);

/* ───────────────────────── AUDIO ───────────────────────── */

let actx = null;
let muted = localStorage.getItem('pq_mute') === '1';

function beep(freq, dur, vol, type) {
  if (muted) return;
  try {
    actx = actx || new (window.AudioContext || window.webkitAudioContext)();
    if (actx.state === 'suspended') actx.resume();
    const o = actx.createOscillator(), g = actx.createGain();
    o.type = type || 'square';
    o.frequency.value = freq;
    g.gain.setValueAtTime(vol || 0.04, actx.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, actx.currentTime + dur);
    o.connect(g); g.connect(actx.destination);
    o.start(); o.stop(actx.currentTime + dur);
  } catch (e) { /* audio unavailable */ }
}
const sfx = {
  move:   () => beep(880, 0.04, 0.015, 'square'),
  select: () => { beep(660, 0.07, 0.04); setTimeout(() => beep(990, 0.1, 0.04), 70); },
  open:   () => { beep(523, 0.06, 0.04); setTimeout(() => beep(784, 0.09, 0.04), 60); },
  close:  () => beep(330, 0.08, 0.035),
  bump:   () => beep(110, 0.05, 0.03, 'triangle'),
  step:   () => beep(196, 0.03, 0.012, 'triangle'),
  plink:  () => { beep(990, 0.05, 0.045); setTimeout(() => beep(660, 0.06, 0.04), 70); setTimeout(() => beep(392, 0.1, 0.03), 150); },
  cast:   () => { beep(740, 0.05, 0.035); setTimeout(() => beep(500, 0.08, 0.03), 60); },
  bite:   () => { beep(1175, 0.06, 0.05); setTimeout(() => beep(1175, 0.06, 0.05), 90); },
  reel:   () => { beep(523, 0.07, 0.045); setTimeout(() => beep(659, 0.07, 0.045), 80); setTimeout(() => beep(784, 0.12, 0.05), 160); },
  golden: () => { [523, 659, 784, 1047, 1319].forEach((f, i) => setTimeout(() => beep(f, 0.09, 0.05), i * 90)); },
  missF:  () => beep(98, 0.22, 0.04, 'sawtooth'),
  pop:    () => beep(880, 0.04, 0.04),
  squish: () => { beep(160, 0.05, 0.05); setTimeout(() => beep(110, 0.06, 0.04), 40); },
};
function toggleMute() {
  muted = !muted;
  localStorage.setItem('pq_mute', muted ? '1' : '0');
  toast(muted ? 'SOUND OFF' : 'SOUND ON');
  if (!muted) sfx.select();
}

/* ───────────────────────── STATE ───────────────────────── */

let state = 'menu';            // menu | game | dialog | term
let worldStarted = false;
let dialogReturn = 'menu';     // where ESC from a dialog goes
let termReturn = 'menu';

function setState(s) {
  state = s;
  document.body.dataset.state = s;
}

/* ───────────────────────── INPUT ───────────────────────── */

const IS_TOUCH = window.matchMedia('(pointer: coarse)').matches;
// legend wording follows the input device: keyboard keys vs A/B buttons
const H_OPEN = IS_TOUCH ? 'A OPEN' : 'ENTER OPEN';
const H_BACK = IS_TOUCH ? 'B BACK' : 'X / ESC BACK';

const held = { up: false, down: false, left: false, right: false };
const dirOrder = [];
const KEYMAP = {
  arrowup: 'up', w: 'up', arrowdown: 'down', s: 'down',
  arrowleft: 'left', a: 'left', arrowright: 'right', d: 'right',
};

function holdDir(d, on) {
  if (held[d] === on) return;
  held[d] = on;
  const i = dirOrder.indexOf(d);
  if (i > -1) dirOrder.splice(i, 1);
  if (on) dirOrder.push(d);
}
function activeDir() {
  for (let i = dirOrder.length - 1; i >= 0; i--) if (held[dirOrder[i]]) return dirOrder[i];
  return null;
}

document.addEventListener('keydown', (e) => {
  // terminal toggle works everywhere
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    state === 'term' ? closeTerminal() : openTerminal();
    return;
  }
  // while typing in the terminal, only Escape gets through
  if (e.target === termInput) {
    if (e.key === 'Escape') closeTerminal();
    return;
  }

  const k = e.key.toLowerCase();
  if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright', ' '].includes(e.key.toLowerCase()) ||
      ['arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(k)) e.preventDefault();

  if (k === 'm') { toggleMute(); return; }

  if (KEYMAP[k]) {
    holdDir(KEYMAP[k], true);
    // key-repeat is allowed for menu/dialog navigation so holding
    // an arrow scrolls; the game world polls held keys itself
    if (state === 'menu') menuMove(KEYMAP[k]);
    if (state === 'dialog') dlgMove(KEYMAP[k]);
    if (state === 'mini' && MINI && MINI.move && !e.repeat) MINI.move(KEYMAP[k]);
    return;
  }
  if (e.repeat) return;
  if (k === 'enter' || k === ' ' || k === 'e' || k === 'z') { e.preventDefault(); pressAction(); }
  else if (k === 'escape' || k === 'backspace' || k === 'x') pressCancel();
});
document.addEventListener('keyup', (e) => {
  const k = e.key.toLowerCase();
  if (KEYMAP[k]) holdDir(KEYMAP[k], false);
});
window.addEventListener('blur', () => { ['up', 'down', 'left', 'right'].forEach(d => holdDir(d, false)); });

function pressAction() {
  if (state === 'menu') menuActivate();
  else if (state === 'game') tryInteract();
  else if (state === 'dialog') dlgActivate();
  else if (state === 'mini' && MINI) MINI.action();
}
function pressCancel() {
  if (state === 'term') closeTerminal();
  else if (state === 'mini' && MINI) MINI.quit();
  else if (state === 'dialog') dlgBack();
  else if (state === 'game') { sfx.close(); openMenu(); }
  else if (state === 'menu' && worldStarted) { sfx.select(); resumeGame(); }
}

/* touch controls */
const lastPress = {};

// A button press can change state (open a dialog/project). The tap then
// emits a trailing `click` that lands on whatever is now under the finger
// — e.g. a freshly-revealed list row — opening it by accident. Swallow
// that one ghost click. One-shot + time-boxed so real clicks survive.
let swallowClickUntil = 0;
document.addEventListener('click', (e) => {
  if (performance.now() < swallowClickUntil) {
    swallowClickUntil = 0;
    e.stopPropagation();
    e.preventDefault();
  }
}, true);

document.querySelectorAll('.tbtn').forEach(btn => {
  const k = btn.dataset.k;
  const press = (e) => {
    e.preventDefault();
    // A single tap can fire twice: touch browsers (and Firefox's
    // responsive mode) dispatch both a touch and an echoed mouse
    // pointer event for one press, in either order. Debounce per
    // button so the same physical tap only registers once.
    const now = performance.now();
    if (now - (lastPress[k] || 0) < 350) return;
    lastPress[k] = now;
    swallowClickUntil = now + 500;
    if (k === 'action') { pressAction(); return; }
    if (k === 'cancel') { pressCancel(); return; }
    holdDir(k, true);
    if (state === 'menu') menuMove(k);
    if (state === 'dialog') dlgMove(k);
    if (state === 'mini' && MINI && MINI.move) MINI.move(k);
  };
  const release = (e) => { e.preventDefault(); if (held[k] !== undefined) holdDir(k, false); };
  btn.addEventListener('contextmenu', (e) => e.preventDefault());
  btn.addEventListener('pointerdown', press);
  btn.addEventListener('pointerup', release);
  btn.addEventListener('pointerleave', release);
  btn.addEventListener('pointercancel', release);
});

/* ───────────────────────── DRAW HELPERS ───────────────────────── */

let NOW = 0; // current frame time, readable by all tile painters
function px(x, y, w, h, c) { ctx.fillStyle = c; ctx.fillRect(Math.round(x), Math.round(y), w, h); }
function hash(x, y) { return ((x * 73856093) ^ (y * 19349663)) >>> 0; }

function drawMap(map, colors, dx, dy, flip) {
  for (let r = 0; r < map.length; r++) {
    const row = map[r];
    for (let c = 0; c < row.length; c++) {
      const ch = row[c];
      if (ch === '.' || ch === ' ') continue;
      const col = colors[ch];
      if (!col) continue;
      const cc = flip ? row.length - 1 - c : c;
      px(dx + cc, dy + r, 1, 1, col);
    }
  }
}

const DIGITS = {
  1: ['010', '110', '010', '010', '111'],
  2: ['111', '001', '111', '100', '111'],
  3: ['111', '001', '011', '001', '111'],
  4: ['101', '101', '111', '001', '001'],
};

/* ───────────────────────── TILES ───────────────────────── */

function drawGrass(x, y) {
  px(x, y, TILE, TILE, P8[3]);
  const h = hash(x, y);
  if (h % 3 === 0) px(x + (h % 13), y + ((h >> 3) % 13), 1, 2, P8[11]);
  if (h % 4 === 1) px(x + ((h >> 5) % 14), y + ((h >> 2) % 14), 1, 1, P8[1]);
  // occasional wind shimmer on a few blades
  if ((((h >> 8) ^ Math.floor(NOW / 480)) % 31) === 0)
    px(x + 3 + (h % 10), y + 3 + ((h >> 6) % 10), 1, 2, P8[11]);
}
function drawGrass2(x, y) {
  px(x, y, TILE, TILE, P8[3]);
  const h = hash(x, y);
  px(x + (h % 11) + 2, y + ((h >> 4) % 11) + 2, 2, 1, P8[11]);
}
function drawPath(x, y) {
  px(x, y, TILE, TILE, P8[15]);
  const h = hash(x, y);
  if (h % 3 === 0) px(x + (h % 12) + 1, y + ((h >> 4) % 12) + 1, 2, 1, P8[4]);
  if (h % 5 === 2) px(x + ((h >> 6) % 12) + 2, y + ((h >> 2) % 12) + 2, 1, 1, P8[9]);
}
function drawTree(x, y) {
  drawGrass(x, y);
  px(x + 6, y + 11, 4, 4, P8[4]);          // trunk
  px(x + 2, y + 2, 12, 9, P8[3]);          // canopy base
  px(x + 3, y + 1, 10, 1, P8[3]);
  px(x + 1, y + 3, 1, 6, P8[1]);           // outline-ish shading
  px(x + 14, y + 3, 1, 6, P8[1]);
  px(x + 3, y + 2, 8, 5, P8[11]);          // highlight
  px(x + 4, y + 11, 2, 1, P8[1]);
  const h = hash(x, y);
  px(x + 3 + (h % 8), y + 3 + ((h >> 3) % 4), 1, 1, P8[10]); // fruit/sparkle
}
function drawWater(x, y, t) {
  px(x, y, TILE, TILE, P8[12]);
  const ph = (Math.floor(t / 500) + ((x >> 4) + (y >> 4))) % 2;
  const h = hash(x, y);
  px(x + 2 + (h % 6), y + (ph ? 4 : 5), 4, 1, P8[7]);
  px(x + 8 - (h % 4), y + (ph ? 11 : 10), 3, 1, P8[7]);
  px(x + (h % 9), y + 14, 2, 1, P8[1]);
}
function drawFlower(x, y) {
  drawGrass(x, y);
  const h = hash(x, y);
  const col = [P8[8], P8[10], P8[14]][h % 3];
  // flower heads sway gently in the breeze, out of phase with each other
  const sway = (Math.floor(NOW / 650) + (h & 1)) % 2;
  const fx = x + 4 + (h % 6) + sway, fy = y + 4 + ((h >> 3) % 6);
  px(fx - sway, fy + 2, 1, 3, P8[11]);
  px(fx - 1, fy, 3, 1, col);
  px(fx, fy - 1, 1, 3, col);
  px(fx, fy, 1, 1, P8[7]);
}
function drawSign(x, y) {
  drawGrass(x, y);
  px(x + 7, y + 8, 2, 6, P8[4]);
  px(x + 2, y + 2, 12, 7, P8[0]);
  px(x + 3, y + 3, 10, 5, P8[9]);
  px(x + 4, y + 4, 8, 1, P8[4]);
  px(x + 4, y + 6, 6, 1, P8[4]);
}
function drawBoard(x, y) {
  px(x, y, TILE, TILE, P8[4]);
  px(x, y + 3, TILE, 1, P8[2]);
  px(x, y + 8, TILE, 1, P8[2]);
  px(x, y + 13, TILE, 1, P8[2]);
  px(x, y, 1, TILE, P8[5]);
  px(x, y + 15, TILE, 1, P8[0]);
}
const ROOF_COLORS = [P8[8], P8[9], P8[11], P8[14]];
function houseIndex(tx) { return Math.min(3, Math.floor(tx / 4)); }
function drawRoof(x, y, tx) {
  const c = ROOF_COLORS[houseIndex(tx)];
  px(x, y, TILE, TILE, c);
  px(x, y, TILE, 2, P8[7]);
  px(x, y + 14, TILE, 2, P8[2]);
  const h = hash(x, y);
  px(x + (h % 12) + 1, y + 4 + ((h >> 3) % 8), 2, 1, P8[2]);
  // a chimney on the right-hand roof tile of each house
  if (tx % 4 === 2) {
    px(x + 9, y + 2, 5, 6, P8[5]);
    px(x + 8, y + 1, 7, 2, P8[6]);
    px(x + 10, y + 3, 3, 1, P8[0]);
  }
}
function drawWall(x, y) {
  px(x, y, TILE, TILE, P8[7]);
  px(x, y, TILE, 1, P8[5]);
  px(x, y + 15, TILE, 1, P8[5]);
  px(x + 2, y + 4, 4, 4, P8[12]);   // little window
  px(x + 10, y + 4, 4, 4, P8[12]);
  px(x + 2, y + 4, 4, 1, P8[1]);
  px(x + 10, y + 4, 4, 1, P8[1]);
}
function drawDoor(x, y, num) {
  px(x, y, TILE, TILE, P8[7]);
  px(x, y, TILE, 1, P8[5]);
  px(x + 3, y + 4, 10, 12, P8[0]);
  px(x + 4, y + 5, 8, 11, P8[4]);
  px(x + 10, y + 10, 1, 2, P8[10]); // knob
  // number plate
  px(x + 5, y - 0 + 0, 6, 1, P8[0]);
  const d = DIGITS[num];
  if (d) {
    px(x + 5, y + 0, 5, 7, P8[0]);
    for (let r = 0; r < 5; r++)
      for (let c = 0; c < 3; c++)
        if (d[r][c] === '1') px(x + 6 + c, y + 1 + r, 1, 1, P8[7]);
  }
}
function drawArcade(x, y, t) {
  drawGrass(x, y);
  px(x + 1, y, 14, 16, P8[0]);
  px(x + 2, y + 1, 12, 14, P8[2]);
  px(x + 3, y + 1, 10, 2, P8[10]);          // marquee
  const f = Math.floor(t / 400) % 4;
  px(x + 4, y + 4, 8, 6, P8[1]);            // screen
  px(x + 5 + (f % 3), y + 5 + (f % 2), 2, 2, P8[11]);
  px(x + 9 - (f % 3), y + 7, 1, 1, P8[8]);
  px(x + 5, y + 12, 2, 2, P8[8]);           // buttons
  px(x + 9, y + 12, 2, 2, P8[11]);
}
function drawMailbox(x, y, t) {
  drawBoard(x, y); // the mailbox sits at the end of the dock
  px(x + 7, y + 9, 2, 6, P8[4]);
  px(x + 2, y + 3, 12, 7, P8[0]);
  px(x + 3, y + 4, 10, 5, P8[8]);
  px(x + 4, y + 6, 6, 1, P8[7]);            // slot
  const up = Math.floor(t / 700) % 2 === 0;
  px(x + 12, up ? y : y + 2, 2, 3, P8[10]); // flag
}
function drawComputer(x, y, t) {
  drawGrass(x, y);
  px(x + 1, y + 11, 14, 4, P8[4]);          // desk
  px(x + 1, y + 11, 14, 1, P8[15]);
  px(x + 3, y + 1, 10, 9, P8[5]);           // monitor
  px(x + 4, y + 2, 8, 6, P8[0]);            // screen
  const f = Math.floor(t / 350) % 3;
  px(x + 5, y + 3, 4 + f, 1, P8[11]);       // "code"
  px(x + 5, y + 5, 6 - f, 1, P8[11]);
  px(x + 5, y + 7, 3 + (f === 1 ? 2 : 0), 1, P8[9]);
  px(x + 6, y + 10, 4, 1, P8[5]);
}
function drawPedestal(x, y, t) {
  drawGrass(x, y);
  px(x + 4, y + 9, 8, 6, P8[6]);
  px(x + 3, y + 14, 10, 2, P8[5]);
  px(x + 5, y + 9, 6, 1, P8[7]);
  const bob = Math.floor(t / 450) % 2;
  const gy = y + 3 + bob;
  px(x + 7, gy, 2, 4, P8[14]);              // gem
  px(x + 6, gy + 1, 4, 2, P8[14]);
  px(x + 7, gy + 1, 1, 1, P8[7]);
}
// live Beirut time, refreshed every few seconds
let clockCache = { stamp: 0, h: 12, m: 0, str: '12:00' };
function beirutTime() {
  const now = Date.now();
  if (now - clockCache.stamp > 5000) {
    const str = new Intl.DateTimeFormat('en-GB', { timeZone: 'Asia/Beirut', hour: '2-digit', minute: '2-digit', hour12: false }).format(new Date());
    const parts = str.split(':');
    clockCache = { stamp: now, h: +parts[0], m: +parts[1], str };
  }
  return clockCache;
}

function drawSignpost(x, y) {
  drawGrass(x, y);
  px(x + 7, y + 4, 2, 11, P8[4]);                 // post
  px(x + 4, y + 1, 8, 3, P8[9]);                  // top board → right
  px(x + 12, y + 2, 1, 1, P8[9]);
  px(x + 5, y + 2, 5, 1, P8[4]);
  px(x + 4, y + 5, 8, 3, P8[15]);                 // mid board → left
  px(x + 3, y + 6, 1, 1, P8[15]);
  px(x + 6, y + 6, 5, 1, P8[4]);
  px(x + 5, y + 9, 7, 3, P8[9]);                  // low board → right
  px(x + 12, y + 10, 1, 1, P8[9]);
  px(x + 6, y + 10, 4, 1, P8[4]);
}

function drawCatcherCab(x, y, t) {
  drawGrass(x, y);
  px(x + 1, y, 14, 16, P8[0]);
  px(x + 2, y + 1, 12, 14, P8[1]);              // navy cabinet — the special one
  px(x + 3, y + 1, 10, 2, P8[12]);              // cyan marquee
  px(x + 4, y + 4, 8, 6, P8[0]);                // screen
  const f = Math.floor(t / 300) % 5;
  px(x + 5 + (f * 7) % 6, y + 4 + f, 2, 2, P8[12]);   // falling app
  px(x + 6 + (Math.floor(t / 600) % 2) * 2, y + 9, 4, 1, P8[9]); // basket
  px(x + 5, y + 12, 2, 2, P8[12]);              // buttons
  px(x + 9, y + 12, 2, 2, P8[14]);
}

function drawSimonPatch(x, y, t) {
  drawGrass(x, y);
  px(x + 2, y + 2, 12, 12, P8[4]);              // soil plot
  px(x + 3, y + 3, 10, 10, P8[2]);
  const lit = Math.floor(t / 600) % 4;
  const spots = [[7, 4], [10, 7], [7, 10], [4, 7]];     // N E S W mini flowers
  const cols = [P8[8], P8[10], P8[12], P8[14]];
  for (let i = 0; i < 4; i++) {
    const fx = x + spots[i][0], fy = y + spots[i][1];
    px(fx - 1, fy, 3, 1, cols[i]);
    px(fx, fy - 1, 1, 3, cols[i]);
    px(fx, fy, 1, 1, i === lit ? P8[7] : P8[9]);
    if (i === lit) { px(fx - 2, fy, 1, 1, P8[7]); px(fx + 2, fy, 1, 1, P8[7]); }
  }
}

function drawBugPoster(x, y) {
  drawGrass(x, y);
  px(x + 7, y + 9, 2, 6, P8[4]);            // post
  px(x + 3, y + 1, 10, 9, P8[7]);           // paper
  px(x + 3, y + 1, 10, 1, P8[6]);
  px(x + 6, y + 3, 4, 3, P8[0]);            // the wanted bug
  px(x + 5, y + 4, 1, 1, P8[0]);
  px(x + 10, y + 4, 1, 1, P8[0]);
  px(x + 5, y + 7, 6, 1, P8[8]);            // "WANTED"
}

function drawTowerTop(x, y) {
  drawGrass(x, y);
  px(x + 3, y, 10, 2, P8[8]);                     // cap
  px(x + 2, y + 2, 12, 14, P8[6]);                // stone
  px(x + 2, y + 2, 12, 1, P8[7]);
  px(x + 13, y + 3, 1, 13, P8[5]);
  px(x + 4, y + 4, 8, 8, P8[7]);                  // clock face
  px(x + 4, y + 4, 1, 1, P8[6]); px(x + 11, y + 4, 1, 1, P8[6]);
  px(x + 4, y + 11, 1, 1, P8[6]); px(x + 11, y + 11, 1, 1, P8[6]);
  const c = beirutTime();
  const ma = (c.m / 60) * Math.PI * 2;
  const ha = (((c.h % 12) / 12) + (c.m / 720)) * Math.PI * 2;
  for (let r = 1; r <= 3; r++) px(x + 7.5 + Math.sin(ma) * r, y + 7.5 - Math.cos(ma) * r, 1, 1, P8[0]);
  for (let r = 1; r <= 2; r++) px(x + 7.5 + Math.sin(ha) * r, y + 7.5 - Math.cos(ha) * r, 1, 1, P8[2]);
  px(x + 7, y + 7, 2, 2, P8[0]);                  // hub
}

function drawTowerBase(x, y) {
  px(x, y, TILE, TILE, P8[3]);
  px(x + 2, y, 12, 14, P8[6]);                    // stone shaft
  px(x + 13, y, 1, 14, P8[5]);
  px(x + 4, y + 3, 3, 1, P8[5]);                  // brick hints
  px(x + 9, y + 5, 3, 1, P8[5]);
  px(x + 6, y + 8, 4, 6, P8[0]);                  // doorway
  px(x + 7, y + 9, 2, 5, P8[4]);
  px(x + 1, y + 14, 14, 2, P8[5]);                // base
}

/* ───────────────────────── AMBIENT LIFE ───────────────────────── */

const BUTTERFLIES = { plaza: [[4, 7, 0], [11, 7, 3]], garden: [[3, 3, 1], [11, 4, 2], [7, 7, 4]] };
const BFLY_COLORS = [P8[14], P8[10], P8[7]];

function drawAmbient(t) {
  const room = player.room;

  // butterflies wandering on sine paths
  const flies = BUTTERFLIES[room];
  if (flies) flies.forEach(b => {
    const bx = b[0] * TILE + Math.sin(t / 900 + b[2] * 2.1) * 14;
    const by = b[1] * TILE + Math.cos(t / 730 + b[2] * 1.7) * 9;
    const open = Math.floor(t / 130 + b[2] * 5) % 2 === 0;
    const c = BFLY_COLORS[b[2] % 3];
    if (open) { px(bx - 2, by, 2, 2, c); px(bx + 1, by, 2, 2, c); }
    else      { px(bx - 1, by, 1, 2, c); px(bx + 1, by, 1, 2, c); }
    px(bx, by, 1, 2, P8[0]);
  });

  // chimney smoke drifting up over Career Street
  if (room === 'town') [2, 6, 10, 14].forEach((cx, ci) => {
    for (let p = 0; p < 3; p++) {
      const prog = ((t / 28) + p * 34 + ci * 17) % 100;
      const sy = 16 - prog * 0.42;
      if (sy < -6) continue;
      ctx.globalAlpha = Math.max(0, 0.55 * (1 - prog / 100));
      const sx = cx * TILE + 10 + Math.sin(t / 420 + p * 2 + ci) * 2.5;
      const size = prog > 55 ? 3 : 2;
      px(sx, sy, size, size, P8[6]);
      ctx.globalAlpha = 1;
    }
  });

  // music notes floating out of the arcade cabinets
  if (room === 'arcade') [5, 7].forEach((nx, ni) => {
    const prog = ((t / 14) + ni * 60) % 120;
    if (prog < 100) {
      ctx.globalAlpha = Math.max(0, 1 - prog / 100);
      const ax = nx * TILE + 6 + Math.sin(t / 300 + ni * 3) * 2;
      const ay = 34 - prog * 0.16;
      const c = ni ? P8[10] : P8[14];
      px(ax, ay, 2, 2, c);
      px(ax + 2, ay - 3, 1, 4, c);
      ctx.globalAlpha = 1;
    }
  });

  // fireflies drifting through the hidden grove
  if (room === 'grove') for (let i = 0; i < 6; i++) {
    const blink = Math.floor(t / 600 + i * 1.3) % 3 !== 0;
    if (!blink) continue;
    const fx = 24 + ((i * 33) % 190) + Math.sin(t / (700 + i * 90) + i * 2) * 10;
    const fy = 28 + ((i * 47) % 100) + Math.cos(t / (900 + i * 70) + i) * 8;
    ctx.globalAlpha = 0.35;
    px(fx - 1, fy, 3, 1, P8[9]);
    px(fx, fy - 1, 1, 3, P8[9]);
    ctx.globalAlpha = 1;
    px(fx, fy, 1, 1, P8[10]);
  }

  // sun glints sparkling on the pier water
  if (room === 'pier') for (let i = 0; i < 4; i++) {
    const win = Math.floor(t / 520) + i * 7;
    const h = hash(win, i * 313);
    const gx = 6 + (h % 8), gy = 1 + ((h >> 4) % 8);
    if (tileAt('pier', gx, gy) !== 'w') continue;
    if ((t % 520) > 300) continue;
    const sx = gx * TILE + 4 + (h % 8), sy = gy * TILE + 4 + ((h >> 7) % 8);
    px(sx - 1, sy, 3, 1, P8[7]);
    px(sx, sy - 1, 1, 3, P8[7]);
  }
}

let VIGNETTE = null;
function drawVignette() {
  if (!VIGNETTE) {
    VIGNETTE = ctx.createRadialGradient(W / 2, H / 2, 64, W / 2, H / 2, 152);
    VIGNETTE.addColorStop(0, 'rgba(8,5,24,0)');
    VIGNETTE.addColorStop(1, 'rgba(8,5,24,0.28)');
  }
  ctx.fillStyle = VIGNETTE;
  ctx.fillRect(0, 0, W, H);
}

function drawTile(ch, tx, ty, t) {
  const x = tx * TILE, y = ty * TILE;
  switch (ch) {
    case '.': drawGrass(x, y); break;
    case ',': drawGrass2(x, y); break;
    case 'p': drawPath(x, y); break;
    case '#': drawTree(x, y); break;
    case 'w': drawWater(x, y, t); break;
    case 'f': drawFlower(x, y); break;
    case 'S': drawSign(x, y); break;
    case 'B': drawBoard(x, y); break;
    case 'R': drawRoof(x, y, tx); break;
    case 'H': drawWall(x, y); break;
    case '1': case '2': case '3': case '4': drawDoor(x, y, +ch); break;
    case 'A': drawArcade(x, y, t); break;
    case 'M': drawMailbox(x, y, t); break;
    case 'T': drawComputer(x, y, t); break;
    case 'L': drawPedestal(x, y, t); break;
    case 'G': drawSignpost(x, y); break;
    case 'b': drawBugPoster(x, y); break;
    case 'K': drawCatcherCab(x, y, t); break;
    case 'Q': drawSimonPatch(x, y, t); break;
    case 'c': drawTowerTop(x, y); break;
    case 'C': drawTowerBase(x, y); break;
    default: drawGrass(x, y);
  }
}

/* ───────────────────────── PLAYER ───────────────────────── */

const player = {
  room: 'plaza', x: 7, y: 5,
  dir: 'down', moving: false, prog: 0,
  fromX: 7, fromY: 5,
};
const visited = new Set(['plaza']);

/* CC-01 — the plaza maintenance robot, pottering around its yard */
const NPC = {
  room: 'plaza', x: 10, y: 7, fx: 10, fy: 7,
  dir: 'down', moving: false, prog: 0, wait: 1.5,
  yard: { x0: 9, x1: 12, y0: 6, y1: 8 },
};
function npcUpdate(dt) {
  if (state !== 'game' || player.room !== NPC.room) return;
  if (NPC.moving) {
    NPC.prog += dt * 2.6;
    if (NPC.prog >= 1) { NPC.prog = 0; NPC.moving = false; }
    return;
  }
  NPC.wait -= dt;
  if (NPC.wait > 0) return;
  NPC.wait = 0.9 + Math.random() * 1.8;
  const dirs = ['up', 'down', 'left', 'right'];
  const d = dirs[(Math.random() * 4) | 0];
  NPC.dir = d;
  const D = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] }[d];
  const nx = NPC.x + D[0], ny = NPC.y + D[1];
  if (nx < NPC.yard.x0 || nx > NPC.yard.x1 || ny < NPC.yard.y0 || ny > NPC.yard.y1) return;
  const tch = tileAt(NPC.room, nx, ny);
  if (!tch || !WALKABLE.has(tch)) return;
  if (nx === player.x && ny === player.y) return;
  NPC.fx = NPC.x; NPC.fy = NPC.y;
  NPC.x = nx; NPC.y = ny;
  NPC.moving = true;
}
function drawNPC(t) {
  if (player.room !== NPC.room) return;
  let sx = NPC.x * TILE, sy = NPC.y * TILE;
  if (NPC.moving) {
    const p = 1 - NPC.prog;
    sx -= (NPC.x - NPC.fx) * TILE * p;
    sy -= (NPC.y - NPC.fy) * TILE * p;
  }
  sx = Math.round(sx); sy = Math.round(sy);
  const bob = NPC.moving ? Math.floor(t / 120) % 2 : 0;
  const y0 = sy + 2 - bob;
  px(sx + 7, y0 - 2, 1, 1, Math.floor(t / 500) % 2 ? P8[8] : P8[2]); // antenna light
  px(sx + 7, y0 - 1, 1, 2, P8[5]);
  px(sx + 3, y0 + 1, 9, 7, P8[0]);                                   // shell
  px(sx + 4, y0 + 2, 7, 5, P8[6]);
  px(sx + 5, y0 + 3, 5, 3, P8[1]);                                   // face screen
  const ex = NPC.dir === 'left' ? -1 : NPC.dir === 'right' ? 1 : 0;
  px(sx + 6 + ex, y0 + 4, 1, 1, P8[12]);                             // eyes
  px(sx + 8 + ex, y0 + 4, 1, 1, P8[12]);
  px(sx + 4, y0 + 8, 7, 3, P8[5]);                                   // chassis
  px(sx + 3, y0 + 9, 1, 2, P8[5]);
  px(sx + 11, y0 + 9, 1, 2, P8[5]);
  px(sx + 4, y0 + 11, 7, 2, P8[0]);                                  // treads
  if (NPC.moving) px(sx + 5 + Math.floor(t / 100) % 3, y0 + 11, 1, 2, P8[6]);
}
let fade = 0;          // 0 = none, >0 = fading
let fadeDir = 0;
let pendingRoom = null;

function tileAt(room, x, y) {
  if (x < 0 || x >= COLS || y < 0 || y >= ROWS) return null;
  return ROOMS[room].map[y][x];
}
function facingTile() {
  const d = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] }[player.dir];
  return { x: player.x + d[0], y: player.y + d[1] };
}

let bumpCooldown = 0;

function updatePlayer(dt, t) {
  if (state !== 'game' || fade > 0) return;

  if (player.moving) {
    player.prog += dt * 5.2;
    if (player.prog >= 1) { player.prog = 0; player.moving = false; }
    return;
  }

  const dir = activeDir();
  if (!dir) return;
  player.dir = dir;

  const d = { up: [0, -1], down: [0, 1], left: [-1, 0], right: [1, 0] }[dir];
  const nx = player.x + d[0], ny = player.y + d[1];

  // room exit? east/west exits sit on the main path row;
  // north/south exits are declared per-room with their column
  if (nx < 0 || nx >= COLS) {
    const room = ROOMS[player.room];
    const exit = nx < 0 ? room.exits.w : room.exits.e;
    if (exit && player.y === EXIT_ROW) {
      pendingRoom = { room: exit, x: nx < 0 ? COLS - 1 : 0, y: EXIT_ROW };
      fadeDir = 1; fade = 0.01;
      sfx.step();
      return;
    }
  }
  if (ny < 0 || ny >= ROWS) {
    const room = ROOMS[player.room];
    const exit = ny < 0 ? room.exits.n : room.exits.s;
    if (exit && player.x === exit.col) {
      pendingRoom = { room: exit.to, x: exit.col, y: ny < 0 ? ROWS - 1 : 0 };
      fadeDir = 1; fade = 0.01;
      sfx.step();
      return;
    }
  }

  const target = tileAt(player.room, nx, ny);
  const npcBlock = player.room === NPC.room && nx === NPC.x && ny === NPC.y;
  if (target !== null && WALKABLE.has(target) && !npcBlock) {
    player.fromX = player.x; player.fromY = player.y;
    player.x = nx; player.y = ny;
    player.moving = true; player.prog = 0;
    if (Math.floor(t / 180) % 2 === 0) sfx.step();
  } else if (bumpCooldown <= 0) {
    sfx.bump(); bumpCooldown = 0.3;
  }
}

function updateFade(dt) {
  if (fade <= 0) return;
  fade += fadeDir * dt * 4;
  if (fadeDir === 1 && fade >= 1) {
    fade = 1;
    if (pendingRoom) {
      player.room = pendingRoom.room;
      player.x = pendingRoom.x; player.y = pendingRoom.y;
      player.fromX = player.x; player.fromY = player.y;
      player.moving = false;
      pendingRoom = null;
      visited.add(player.room);
      toast(ROOMS[player.room].name);
    }
    fadeDir = -1;
  } else if (fadeDir === -1 && fade <= 0) {
    fade = 0; fadeDir = 0;
  }
}

function drawPlayer(t) {
  let sx = player.x * TILE, sy = player.y * TILE;
  if (player.moving) {
    const p = 1 - player.prog;
    sx -= (player.x - player.fromX) * TILE * p;
    sy -= (player.y - player.fromY) * TILE * p;
  }
  const frame = player.moving ? Math.floor(t / 130) % 2 : 0;
  const dirKey = (player.dir === 'left' || player.dir === 'right') ? 'right' : player.dir;
  const map = SPR[dirKey][frame];
  const flip = player.dir === 'left';
  drawMap(map, SPRITE_COLORS, Math.round(sx) + 2, Math.round(sy) - 1, flip);
}

function drawHintBubble(t) {
  if (state !== 'game' || player.moving) return;
  const f = facingTile();
  const ch = tileAt(player.room, f.x, f.y);
  const facingNpc = player.room === NPC.room && !NPC.moving && f.x === NPC.x && f.y === NPC.y;
  if (!facingNpc && (!ch || !INTERACT[ch])) return;
  const bx = f.x * TILE + 4, by = f.y * TILE - 9 + (Math.floor(t / 400) % 2);
  px(bx, by, 8, 8, P8[7]);
  px(bx + 1, by + 8, 2, 2, P8[7]);
  px(bx - 1, by - 1, 10, 1, P8[0]); px(bx - 1, by + 8, 1, 1, P8[0]);
  px(bx - 1, by, 1, 8, P8[0]); px(bx + 8, by, 1, 8, P8[0]);
  px(bx + 3, by + 1, 2, 4, P8[8]);   // !
  px(bx + 3, by + 6, 2, 1, P8[8]);
}

function tryInteract() {
  const f = facingTile();
  if (player.room === NPC.room && f.x === NPC.x && f.y === NPC.y) {
    NPC.dir = { up: 'down', down: 'up', left: 'right', right: 'left' }[player.dir]; // turn to face the player
    sfx.open();
    openDialog('robot', 'game');
    return;
  }
  const ch = tileAt(player.room, f.x, f.y);
  const it = ch && INTERACT[ch];
  if (!it) return;
  if (it.id === 'fish') { startFishing(); return; }
  if (MINIGAMES[it.id]) { startMini(it.id); return; }
  sfx.open();
  if (it.id === 'terminal') openTerminal();
  else openDialog(it.id, 'game');
}

/* ───────────────────────── FISHING (pier minigame) ───────────────────────── */

const fishStats = {
  total: +localStorage.getItem('pq_fish') || 0,
  gold:  +localStorage.getItem('pq_gold') || 0,
};
const CATCHES = [
  { name: 'A PIXEL PERCH',             color: 12, w: 30 },
  { name: 'A SARDINE.JS',              color: 6,  w: 25 },
  { name: 'A FLUTTER FLOUNDER',        color: 14, w: 20 },
  { name: 'AN OLD BOOT (LEGACY CODE)', color: 4,  w: 17, boot: true },
  { name: 'THE GOLDEN FISH', color: 10, w: 3, gold: true },
];
function rollCatch() {
  let r = Math.random() * CATCHES.reduce((s, c) => s + c.w, 0);
  for (const c of CATCHES) { r -= c.w; if (r <= 0) return c; }
  return CATCHES[0];
}

const FISH = { phase: 'idle', timer: 0, biteAt: 0, bobX: 0, bobY: 0, result: null };

/* generic minigame slot — each game provides update/draw/action/quit (+optional move) */
let MINI = null;
function endMini() {
  MINI = null;
  FISH.phase = 'idle';
  setState('game');
}

function startFishing() {
  const f = facingTile();
  FISH.phase = 'wait';
  FISH.timer = 0;
  FISH.biteAt = 1.5 + Math.random() * 2.8;
  FISH.bobX = f.x * TILE + 8;
  FISH.bobY = f.y * TILE + 8;
  FISH.result = null;
  MINI = FISH_GAME;
  setState('mini');
  sfx.cast();
}
function fishUpdate(dt) {
  FISH.timer += dt;
  if (FISH.phase === 'wait' && FISH.timer >= FISH.biteAt) {
    FISH.phase = 'bite'; FISH.timer = 0;
    sfx.bite();
  } else if (FISH.phase === 'bite' && FISH.timer > 0.7) {
    FISH.phase = 'result'; FISH.timer = 0;
    FISH.result = { miss: true };
    sfx.missF();
  } else if (FISH.phase === 'result' && FISH.timer > 2.2) {
    endMini();
  }
}
function fishAction() {
  if (FISH.phase === 'wait') {
    FISH.phase = 'result'; FISH.timer = 0;
    FISH.result = { early: true };
    sfx.close();
  } else if (FISH.phase === 'bite') {
    const c = rollCatch();
    FISH.phase = 'result'; FISH.timer = 0;
    FISH.result = c;
    fishStats.total++;
    if (c.gold) fishStats.gold++;
    localStorage.setItem('pq_fish', fishStats.total);
    localStorage.setItem('pq_gold', fishStats.gold);
    c.gold ? sfx.golden() : sfx.reel();
  } else if (FISH.phase === 'result') {
    endMini();
  }
}

function drawCatchIcon(cx, cy, r) {
  if (r.boot) {
    px(cx - 4, cy - 4, 4, 6, P8[4]);
    px(cx - 4, cy + 1, 9, 3, P8[4]);
    px(cx - 4, cy + 3, 9, 1, P8[2]);
    px(cx - 3, cy - 3, 2, 1, P8[2]);
    return;
  }
  const col = P8[r.color];
  px(cx - 6, cy - 2, 9, 5, col);            // body
  px(cx - 4, cy - 3, 6, 7, col);
  px(cx + 3, cy - 3, 3, 3, col);            // tail
  px(cx + 3, cy + 1, 3, 3, col);
  px(cx - 4, cy - 1, 1, 1, P8[0]);          // eye
  if (r.gold) px(cx - 1, cy - 1, 2, 1, P8[7]);
}

function drawFishing(t) {
  const phase = FISH.phase;
  // line from the rod hand to the bobber, with a slight arc
  const hx = player.x * TILE + (player.dir === 'left' ? 2 : player.dir === 'right' ? 14 : 8);
  const hy = player.y * TILE + 4;
  for (let i = 1; i < 10; i++) {
    const u = i / 10;
    px(hx + (FISH.bobX - hx) * u, hy + (FISH.bobY - 3 - hy) * u - Math.sin(u * Math.PI) * 5, 1, 1, P8[6]);
  }
  // bobber
  const dip = phase === 'bite' ? 2 + (Math.floor(t / 90) % 2) : (Math.floor(t / 450) % 2 ? 1 : 0);
  px(FISH.bobX - 1, FISH.bobY - 3 + dip, 3, 2, P8[8]);
  px(FISH.bobX - 1, FISH.bobY - 1 + dip, 3, 1, P8[7]);
  if (phase !== 'result' && Math.floor(t / 420) % 2) {
    px(FISH.bobX - 4, FISH.bobY + 1, 2, 1, P8[7]);
    px(FISH.bobX + 3, FISH.bobY + 1, 2, 1, P8[7]);
  }
  // '!' on bite
  if (phase === 'bite') {
    px(FISH.bobX, FISH.bobY - 14, 2, 5, P8[8]);
    px(FISH.bobX, FISH.bobY - 7, 2, 2, P8[8]);
  }

  ctx.textAlign = 'center';
  ctx.textBaseline = 'top';
  ctx.font = '8px "Press Start 2P"';

  if (phase === 'wait' || phase === 'bite') {
    ctx.fillStyle = 'rgba(0,0,0,0.55)';
    ctx.fillRect(0, 146, W, 14);
    ctx.fillStyle = phase === 'bite' ? '#FFEC27' : '#C2C3C7';
    ctx.fillText(phase === 'bite' ? 'NOW! REEL IT IN!' : 'WAIT FOR IT . . .', W / 2, 149);
  }

  if (phase === 'result') {
    const r = FISH.result || {};
    const small = r.miss || r.early;
    const bw = 208, bh = small ? 34 : 58;
    const bx = (W - bw) / 2, by = 46;
    ctx.fillStyle = '#000000'; ctx.fillRect(bx - 2, by - 2, bw + 4, bh + 4);
    ctx.fillStyle = '#1D2B53'; ctx.fillRect(bx, by, bw, bh);
    ctx.fillStyle = '#FFF1E8';
    ctx.fillRect(bx, by, bw, 1); ctx.fillRect(bx, by + bh - 1, bw, 1);
    ctx.fillRect(bx, by, 1, bh); ctx.fillRect(bx + bw - 1, by, 1, bh);
    if (small) {
      ctx.fillStyle = '#C2C3C7';
      ctx.fillText(r.early ? 'TOO EARLY . . .' : 'IT GOT AWAY . . .', W / 2, by + 7);
      ctx.fillStyle = '#5F574F';
      ctx.fillText(r.early ? 'THE FISH SAW YOUR SHADOW' : 'PATIENCE, ANGLER', W / 2, by + 19);
    } else {
      ctx.fillStyle = '#83769C';
      ctx.fillText('YOU CAUGHT:', W / 2, by + 6);
      drawCatchIcon(W / 2, by + 22, r);
      ctx.fillStyle = r.gold ? '#FFEC27' : '#FFF1E8';
      ctx.fillText(r.name, W / 2, by + 32);
      ctx.fillStyle = '#5F574F';
      ctx.fillText('TOTAL ' + fishStats.total + (fishStats.gold ? ' / GOLD ' + fishStats.gold : ''), W / 2, by + 46);
      if (r.gold) for (let i = 0; i < 6; i++) {
        if (Math.floor(t / 140 + i) % 2) continue;
        const a = i * 1.05 + t / 600;
        px(W / 2 + Math.cos(a) * 90, by + bh / 2 + Math.sin(a) * 24, 2, 2, P8[10]);
      }
    }
  }
}

const FISH_GAME = { update: fishUpdate, draw: drawFishing, action: fishAction, quit() { sfx.close(); endMini(); } };

/* key names for minigame prompts follow the input device */
const KOK = IS_TOUCH ? 'A' : 'E';
const KNO = IS_TOUCH ? 'B' : 'X';

/* shared centered banner for minigame ready/over screens */
function miniBanner(lines) {
  const bh = 14 + lines.length * 12;
  const by = (H - bh) / 2;
  ctx.fillStyle = '#000000'; ctx.fillRect(18, by - 2, W - 36, bh + 4);
  ctx.fillStyle = '#1D2B53'; ctx.fillRect(20, by, W - 40, bh);
  ctx.fillStyle = '#FFF1E8';
  ctx.fillRect(20, by, W - 40, 1); ctx.fillRect(20, by + bh - 1, W - 40, 1);
  ctx.fillRect(20, by, 1, bh); ctx.fillRect(W - 21, by, 1, bh);
  ctx.font = '8px "Press Start 2P"';
  ctx.textAlign = 'center'; ctx.textBaseline = 'top';
  lines.forEach((ln, i) => {
    ctx.fillStyle = i === 0 ? '#FFEC27' : i === lines.length - 1 ? '#83769C' : '#FFF1E8';
    ctx.fillText(ln, W / 2, by + 8 + i * 12);
  });
}

/* ───────────────────────── APP CATCHER (arcade) ───────────────────────── */

let ICONS = null;
function ensureIcons() {
  if (ICONS) return;
  ICONS = DATA.projects.map((p, i) => {
    const o = { img: new Image(), ok: false, letter: p.name[0], col: P8[[8, 9, 10, 11, 12, 14][i % 6]] };
    o.img.onload = () => { o.ok = true; };
    o.img.src = p.icon;
    return o;
  });
}

function makeCatcher() {
  ensureIcons();
  const g = { phase: 'ready', t: 0, score: 0, lives: 3, bx: W / 2 - 13, items: [], spawnIn: 0.6, best: +localStorage.getItem('pq_catch') || 0 };
  function begin() { g.phase = 'play'; g.t = 0; g.score = 0; g.lives = 3; g.items = []; g.spawnIn = 0.6; g.bx = W / 2 - 13; }
  return {
    update(dt) {
      if (g.phase !== 'play') return;
      g.t += dt;
      const v = 100 * dt;
      if (held.left) g.bx -= v;
      if (held.right) g.bx += v;
      g.bx = Math.max(2, Math.min(W - 28, g.bx));
      g.spawnIn -= dt;
      if (g.spawnIn <= 0) {
        g.spawnIn = Math.max(0.42, 1.05 - g.t * 0.012);
        g.items.push({ x: 6 + Math.random() * (W - 26), y: -16, i: (Math.random() * ICONS.length) | 0 });
      }
      const sp = 30 + g.t * 2.4;
      const keep = [];
      for (const it of g.items) {
        it.y += sp * dt;
        if (it.y + 14 >= 142 && it.y + 14 <= 154 && it.x + 12 > g.bx && it.x < g.bx + 26) {
          g.score++; sfx.pop();
          continue;
        }
        if (it.y > H) {
          g.lives--; sfx.bump();
          if (g.lives <= 0) {
            g.phase = 'over';
            if (g.score > g.best) { g.best = g.score; localStorage.setItem('pq_catch', g.best); }
            sfx.missF();
          }
          continue;
        }
        keep.push(it);
      }
      g.items = keep;
    },
    draw(t) {
      px(0, 0, W, H, P8[1]);
      for (let i = 0; i < 12; i++) {
        const h = hash(i * 77, 13);
        px(8 + (h % 224), 16 + ((h >> 5) % 130), 1, 1, ((Math.floor(t / 700) + i) % 4) ? '#2A2454' : '#4A4080');
      }
      for (const it of g.items) {
        const ic = ICONS[it.i];
        if (ic.ok) ctx.drawImage(ic.img, Math.round(it.x), Math.round(it.y), 14, 14);
        else {
          px(it.x, it.y, 14, 14, ic.col);
          ctx.font = '8px "Press Start 2P"';
          ctx.textAlign = 'center'; ctx.textBaseline = 'top';
          ctx.fillStyle = '#000000';
          ctx.fillText(ic.letter, it.x + 7, it.y + 3);
        }
      }
      // basket
      px(g.bx, 150, 26, 4, P8[9]);
      px(g.bx, 144, 2, 8, P8[9]);
      px(g.bx + 24, 144, 2, 8, P8[9]);
      px(g.bx + 2, 151, 22, 2, P8[4]);
      // header
      px(0, 0, W, 12, P8[0]);
      ctx.font = '8px "Press Start 2P"'; ctx.textBaseline = 'top';
      ctx.textAlign = 'left'; ctx.fillStyle = '#FFF1E8';
      ctx.fillText('SCORE ' + g.score, 6, 2);
      for (let i = 0; i < g.lives; i++) px(W - 12 - i * 8, 3, 5, 5, P8[8]);
      ctx.textAlign = 'center';
      if (g.phase === 'ready') miniBanner(['APP CATCHER', 'CATCH THE APPS!  ←→ MOVE', KOK + ' START · ' + KNO + ' QUIT']);
      if (g.phase === 'over')  miniBanner(['GAME OVER', 'SCORE ' + g.score + ' · BEST ' + g.best, KOK + ' RETRY · ' + KNO + ' QUIT']);
    },
    action() { if (g.phase !== 'play') { sfx.select(); begin(); } },
    quit() { sfx.close(); endMini(); },
  };
}

/* ───────────────────────── PETAL PATTERNS (garden) ───────────────────────── */

function makeSimon() {
  const DIRI = { up: 0, right: 1, down: 2, left: 3 };
  const POS  = [[120, 46], [164, 84], [120, 122], [76, 84]];
  const COLD = [P8[2], P8[9], P8[1], P8[13]];
  const COLB = [P8[8], P8[10], P8[12], P8[14]];
  const TONES = [392, 494, 587, 740];
  const g = { phase: 'ready', seq: [], idx: 0, showI: 0, showT: 0, lit: -1, litT: 0, round: 0, best: +localStorage.getItem('pq_simon') || 0 };
  function light(i) { g.lit = i; g.litT = 0.3; beep(TONES[i], 0.18, 0.05); }
  function begin()  { g.phase = 'show'; g.seq = [(Math.random() * 4) | 0]; g.showI = 0; g.showT = 0.7; g.round = 0; }
  function extend() { g.seq.push((Math.random() * 4) | 0); g.phase = 'show'; g.showI = 0; g.showT = 0.9; }
  return {
    update(dt) {
      if (g.litT > 0) { g.litT -= dt; if (g.litT <= 0) g.lit = -1; }
      if (g.phase === 'show') {
        g.showT -= dt;
        if (g.showT <= 0) {
          if (g.showI < g.seq.length) { light(g.seq[g.showI++]); g.showT = 0.55; }
          else { g.phase = 'input'; g.idx = 0; }
        }
      }
    },
    move(dir) {
      if (g.phase !== 'input') return;
      const d = DIRI[dir];
      light(d);
      if (d === g.seq[g.idx]) {
        g.idx++;
        if (g.idx >= g.seq.length) {
          g.round = g.seq.length;
          if (g.round > g.best) { g.best = g.round; localStorage.setItem('pq_simon', g.best); }
          extend();
        }
      } else {
        g.phase = 'over';
        sfx.missF();
      }
    },
    draw(t) {
      px(0, 0, W, H, P8[3]);
      for (let i = 0; i < 4; i++) {
        const fx = POS[i][0], fy = POS[i][1];
        const on = g.lit === i;
        const c = on ? COLB[i] : COLD[i];
        px(fx - 9, fy - 4, 7, 8, c);
        px(fx + 2, fy - 4, 7, 8, c);
        px(fx - 4, fy - 9, 8, 7, c);
        px(fx - 4, fy + 2, 8, 7, c);
        px(fx - 3, fy - 3, 6, 6, on ? P8[7] : P8[10]);
        if (on) {
          px(fx - 12, fy - 12, 24, 1, P8[7]); px(fx - 12, fy + 11, 24, 1, P8[7]);
          px(fx - 12, fy - 12, 1, 24, P8[7]); px(fx + 11, fy - 12, 1, 24, P8[7]);
        }
      }
      px(0, 0, W, 12, P8[0]);
      ctx.font = '8px "Press Start 2P"'; ctx.textBaseline = 'top';
      ctx.textAlign = 'left'; ctx.fillStyle = '#FFF1E8';
      ctx.fillText('ROUND ' + g.round, 6, 2);
      ctx.textAlign = 'right'; ctx.fillStyle = '#83769C';
      ctx.fillText('BEST ' + g.best, W - 6, 2);
      ctx.textAlign = 'center';
      if (g.phase === 'show' || g.phase === 'input') {
        ctx.fillStyle = 'rgba(0,0,0,0.5)'; ctx.fillRect(0, 148, W, 12);
        ctx.fillStyle = g.phase === 'input' ? '#C2C3C7' : '#83769C';
        ctx.fillText(g.phase === 'input' ? 'YOUR TURN — ARROWS' : 'WATCH . . .', W / 2, 150);
      }
      if (g.phase === 'ready') miniBanner(['PETAL PATTERNS', 'WATCH, THEN REPEAT WITH ARROWS', KOK + ' START · ' + KNO + ' QUIT']);
      if (g.phase === 'over')  miniBanner(['WILTED!', 'ROUNDS ' + g.round + ' · BEST ' + g.best, KOK + ' RETRY · ' + KNO + ' QUIT']);
    },
    action() { if (g.phase === 'ready' || g.phase === 'over') { sfx.select(); begin(); } },
    quit() { sfx.close(); endMini(); },
  };
}

/* ───────────────────────── BUG SQUASH (career street) ───────────────────────── */

function makeBugs() {
  const NC = 4, NR = 3;
  const WX = c => 30 + c * 52, WY = r => 34 + r * 34;
  const g = { phase: 'ready', time: 30, score: 0, cx: 1, cy: 1, bugs: {}, spawnIn: 0.7, best: +localStorage.getItem('pq_bugs') || 0 };
  function begin() { g.phase = 'play'; g.time = 30; g.score = 0; g.bugs = {}; g.spawnIn = 0.7; }
  return {
    update(dt) {
      if (g.phase !== 'play') return;
      g.time -= dt;
      if (g.time <= 0) {
        g.time = 0; g.phase = 'over';
        if (g.score > g.best) { g.best = g.score; localStorage.setItem('pq_bugs', g.best); }
        sfx.reel();
        return;
      }
      for (const k of Object.keys(g.bugs)) {
        g.bugs[k].ttl -= dt;
        if (g.bugs[k].ttl <= 0) delete g.bugs[k];
      }
      g.spawnIn -= dt;
      if (g.spawnIn <= 0) {
        const ramp = (30 - g.time) / 30;
        g.spawnIn = 1.0 - ramp * 0.5;
        const free = [];
        for (let c = 0; c < NC; c++) for (let r = 0; r < NR; r++)
          if (!g.bugs[c + ',' + r]) free.push(c + ',' + r);
        if (free.length) g.bugs[free[(Math.random() * free.length) | 0]] = { ttl: 1.5 - ramp * 0.55, gold: Math.random() < 0.08 };
      }
    },
    move(dir) {
      if (g.phase !== 'play') return;
      if (dir === 'left'  && g.cx > 0)      g.cx--;
      if (dir === 'right' && g.cx < NC - 1) g.cx++;
      if (dir === 'up'    && g.cy > 0)      g.cy--;
      if (dir === 'down'  && g.cy < NR - 1) g.cy++;
      sfx.move();
    },
    action() {
      if (g.phase !== 'play') { sfx.select(); begin(); return; }
      const b = g.bugs[g.cx + ',' + g.cy];
      if (b) {
        g.score += b.gold ? 5 : 1;
        delete g.bugs[g.cx + ',' + g.cy];
        sfx.squish();
      } else {
        sfx.bump();
      }
    },
    draw(t) {
      px(0, 0, W, H, P8[3]);
      px(8, 18, 224, 124, P8[15]);
      px(8, 12, 224, 8, P8[8]);
      px(8, 140, 224, 4, P8[5]);
      for (let c = 0; c < NC; c++) for (let r = 0; r < NR; r++) {
        const x = WX(c), y = WY(r);
        px(x - 2, y - 2, 24, 20, P8[5]);
        px(x, y, 20, 16, P8[1]);
        const b = g.bugs[c + ',' + r];
        if (b && g.phase === 'play') {
          const bc = b.gold ? P8[10] : P8[8];
          const wig = Math.floor(t / 120) % 2;
          px(x + 6 + wig, y + 5, 8, 6, bc);
          px(x + 8 + wig, y + 3, 4, 2, bc);
          px(x + 4 + wig, y + 6, 2, 1, P8[0]);
          px(x + 14 + wig, y + 6, 2, 1, P8[0]);
          px(x + 4 + wig, y + 9, 2, 1, P8[0]);
          px(x + 14 + wig, y + 9, 2, 1, P8[0]);
          px(x + 9 + wig, y + 4, 1, 1, P8[0]);
        }
        if (c === g.cx && r === g.cy && g.phase === 'play') {
          const cc = P8[10];
          px(x - 4, y - 4, 6, 2, cc); px(x - 4, y - 4, 2, 6, cc);
          px(x + 18, y - 4, 6, 2, cc); px(x + 22, y - 4, 2, 6, cc);
          px(x - 4, y + 14, 2, 6, cc); px(x - 4, y + 18, 6, 2, cc);
          px(x + 22, y + 14, 2, 6, cc); px(x + 18, y + 18, 6, 2, cc);
        }
      }
      px(0, 0, W, 12, P8[0]);
      ctx.font = '8px "Press Start 2P"'; ctx.textBaseline = 'top';
      ctx.textAlign = 'left'; ctx.fillStyle = '#FFF1E8';
      ctx.fillText('TIME ' + Math.ceil(g.time), 6, 2);
      ctx.textAlign = 'center'; ctx.fillStyle = '#FFEC27';
      ctx.fillText('SCORE ' + g.score, W / 2, 2);
      ctx.textAlign = 'right'; ctx.fillStyle = '#83769C';
      ctx.fillText('BEST ' + g.best, W - 6, 2);
      ctx.textAlign = 'center';
      if (g.phase === 'ready') miniBanner(['BUG SQUASH', 'ARROWS AIM · ' + KOK + ' SQUASH · GOLD = 5', KOK + ' START · ' + KNO + ' QUIT']);
      if (g.phase === 'over')  miniBanner(['SHIPPED!', 'SQUASHED ' + g.score + ' · BEST ' + g.best, KOK + ' RETRY · ' + KNO + ' QUIT']);
    },
    quit() { sfx.close(); endMini(); },
  };
}

const MINIGAMES = { catcher: makeCatcher, simon: makeSimon, bugs: makeBugs };
function startMini(id) {
  MINI = MINIGAMES[id]();
  setState('mini');
  sfx.open();
}

/* ───────────────────────── RENDER LOOP ───────────────────────── */

let last = 0;
function loop(t) {
  const dt = Math.min(0.05, (t - last) / 1000 || 0);
  last = t;
  NOW = t;
  bumpCooldown -= dt;

  updatePlayer(dt, t);
  npcUpdate(dt);
  if (state === 'mini' && MINI) MINI.update(dt, t);
  updateFade(dt);

  // draw
  const map = ROOMS[player.room].map;
  for (let y = 0; y < ROWS; y++)
    for (let x = 0; x < COLS; x++)
      drawTile(map[y][x], x, y, t);

  drawNPC(t);
  drawPlayer(t);
  drawAmbient(t);
  if (state === 'mini' && MINI) MINI.draw(t);
  drawHintBubble(t);
  drawVignette();

  if (fade > 0) {
    ctx.fillStyle = 'rgba(0,0,0,' + Math.min(1, fade) + ')';
    ctx.fillRect(0, 0, W, H);
  }

  requestAnimationFrame(loop);
}

/* ───────────────────────── TOAST (room names) ───────────────────────── */

let toastTimer = null;
function toast(msg) {
  let el = document.getElementById('toast');
  if (!el) {
    el = document.createElement('div');
    el.id = 'toast';
    wrap.appendChild(el);
  }
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('show'), 1600);
}

/* ───────────────────────── MENU ───────────────────────── */

const menuEl = document.getElementById('menu');
const menuList = document.getElementById('menuList');
const MENU_ITEMS = [
  { id: 'start',      label: 'ENTER WORLD' },
  { id: 'about',      label: 'ABOUT ME' },
  { id: 'expertise',  label: 'EXPERTISE' },
  { id: 'experience', label: 'EXPERIENCE' },
  { id: 'projects',   label: 'PROJECTS' },
  { id: 'contact',    label: 'CONTACT' },
  { id: 'terminal',   label: 'TERMINAL' },
];
let menuSel = 0;

function renderMenu() {
  menuList.innerHTML = '';
  MENU_ITEMS.forEach((it, i) => {
    const b = document.createElement('button');
    b.className = 'menu-item' + (i === menuSel ? ' sel' : '');
    b.innerHTML = '<span class="menu-cursor">▶</span>' +
      (it.id === 'start' && worldStarted ? 'RESUME WORLD' : it.label);
    b.addEventListener('pointerenter', () => { if (menuSel !== i) { menuSel = i; renderMenu(); } });
    b.addEventListener('click', () => { menuSel = i; menuActivate(); });
    menuList.appendChild(b);
  });
}
function menuMove(dir) {
  if (dir === 'up')   { menuSel = (menuSel + MENU_ITEMS.length - 1) % MENU_ITEMS.length; sfx.move(); renderMenu(); }
  if (dir === 'down') { menuSel = (menuSel + 1) % MENU_ITEMS.length; sfx.move(); renderMenu(); }
}
function menuActivate() {
  const it = MENU_ITEMS[menuSel];
  sfx.select();
  if (it.id === 'start') { resumeGame(); }
  else if (it.id === 'terminal') openTerminal();
  else if (it.id === 'experience') openDialog('xp-list', 'menu');
  else openDialog(it.id, 'menu');
}
function openMenu() {
  setState('menu');
  renderMenu();
}
function resumeGame() {
  worldStarted = true;
  setState('game');
  toast(ROOMS[player.room].name);
}

/* ───────────────────────── DIALOG ───────────────────────── */

const dlgEl = document.getElementById('dlg');
const dlgTitle = document.getElementById('dlgTitle');
const dlgBody = document.getElementById('dlgBody');
const dlgFoot = document.getElementById('dlgFoot');
document.getElementById('dlgClose').addEventListener('click', () => dlgBack());
// backdrop-tap closes on desktop only; on touch the screen below the
// window (and the d-pad's hollow centre) would close it by accident — use B
dlgEl.addEventListener('click', e => { if (!IS_TOUCH && e.target === dlgEl) dlgBack(); });

let dlgId = null, dlgBackTarget = null, dlgItems = [], dlgSel = 0;

function esc(s) {
  return String(s).replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}

let robotIdx = 0;
const ROBOT_LINES = [
  'BEEP. I am CC-01. I keep the plaza tidy and supervise the human. He ships. I beep.',
  'The signpost knows shortcuts. Walking is for tourists. I love walking.',
  IS_TOUCH
    ? 'The TERMINAL lives in the menu. I tried to use it once. I do not have hands.'
    : 'Press ⌘K anywhere for the terminal. I tried it once. I do not have hands.',
  'The pier receives excellent mail. Sensors indicate replies within one (1) business day.',
  'Faint humming detected north of the garden. Investigating is NOT in my job description.',
  'I was trained on his commit history. It is clean. Suspiciously clean.',
];

const WARP_POINTS = { garden: [7, 8], town: [1, 5], arcade: [13, 5], pier: [7, 1], grove: [12, 8] };
function warpTo(room) {
  const p = WARP_POINTS[room];
  if (!p) return;
  dialogReturn = 'game';
  closeDialog();
  pendingRoom = { room, x: p[0], y: p[1] };
  fadeDir = 1; fade = 0.01;
}

const BUILDERS = {
  about() {
    const a = DATA.about;
    return {
      title: 'ABOUT ME', back: null,
      html: `
        <p class="d-status">● AVAILABLE FOR WORK</p>
        <h3 class="d-name">${esc(a.name)}</h3>
        <p class="d-role">${esc(a.role)}</p>
        <p class="d-dim">${esc(a.loc)}</p>
        <p>${esc(a.bio)}</p>
        <p>${esc(a.bio2)}</p>
        <div class="d-stats">${a.stats.map(s => `<span><b>${s[0]}</b>${s[1]}</span>`).join('')}</div>`,
    };
  },
  expertise() {
    return {
      title: 'EXPERTISE', back: null,
      html: DATA.skills.map(g => `<h4 class="d-h">${esc(g.name)}</h4><p>${esc(g.items)}</p>`).join(''),
    };
  },
  'xp-list'() {
    return {
      title: 'EXPERIENCE', back: null, list: true,
      html: DATA.xp.map((x, i) => `
        <button class="d-item" data-go="xp-${i}">
          <span class="d-item-main">${esc(x.co)}${x.now ? ' <i class="d-now">NOW</i>' : ''}</span>
          <span class="d-item-sub">${esc(x.role)} · ${esc(x.date)}</span>
        </button>`).join(''),
    };
  },
  contact() {
    const c = DATA.contact;
    return {
      title: 'CONTACT', back: null,
      html: `
        <p>${esc(c.line)}</p>
        <div class="d-actions">
          <a class="d-btn d-btn-hot" href="mailto:${c.email}">✉ ${esc(c.email)}</a>
          <a class="d-btn" href="${c.github}" target="_blank" rel="noopener noreferrer">GITHUB ↗</a>
          <a class="d-btn" href="resume.pdf" download="Pierre_Sabbagh_Resume">RÉSUMÉ (PDF) ↓</a>
        </div>
        <p class="d-dim">BS COMPUTER SCIENCE · ARAB OPEN UNIVERSITY · 2017–2020</p>`,
    };
  },
  projects() {
    return {
      title: 'PROJECT ARCADE — 15 GAMES', back: null, list: true,
      html: DATA.projects.map((p, i) => `
        <button class="d-item" data-go="proj-${i}">
          <img class="d-ico" src="${p.icon}" alt="" loading="lazy" width="22" height="22">
          <span class="d-item-main">${esc(p.name)}</span>
          <span class="d-item-sub">${esc(p.platforms)}</span>
        </button>`).join(''),
    };
  },
  robot() {
    const lines = ROBOT_LINES.slice();
    const recs = [];
    if (fishStats.total) recs.push(fishStats.total + ' FISH' + (fishStats.gold ? ' (' + fishStats.gold + ' GOLD)' : ''));
    if (+localStorage.getItem('pq_catch')) recs.push('CATCHER ' + localStorage.getItem('pq_catch'));
    if (+localStorage.getItem('pq_simon')) recs.push('PATTERNS ' + localStorage.getItem('pq_simon'));
    if (+localStorage.getItem('pq_bugs')) recs.push('BUGS ' + localStorage.getItem('pq_bugs'));
    if (recs.length) lines.push('RECORDS ON FILE: ' + recs.join(' · ') + '. ACCEPTABLE PERFORMANCE.');
    const line = lines[robotIdx++ % lines.length];
    return {
      title: 'CC-01', back: null,
      html: `
        <p class="d-role">UNIT CC-01 — PLAZA MAINTENANCE</p>
        <p>"${line}"</p>`,
    };
  },
  clock() {
    const c = beirutTime();
    const mood =
      c.h < 5  ? 'Biaqout sleeps. Even pixels rest sometimes.' :
      c.h < 8  ? 'First light over the mountains. Coffee is brewing.' :
      c.h < 12 ? 'Morning hours. Pierre is shipping.' :
      c.h < 14 ? 'Lunchtime in Biaqout. The bugs wait patiently.' :
      c.h < 18 ? 'Deep work hours. Do not disturb — unless you are hiring.' :
      c.h < 21 ? 'Golden hour at the pier. A good time to send mail.' :
                 'Late commit hours. The best ideas arrive after dark.';
    return {
      title: 'CLOCK TOWER', back: null,
      html: `
        <p>The clock reads <b>${c.str}</b> in Biaqout, Lebanon.</p>
        <p class="d-dim">${mood}</p>`,
    };
  },
  map() {
    const grove = visited.has('grove');
    return {
      title: 'WORLD MAP', back: null, list: true,
      html: `
        <div class="d-map" aria-hidden="true">
          <i></i><b class="${grove ? 'mg' : 'mq'}">${grove ? 'GROVE' : '?'}</b><i></i>
          <i></i><b class="mgar">GARDEN</b><i></i>
          <b class="marc">ARCADE</b><b class="mpl">PLAZA ✦</b><b class="mtn">TOWN</b>
          <i></i><b class="mpr">PIER</b><i></i>
        </div>
        <button class="d-item" data-warp="garden"><span class="d-item-main">SKILL GARDEN</span><span class="d-item-sub">EXPERTISE</span></button>
        <button class="d-item" data-warp="town"><span class="d-item-main">CAREER STREET</span><span class="d-item-sub">EXPERIENCE</span></button>
        <button class="d-item" data-warp="arcade"><span class="d-item-main">PROJECT ARCADE</span><span class="d-item-sub">15 PROJECTS</span></button>
        <button class="d-item" data-warp="pier"><span class="d-item-main">CONTACT PIER</span><span class="d-item-sub">GET IN TOUCH</span></button>
        ${grove
          ? '<button class="d-item" data-warp="grove"><span class="d-item-main">HIDDEN GROVE</span><span class="d-item-sub">TERMINAL</span></button>'
          : '<p class="d-dim" style="margin-top:8px">. . . one location remains unmapped.</p>'}`,
    };
  },
};
DATA.xp.forEach((x, i) => {
  BUILDERS['xp-' + i] = () => ({
    title: x.co.toUpperCase(), back: dialogReturn === 'menu' ? 'xp-list' : null,
    html: `
      <p class="d-role">${esc(x.role)}${x.sub ? ' — ' + esc(x.sub) : ''}${x.now ? ' <i class="d-now">NOW</i>' : ''}</p>
      <p class="d-dim">${esc(x.date)} · ${esc(x.loc)}</p>
      <ul class="d-points">${x.points.map(p => `<li>${esc(p)}</li>`).join('')}</ul>
      <p class="d-tags">${esc(x.tags)}</p>`,
  });
});
DATA.projects.forEach((p, i) => {
  BUILDERS['proj-' + i] = () => ({
    title: p.name.toUpperCase(), back: 'projects',
    html: `
      <div class="d-proj-head">
        <img class="d-ico-lg" src="${p.icon}" alt="" width="40" height="40">
        <div><p class="d-role">${esc(p.name)}</p><p class="d-dim">${esc(p.platforms)}</p></div>
      </div>
      <p>${esc(p.desc)}</p>
      <p class="d-tags">${esc(p.tags)}</p>
      <div class="d-actions">${
        p.private
          ? '<span class="d-btn d-btn-mute">PRIVATE CLIENT</span>'
          : p.links.map(l => `<a class="d-btn" href="${l[1]}" target="_blank" rel="noopener noreferrer">${l[0]} ↗</a>`).join('')
      }</div>`,
  });
});

function openDialog(id, from) {
  if (from) dialogReturn = from;
  const built = BUILDERS[id]();
  dlgId = id;
  dlgBackTarget = built.back;
  dlgTitle.textContent = built.title;
  dlgBody.innerHTML = built.html;
  dlgBody.scrollTop = 0;
  dlgFoot.textContent = built.list ? `↑↓ SELECT · ${H_OPEN} · ${H_BACK}` : H_BACK;
  dlgEl.setAttribute('aria-hidden', 'false');
  setState('dialog');

  // arrow-key navigation: list rows if present, otherwise the
  // action buttons (store links, email, résumé) become selectable
  dlgItems = Array.from(dlgBody.querySelectorAll('.d-item'));
  let isLinks = false;
  if (!dlgItems.length) {
    dlgItems = Array.from(dlgBody.querySelectorAll('a.d-btn'));
    isLinks = dlgItems.length > 0;
  }
  dlgSel = 0;
  highlightItem();
  dlgItems.forEach((el, i) => {
    el.addEventListener('pointerenter', () => { dlgSel = i; highlightItem(false); });
    if (!isLinks) el.addEventListener('click', () => { dlgSel = i; dlgActivate(); });
  });
  if (isLinks) dlgFoot.textContent = `←→ SELECT · ${H_OPEN} · ${H_BACK}`;
}
function highlightItem(scroll = true) {
  dlgItems.forEach((el, i) => el.classList.toggle('sel', i === dlgSel));
  if (scroll && dlgItems[dlgSel]) dlgItems[dlgSel].scrollIntoView({ block: 'nearest' });
}
function dlgMove(dir) {
  const prev = dir === 'up' || dir === 'left';
  if (dlgItems.length) {
    dlgSel = (dlgSel + (prev ? dlgItems.length - 1 : 1)) % dlgItems.length;
    sfx.move();
    highlightItem();
  } else {
    dlgBody.scrollTop += prev ? -40 : 40;
  }
}
function dlgActivate() {
  if (!dlgItems.length) return;
  const el = dlgItems[dlgSel];
  if (el.dataset.warp) { sfx.plink(); warpTo(el.dataset.warp); }
  else if (el.dataset.mini) { dialogReturn = 'game'; closeDialog(); startMini(el.dataset.mini); }
  else if (el.dataset.go) { sfx.select(); openDialog(el.dataset.go); }
  else { sfx.select(); el.click(); }
}
function dlgBack() {
  sfx.close();
  if (dlgBackTarget) { openDialog(dlgBackTarget); return; }
  closeDialog();
}
function closeDialog() {
  dlgEl.setAttribute('aria-hidden', 'true');
  dlgId = null; dlgItems = [];
  if (dialogReturn === 'game') setState('game');
  else openMenu();
}

/* ───────────────────────── TERMINAL ───────────────────────── */

const termOverlay = document.getElementById('termOverlay');
const termBody = document.getElementById('termBody');
const termInput = document.getElementById('termInput');
document.getElementById('termClose').addEventListener('click', () => closeTerminal());

let demoPlayed = false;

function openTerminal() {
  if (state === 'term') return;
  if (state === 'mini') endMini(); // put the game down before switching machines
  termReturn = (state === 'dialog') ? dialogReturn : state;
  if (state === 'dialog') closeDialog();
  setState('term');
  termOverlay.classList.add('open');
  termOverlay.setAttribute('aria-hidden', 'false');
  sfx.open();
  setTimeout(() => termInput.focus(), 200);
  if (!demoPlayed) {
    demoPlayed = true;
    tline('<span class="tmuted">PORTFOLIO OS v2.6 — type <span class="tk">help</span> for commands.</span>');
    setTimeout(() => playDemo([['whoami', 1100], ['skills', 700]]), 500);
  }
}
function closeTerminal() {
  termOverlay.classList.remove('open');
  termOverlay.setAttribute('aria-hidden', 'true');
  termInput.blur();
  sfx.close();
  if (termReturn === 'game') setState('game');
  else openMenu();
}

function tesc(s) {
  return s.replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
}
function tline(html, cls) {
  const el = document.createElement('div');
  el.className = 'tl' + (cls ? ' ' + cls : '');
  el.innerHTML = html;
  termBody.appendChild(el);
  termBody.scrollTop = termBody.scrollHeight;
}

const PROMPT = '<span class="tp">&gt;</span> ';

const CMDS = {
  help: () =>
`<span class="th">COMMANDS</span>
  <span class="tk">whoami</span>       — About Pierre
  <span class="tk">skills</span>       — Tech stack & tools
  <span class="tk">experience</span>   — Work history
  <span class="tk">projects</span>     — Featured projects
  <span class="tk">education</span>    — Degree & studies
  <span class="tk">contact</span>      — Get in touch
  <span class="tk">github</span>       — Open GitHub profile
  <span class="tk">resume</span>       — Download resume PDF
  <span class="tk">play</span>         — Enter the world
  <span class="tk">ls</span>           — List directory
  <span class="tk">clear</span>        — Clear terminal
  <span class="tk">exit</span>         — Close terminal`,

  whoami: () =>
`<span class="th">Pierre Sabbagh</span>  —  Senior Mobile & Web Developer
  Location  :  Biaqout, Lebanon
  Focus     :  Flutter · Angular · React Native
  Status    :  <span class="tok">● Available for work</span>`,

  about: () =>
`<span class="th">About</span>
  Building performant, beautiful experiences since 2021.
  Led migration of Al Jadeed & Lebanon 24 to Flutter —
  maintaining 24/7 uptime for <span class="tok">1M+ users</span> during national instability.
  Currently building across mobile & web simultaneously
  at DomainAgents and Adrea.`,

  skills: () =>
`<span class="th">Stack</span>
  Flutter · Angular · React Native · tvOS & Tizen · Go · MySQL

<span class="th">AI & DevOps</span>
  Claude Code · MCP · Firebase · CI/CD
  Docker · K8s · Cloudflare · App/Play Store

<span class="th">Languages</span>
  Arabic (Native) · English (Professional) · French (Professional)`,

  experience: () =>
`<span class="th">Work History</span>
  <span class="tk">DomainAgents</span>   Web Developer      <span class="tok">Nov 2024 – Now</span>
  <span class="tk">Adrea</span>          Mobile Developer   <span class="tok">Jan 2025 – Now</span>
  <span class="tk">Softimpact</span>     Mobile Developer   Jan 2023 – Nov 2024
  <span class="tk">Early Career</span>   Mobile Developer   Jan 2021 – Jan 2023`,

  education: () =>
`<span class="th">Education</span>
  BS Computer Science — Arab Open University
  Antelias, Lebanon · 2017 – 2020`,

  projects: () =>
`<span class="th">Featured Projects</span>
  <span class="tk">Al Jadeed</span>            Flutter · Live Streaming · tvOS
  <span class="tk">Lebanon 24</span>           Flutter · Push Notifications · 1M+ users
  <span class="tk">Ekher El Akhbar</span>      Flutter · News · iOS & Android
  <span class="tk">Fujairah TV</span>          Flutter · Live TV · UAE
  <span class="tk">Aliman TV</span>            Flutter · Live Broadcast
  <span class="tk">Ian Assist</span>           Flutter · Live Chat · Claims
  <span class="tk">Ticketing Box Office</span>  Flutter · Events · QR Scan
  <span class="tk">Iraqi Cinema</span>         Flutter · POS · Kiosk · Mobile
  <span class="tk">Target Food</span>          Flutter · E-commerce · Grocery
  <span class="tk">Artist and More</span>      Flutter · Ticket Scanner
  <span class="tk">USA Cab Ads</span>          Flutter · GPS · Analytics
  <span class="tk">Urban Beirut</span>         Flutter · E-commerce · Furniture
  <span class="tk">Beirutic</span>             Flutter · E-commerce
  <span class="tk">Adrea</span>                Flutter · AI · Equestrian
  <span class="tk">DomainAgents</span>         Angular · Full Stack · Domain Marketplace`,

  contact: () =>
`<span class="th">Contact</span>
  Email   :  <span class="tlink">sabbaghpierre@proton.me</span>
  GitHub  :  <span class="tlink">github.com/sabbaghpierre</span>
  Web     :  <span class="tlink">sabbaghpierre.github.io</span>`,

  github: () => {
    setTimeout(() => window.open('https://github.com/sabbaghpierre', '_blank', 'noopener,noreferrer'), 350);
    return 'Opening <span class="tlink">github.com/sabbaghpierre</span> ...';
  },

  resume: () => {
    setTimeout(() => {
      const a = document.createElement('a');
      a.href = 'resume.pdf'; a.download = 'Pierre_Sabbagh_Resume';
      document.body.appendChild(a); a.click(); document.body.removeChild(a);
    }, 350);
    return 'Downloading <span class="tlink">Pierre_Sabbagh_Resume.pdf</span> ...';
  },

  play: () => {
    setTimeout(() => { closeTerminal(); resumeGame(); }, 300);
    return '<span class="tok">Loading world...</span>';
  },

  ls: () =>
`<span class="td">drwxr-xr-x</span>  about.txt
<span class="td">drwxr-xr-x</span>  skills.json
<span class="td">drwxr-xr-x</span>  experience/
<span class="td">drwxr-xr-x</span>  resume.pdf
<span class="td">drwxr-xr-x</span>  .secret   <span class="tmuted">← try: cat .secret</span>`,

  'cat about.txt': () =>
`Building things that matter with technology that scales.
Flutter for mobile. Angular for web. Go for backend.
Always learning, always shipping.`,

  'cat .secret': () =>
`<span class="tok">// you found it.</span>
This entire game runs on pure HTML, CSS and vanilla JS —
no frameworks, no game engine, no build step. Every tile
and sprite is drawn pixel-by-pixel in canvas. Just code.

<span class="tmuted">P.S. the trees along the garden's north edge
thin out in one spot...</span>`,

  date: () => new Date().toUTCString(),
  exit: () => { setTimeout(closeTerminal, 180); return '<span class="tmuted">Closing terminal...</span>'; },
  clear: () => null,
};

function runCmd(raw) {
  const cmd = raw.trim();
  const key = cmd.toLowerCase();
  if (key === '') return;
  if (key.startsWith('echo ')) { tline(tesc(raw.slice(5))); return; }
  if (key in CMDS) {
    const out = CMDS[key]();
    if (out === null) termBody.innerHTML = '';
    else tline(out);
  } else {
    tline('<span class="terr">command not found: ' + tesc(cmd) + '</span>');
  }
}
function printPrompt(cmd) { tline(PROMPT + '<span class="techo">' + tesc(cmd) + '</span>', 'tprompt-line'); }

termInput.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    const val = termInput.value;
    printPrompt(val);
    runCmd(val);
    termInput.value = '';
  }
});
termOverlay.addEventListener('click', e => { if (e.target === termOverlay) closeTerminal(); });

function playDemo(cmds, i = 0) {
  if (i >= cmds.length) return;
  const [cmd, pause] = cmds[i];
  let ci = 0;
  termInput.value = '';
  const iv = setInterval(() => {
    if (ci < cmd.length) { termInput.value += cmd[ci++]; }
    else {
      clearInterval(iv);
      setTimeout(() => {
        printPrompt(cmd); runCmd(cmd);
        setTimeout(() => playDemo(cmds, i + 1), pause);
      }, 380);
    }
  }, 58);
}

/* ───────────────────────── BOOT ───────────────────────── */

fit();
setState('menu');
renderMenu();
if (IS_TOUCH) {
  const hud = document.getElementById('hud');
  if (hud) hud.textContent = 'D-PAD MOVE · A INTERACT · B MENU';
  const help = document.querySelector('.menu-help');
  if (help) help.textContent = '↑↓ SELECT · A OK';
}
requestAnimationFrame(loop);

})();

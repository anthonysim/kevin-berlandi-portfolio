export type Discipline = 'All' | 'Film' | 'Television' | 'Commercials';

export interface Project {
  id: string;
  index: string;
  title: string;
  subtitle: string;
  discipline: Exclude<Discipline, 'All'>;
  clientOrNetwork: string;
  year: string;
  duration: string;
  aspectRatio: string;
  format: string;
  image: string;
  recognition?: string;
  logline: string;
  directorNote: string;
  visualLanguage: string[];
  /** Drop in a Vimeo or YouTube embed URL to play live video inside the Screening Room */
  videoEmbedUrl?: string;
  featured?: boolean;
}

export const DIRECTOR_REEL: Project = {
  id: 'directors-reel',
  index: '00',
  title: 'Director’s Reel',
  subtitle: 'Selected Moments — Film, Television & Commercials',
  discipline: 'Film',
  clientOrNetwork: 'Berlandi Productions',
  year: '2026',
  duration: '02:18',
  aspectRatio: '2.39:1',
  format: 'Anamorphic Digital & 35mm',
  image: '/images/hero-cinema.jpg',
  recognition: 'DGA · Television Academy',
  logline:
    'A visual meditation on scale, stillness, and kinetic momentum across episodic drama, narrative cinema, and global commercial storytelling.',
  directorNote:
    'Whether staging a towering ocean rescue or holding an unbroken close-up in quiet twilight, every frame is built around emotional truth. Light does the speaking before a single line of dialogue lands.',
  visualLanguage: ['Anamorphic Framing', 'Chiaroscuro Lighting', 'Kinetic Blocking', 'Intimate Performance'],
};

export const PROJECTS: Project[] = [
  {
    id: 'hana-sasakis-tail',
    index: '01',
    title: "Hana Sasaki's Tail",
    subtitle: 'Narrative Short Film',
    discipline: 'Film',
    clientOrNetwork: 'Adapted from Three Scenarios',
    year: '2016',
    duration: '14:20',
    aspectRatio: '2.39:1',
    format: 'ARRI Alexa · Vintage Anamorphic',
    image: '/images/film-hana.jpg',
    recognition: 'Official Premiere — Festival de Cannes',
    logline:
      'A poetic, quietly surreal portrait of identity, inheritance, and unseen longing, adapted from the acclaimed literary collection Three Scenarios.',
    directorNote:
      'We approached the camera like a patient observer—favoring architectural frames, warm afternoon shafts of natural light, and lingering silences that let the audience inhabit Hana’s inner world.',
    visualLanguage: ['Natural Golden-Hour Key', 'Measured Dolly Movement', 'Poetic Restraint'],
    featured: true,
  },
  {
    id: 'rescue-hi-surf',
    index: '02',
    title: 'Rescue: HI-Surf',
    subtitle: 'Episodic Television Drama',
    discipline: 'Television',
    clientOrNetwork: 'FOX · Warner Bros. Television',
    year: '2024',
    duration: '43:00',
    aspectRatio: '2.00:1',
    format: 'Large Format · Water Housing & Aerial',
    image: '/images/tv-rescue.jpg',
    recognition: 'Network Primetime',
    logline:
      'High-stakes open-water heroism set along Oahu’s formidable North Shore, balancing visceral oceanic scale with deeply grounded human vulnerability.',
    directorNote:
      'Directing on the water means collaborating with nature’s unpredictability. We paired immersive, wave-level lens placement with quiet, character-first beats on shore so the spectacle always serves the stakes.',
    visualLanguage: ['Water-Level Immersion', 'Backlit Atmospheric Spray', 'High-Tension Pacing'],
    featured: true,
  },
  {
    id: 'found-blacklist',
    index: '03',
    title: 'Found / The Blacklist',
    subtitle: 'Prestige Crime & Psychological Drama',
    discipline: 'Television',
    clientOrNetwork: 'NBC · Universal Television',
    year: '2023–2024',
    duration: '42:00',
    aspectRatio: '1.85:1',
    format: '35mm Equivalent · Spherical Prime',
    image: '/images/tv-thriller.jpg',
    recognition: 'NBC Primetime Series',
    logline:
      'Taut, character-driven investigations where shadow, architecture, and micro-expressions carry as much narrative weight as the dialogue.',
    directorNote:
      'In procedural thrillers, tension lives in the pauses. I love using negative space, reflective glass, and deliberate lens compression to isolate characters inside their moral dilemmas.',
    visualLanguage: ['Neo-Noir Chiaroscuro', 'Controlled Negative Space', 'Performance-Driven Blocking'],
    featured: true,
  },
  {
    id: 'audi-precision',
    index: '04',
    title: 'Audi — Twilight Motion',
    subtitle: 'Global Automotive Campaign',
    discipline: 'Commercials',
    clientOrNetwork: 'Audi',
    year: '2024',
    duration: '01:00',
    aspectRatio: '2.39:1',
    format: 'Phantom Flex4K · Russian Arm',
    image: '/images/comm-auto.jpg',
    recognition: 'National Broadcast & Cinema',
    logline:
      'Sculptural speed through coastal blue-hour mist—treating automotive design with the restraint and tactile drama of a feature film.',
    directorNote:
      'Great commercial directing strips away noise until only feeling remains. We chased the narrow twenty-minute window of coastal blue hour so the car’s geometry emerged from mist and reflected light alone.',
    visualLanguage: ['Sculptural Reflections', 'Precision Tracking', 'Tactile Sound Design'],
    featured: true,
  },
  {
    id: 'partner-track',
    index: '05',
    title: 'Partner Track',
    subtitle: 'Episodic Drama Series',
    discipline: 'Television',
    clientOrNetwork: 'Netflix',
    year: '2022',
    duration: '45:00',
    aspectRatio: '2.00:1',
    format: 'VENICE 6K · Anamorphic',
    image: '/images/hero-cinema.jpg',
    recognition: 'Netflix Global Original',
    logline:
      'Sharp, stylish New York legal drama exploring ambition, identity, and the unspoken power dynamics of high-stakes rooms.',
    directorNote:
      'We treated Manhattan’s glass towers as a stage of reflections and barriers—using fluid Steadicam choreography to mirror the relentless tempo of an attorney fighting to claim her seat at the table.',
    visualLanguage: ['Fluid Steadicam Choreography', 'Architectural Symmetry', 'Warm Tungsten Interiors'],
  },
  {
    id: 'porsche-gmc-reel',
    index: '06',
    title: 'Porsche · GMC · Toyota',
    subtitle: 'Selected Automotive & Brand Anthology',
    discipline: 'Commercials',
    clientOrNetwork: 'Porsche / GMC / Toyota / Nissan / Jeep',
    year: '2021–2025',
    duration: '01:45',
    aspectRatio: '2.39:1',
    format: 'Large Format Cinema',
    image: '/images/director-craft.jpg',
    recognition: 'Global Brand Campaigns',
    logline:
      'A curated anthology of kinetic brand films uniting monumental camera craft with human warmth and split-second editorial rhythm.',
    directorNote:
      'My years as an Assistant Director on large-scale studio features taught me how to command complex logistics effortlessly—freeing the set to focus entirely on artistry, light, and spontaneity.',
    visualLanguage: ['Kinetic Camera Language', 'Precision Choreography', 'Cinematic Color Science'],
  },
];

export const TELEVISION_CREDITS = [
  { title: 'Rescue: HI-Surf', network: 'FOX', role: 'Director' },
  { title: 'Found', network: 'NBC', role: 'Director' },
  { title: 'Partner Track', network: 'Netflix', role: 'Director' },
  { title: "NCIS: Hawaiʻi", network: 'CBS', role: 'Director' },
  { title: 'NCIS: Los Angeles', network: 'CBS', role: 'Director' },
  { title: 'The Blacklist', network: 'NBC', role: 'Director' },
  { title: 'Criminal Minds', network: 'CBS / Paramount+', role: 'Director' },
  { title: 'Bull', network: 'CBS', role: 'Director' },
];

export const FILM_BACKGROUND_CREDITS = [
  { title: "Hana Sasaki's Tail", detail: 'Festival de Cannes Premiere · Director' },
  { title: 'Dirtballs', detail: 'Narrative Short · Director' },
  { title: "Charlie Wilson's War", detail: 'Dir. Mike Nichols · Assistant Director' },
  { title: 'The Avengers', detail: 'Marvel Studios · Assistant Director' },
  { title: 'Transformers Franchise', detail: 'Paramount Pictures · Assistant Director' },
  { title: 'The Bourne Legacy', detail: 'Universal Pictures · Assistant Director' },
];

export const COMMERCIAL_BRANDS = [
  'Audi',
  'Porsche',
  'Jeep',
  'GMC',
  'Buick',
  'Nissan',
  'Toyota',
  'Kia',
  'Burger King',
];

export const CRAFT_PILLARS = [
  {
    number: '01',
    title: 'Visual Architecture',
    subtitle: 'Framing as Emotional Subtext',
    description:
      'Before dialogue enters a scene, the frame has already spoken. Every lens choice, shadow line, and camera placement is engineered to externalize what a character cannot say aloud.',
  },
  {
    number: '02',
    title: 'Scale Meets Intimacy',
    subtitle: 'Blockbuster Rigor, Indie Soul',
    description:
      'Forged on monumental studio sets alongside masters like Mike Nichols and refined through Cannes-premiered independent cinema—bringing effortless command of scale to deeply human stories.',
  },
  {
    number: '03',
    title: 'Performance & Rhythm',
    subtitle: 'The Invisible Cadence of Cinema',
    description:
      'Directing is listening. Creating a calm, electric set where actors take fearless risks, and sculpting the rhythm of blocking and montage so every beat lands with quiet inevitability.',
  },
];

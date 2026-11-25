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
  videoEmbedUrl: string;
  featured?: boolean;
}

export const DIRECTOR_REEL: Project = {
  id: 'general-reel',
  index: '00',
  title: 'General Reel',
  subtitle: 'Director’s Montage — Film, Television & Commercials',
  discipline: 'Film',
  clientOrNetwork: 'Kevin Berlandi · Berlandi Productions',
  year: '2025',
  duration: 'General Reel',
  aspectRatio: '2.39:1',
  format: 'Anamorphic Digital & Large Format',
  image: '/images/hero-cinema.jpg',
  recognition: 'DGA · Television Academy',
  logline:
    'A curated director’s montage spanning primetime episodic television, Cannes-premiered narrative cinema, and global commercial storytelling.',
  directorNote:
    'Whether staging an open-water rescue or holding an unbroken close-up in quiet shadow, every frame is built around emotional truth. Light and rhythm do the speaking before a single line of dialogue lands.',
  visualLanguage: ['Anamorphic Framing', 'Chiaroscuro Lighting', 'Kinetic Blocking', 'Intimate Performance'],
  videoEmbedUrl: 'https://player.vimeo.com/video/1080935755?h=1f6704da83',
};

export const PROJECTS: Project[] = [
  // NARRATIVE / SHORT FILMS
  {
    id: 'hana-sasakis-tail',
    index: '01',
    title: "Hana Sasaki's Tail",
    subtitle: 'Narrative Short Film',
    discipline: 'Film',
    clientOrNetwork: 'Adapted from Three Scenarios',
    year: '2016',
    duration: 'Short Film',
    aspectRatio: '2.39:1',
    format: 'Cinema Anamorphic',
    image:
      'https://static1.squarespace.com/static/699e23e362bb315fe27f3c0d/t/699e99400ccc755adde55188/1772001600018/?format=1500w',
    recognition: 'Official Premiere — Festival de Cannes',
    logline:
      'A poetic, quietly surreal portrait of identity, inheritance, and unseen longing, adapted from the literary collection Three Scenarios.',
    directorNote:
      'We approached the camera like a patient observer—favoring architectural frames, warm natural light, and lingering silences that let the audience inhabit Hana’s inner world.',
    visualLanguage: ['Poetic Restraint', 'Natural Key Lighting', 'Measured Camera Movement'],
    videoEmbedUrl: 'https://player.vimeo.com/video/134337974?h=9cfaaeeba5',
    featured: true,
  },
  {
    id: 'rescue-hi-surf-kickout',
    index: '02',
    title: 'Rescue: HI-Surf — “Kick Out”',
    subtitle: 'Episodic Television Drama · Ep. 104',
    discipline: 'Television',
    clientOrNetwork: 'FOX · Warner Bros. Television',
    year: '2024',
    duration: 'Episodic',
    aspectRatio: '2.00:1',
    format: 'Large Format · Water Housing',
    image:
      'https://static1.squarespace.com/static/699e23e362bb315fe27f3c0d/t/699f58400ccc755adde631e9/1772050496340/?format=1500w',
    recognition: 'FOX Primetime',
    logline:
      'High-stakes open-water heroism along Oahu’s North Shore, uniting visceral oceanic scale with grounded human vulnerability.',
    directorNote:
      'Directing on the water means collaborating with nature’s unpredictability. We paired immersive, wave-level lens placement with quiet character beats on shore so the spectacle always serves the stakes.',
    visualLanguage: ['Water-Level Immersion', 'Kinetic Scale', 'High-Tension Pacing'],
    videoEmbedUrl: 'https://player.vimeo.com/video/1030123998?h=0fad908937',
    featured: true,
  },
  {
    id: 'found-missing-while-perfect',
    index: '03',
    title: 'Found — “Missing While Perfect”',
    subtitle: 'Episodic Television Drama',
    discipline: 'Television',
    clientOrNetwork: 'NBC · Universal Television',
    year: '2024',
    duration: 'Episodic',
    aspectRatio: '1.85:1',
    format: 'Large Format Digital',
    image:
      'https://static1.squarespace.com/static/699e23e362bb315fe27f3c0d/t/699e97961c057764f6cd177a/1772001174136/?format=1500w',
    recognition: 'NBC Primetime',
    logline:
      'An emotionally charged procedural drama exploring obsession, trauma, and the razor-thin line between savior and captor.',
    directorNote:
      'Tension lives in the pauses. We used controlled negative space, reflective surfaces, and deliberate lens compression to isolate characters inside their psychological dilemmas.',
    visualLanguage: ['Chiaroscuro Contrast', 'Performance-Driven Blocking', 'Emotional Compression'],
    videoEmbedUrl: 'https://player.vimeo.com/video/1030135107?h=9d38f80ccd',
    featured: true,
  },
  {
    id: 'blacklist-the-postman',
    index: '04',
    title: 'The Blacklist — “The Postman”',
    subtitle: 'Episodic Crime Thriller',
    discipline: 'Television',
    clientOrNetwork: 'NBC · Sony Pictures Television',
    year: '2023',
    duration: 'Episodic',
    aspectRatio: '1.85:1',
    format: 'Cinema Spherical',
    image:
      'https://static1.squarespace.com/static/699e23e362bb315fe27f3c0d/t/699f586d1c057764f6cdf7bd/1772050541139/?format=1500w',
    recognition: 'NBC Primetime',
    logline:
      'Taut espionage and moral ambiguity in a high-stakes chapter of NBC’s signature crime thriller.',
    directorNote:
      'Every scene in The Blacklist is a chess match. We choreographed the camera to glide with the power shifts in the room so the audience feels who holds leverage before a word is spoken.',
    visualLanguage: ['Neo-Noir Lighting', 'Precision Blocking', 'Suspense Cadence'],
    videoEmbedUrl: 'https://player.vimeo.com/video/1126334339?h=4d36165d17',
    featured: true,
  },
  {
    id: 'dirtballs',
    index: '05',
    title: 'Dirtballs',
    subtitle: 'Narrative Short Film',
    discipline: 'Film',
    clientOrNetwork: 'Berlandi Productions',
    year: '2024',
    duration: 'Short Film',
    aspectRatio: '2.39:1',
    format: 'Cinema Digital',
    image:
      'https://static1.squarespace.com/static/699e23e362bb315fe27f3c0d/t/699e999d1c057764f6cd190a/1772001693088/?format=1500w',
    recognition: 'Narrative Short',
    logline:
      'A gritty, character-forward narrative short driven by raw texture, sharp comedic timing, and lived-in authenticity.',
    directorNote:
      'We kept the camera nimble and close to the performers—embracing natural texture and spontaneous rhythm so every beat feels discovered in the moment.',
    visualLanguage: ['Handheld Intimacy', 'Textural Lighting', 'Character Rhythm'],
    videoEmbedUrl: 'https://player.vimeo.com/video/1053877597',
  },
  {
    id: 'bull-you-killed-your-sister',
    index: '06',
    title: 'Bull — “You Killed Your Sister”',
    subtitle: 'Episodic Legal Drama',
    discipline: 'Television',
    clientOrNetwork: 'CBS · Amblin Television',
    year: '2020',
    duration: 'Episodic',
    aspectRatio: '1.85:1',
    format: 'Cinema Digital',
    image:
      'https://static1.squarespace.com/static/699e23e362bb315fe27f3c0d/t/699e97e00ccc755adde5508a/1772001248088/?format=1500w',
    recognition: 'CBS Primetime',
    logline:
      'High-wire courtroom drama where subtle micro-expressions and shifting allegiances decide the verdict.',
    directorNote:
      'In courtroom storytelling, the reaction shot is everything. We staged tight architectural sightlines across the gallery so silence carried the weight of a cross-examination.',
    visualLanguage: ['Courtroom Sightlines', 'Intimate Close-Ups', 'Measured Tension'],
    videoEmbedUrl: 'https://player.vimeo.com/video/380530928',
  },

  // COMMERCIALS
  {
    id: 'audi-r8-gt',
    index: '07',
    title: 'Audi — R8 GT',
    subtitle: 'Automotive Commercial',
    discipline: 'Commercials',
    clientOrNetwork: 'Audi',
    year: 'Commercial',
    duration: 'Spot',
    aspectRatio: '2.39:1',
    format: 'Cinema Tracking',
    image:
      'https://static1.squarespace.com/static/699e23e362bb315fe27f3c0d/t/699f7f9e44195311c2c3c2c8/1772060574117/?format=1500w',
    logline:
      'Sculptural velocity and precision engineering—treating the Audi R8 GT with the brooding visual drama of a feature film.',
    directorNote:
      'Great automotive filmmaking is choreography between light, reflection, and sound. We let the car’s silhouette emerge from shadow with zero wasted frames.',
    visualLanguage: ['Sculptural Reflections', 'Precision Tracking', 'Cinematic Sound'],
    videoEmbedUrl: 'https://player.vimeo.com/video/41329162',
  },
  {
    id: 'audi-sleepy-hollow',
    index: '08',
    title: 'Audi — Sleepy Hollow',
    subtitle: 'Automotive Narrative Commercial',
    discipline: 'Commercials',
    clientOrNetwork: 'Audi',
    year: 'Commercial',
    duration: 'Spot',
    aspectRatio: '2.39:1',
    format: 'Anamorphic Cinema',
    image:
      'https://static1.squarespace.com/static/699e23e362bb315fe27f3c0d/t/699f7f77b058784bd93fd441/1772060535612/?format=1500w',
    logline:
      'Atmospheric nocturnal storytelling blending folklore suspense with razor-sharp modern automotive cinematography.',
    directorNote:
      'By leaning into atmospheric fog, backlit trees, and feature-style suspense pacing, the commercial unfolds like a miniature dark fable.',
    visualLanguage: ['Nocturnal Atmosphere', 'Narrative Suspense', 'Backlit Haze'],
    videoEmbedUrl: 'https://player.vimeo.com/video/41330072',
  },
  {
    id: 'porsche-cayenne',
    index: '09',
    title: 'Porsche — Cayenne',
    subtitle: 'Luxury Automotive Commercial',
    discipline: 'Commercials',
    clientOrNetwork: 'Porsche',
    year: 'Commercial',
    duration: 'Spot',
    aspectRatio: '2.39:1',
    format: 'Cinema Digital',
    image:
      'https://static1.squarespace.com/static/699e23e362bb315fe27f3c0d/t/699f7fc11c057764f6ce342f/1772060609840/?format=1500w',
    logline:
      'Refined power and tactile motion crafted with disciplined European minimalism and kinetic camera work.',
    directorNote:
      'Every camera move was matched to the torque and poise of the vehicle—clean lines, disciplined color, and understated confidence.',
    visualLanguage: ['Kinetic Poise', 'Architectural Lines', 'Luxury Restraint'],
    videoEmbedUrl: 'https://player.vimeo.com/video/41329588',
  },
  {
    id: 'gmc-anthem',
    index: '10',
    title: 'GMC — Anthem',
    subtitle: 'National Broadcast Campaign · :60',
    discipline: 'Commercials',
    clientOrNetwork: 'GMC',
    year: 'Commercial',
    duration: '01:00',
    aspectRatio: '2.39:1',
    format: 'Large Format Cinema',
    image:
      'https://static1.squarespace.com/static/699e23e362bb315fe27f3c0d/t/699f800f44195311c2c3c36a/1772060687610/?format=1500w',
    logline:
      'A bold sixty-second anthem uniting monumental American landscapes with human craft and industrial precision.',
    directorNote:
      'Anthem spots live or die on editorial cadence. We paired sweeping scale with tactile human details—hands, steel, dust, and light—to ground the grandeur.',
    visualLanguage: ['Anthemic Scale', 'Editorial Cadence', 'Tactile Detail'],
    videoEmbedUrl: 'https://player.vimeo.com/video/217107451',
  },
  {
    id: 'wait-until-8th-the-gift',
    index: '11',
    title: 'The Gift — Wait Until 8th',
    subtitle: 'Public Service Film · :60',
    discipline: 'Commercials',
    clientOrNetwork: 'Wait Until 8th PSA',
    year: '2025',
    duration: '01:00',
    aspectRatio: '1.85:1',
    format: 'Cinema Digital',
    image:
      'https://static1.squarespace.com/static/699e23e362bb315fe27f3c0d/t/699f5c7f44195311c2c38e70/1772051583714/?format=1500w',
    recognition: 'National PSA Campaign',
    logline:
      'An intimate, emotionally resonant sixty-second film examining childhood presence in an always-connected world.',
    directorNote:
      'We stripped away commercial artifice to capture honest, unguarded childhood moments—letting warmth and stillness deliver the emotional turn.',
    visualLanguage: ['Intimate Naturalism', 'Emotional Pacing', 'Human Warmth'],
    videoEmbedUrl: 'https://player.vimeo.com/video/1073376430',
  },
  {
    id: 'nissan-altima-chase',
    index: '12',
    title: 'Nissan — The Altima Chase',
    subtitle: 'Action Automotive Commercial',
    discipline: 'Commercials',
    clientOrNetwork: 'Nissan',
    year: 'Commercial',
    duration: 'Spot',
    aspectRatio: '2.39:1',
    format: 'Precision Stunt & Tracking',
    image:
      'https://static1.squarespace.com/static/699e23e362bb315fe27f3c0d/t/699f7e441c057764f6ce31e5/1772060228935/?format=1500w',
    logline:
      'High-velocity urban pursuit crafted with blockbuster action choreography and split-second editorial impact.',
    directorNote:
      'Drawing directly from years on major studio action sets, we designed every stunt beat and camera angle for visceral clarity and momentum.',
    visualLanguage: ['Action Choreography', 'Dynamic Tracking', 'Blockbuster Craft'],
    videoEmbedUrl: 'https://player.vimeo.com/video/129984589',
  },
  {
    id: 'buick-avenir-anthem',
    index: '13',
    title: 'Buick — Avenir Anthem',
    subtitle: 'Brand Anthem Commercial',
    discipline: 'Commercials',
    clientOrNetwork: 'Buick',
    year: 'Commercial',
    duration: 'Spot',
    aspectRatio: '2.39:1',
    format: 'Cinema Digital',
    image:
      'https://static1.squarespace.com/static/699e23e362bb315fe27f3c0d/t/699f5c60b058784bd93f9f52/1772051552948/?format=1500w',
    logline:
      'Elevated modern luxury framed through architectural light, quiet elegance, and fluid camera movement.',
    directorNote:
      'Luxury is felt in stillness and texture. We lit every interior and exterior pass like a fashion editorial in motion.',
    visualLanguage: ['Editorial Elegance', 'Fluid Motion', 'Warm Highlights'],
    videoEmbedUrl: 'https://player.vimeo.com/video/262995616',
  },
  {
    id: 'buick-lacrosse-exterior',
    index: '14',
    title: 'Buick LaCrosse — Exterior Design',
    subtitle: 'Design Film · :30',
    discipline: 'Commercials',
    clientOrNetwork: 'Buick',
    year: 'Commercial',
    duration: '00:30',
    aspectRatio: '2.39:1',
    format: 'Studio & Location Cinema',
    image:
      'https://static1.squarespace.com/static/699e23e362bb315fe27f3c0d/t/699f5cc144195311c2c38ef6/1772051649797/?format=1500w',
    logline:
      'A crisp thirty-second visual study celebrating sculptural form, contour, and reflected light.',
    directorNote:
      'Treating automotive curves as architecture—letting controlled reflections glide across the body lines in one seamless rhythm.',
    visualLanguage: ['Sculptural Light', 'Geometric Precision', 'Clean Framing'],
    videoEmbedUrl: 'https://player.vimeo.com/video/221634951',
  },
  {
    id: 'toyota-prius-roadtrip',
    index: '15',
    title: 'Toyota Prius — Roadtrip ft. Ximena Sariñana',
    subtitle: 'Music & Lifestyle Brand Film',
    discipline: 'Commercials',
    clientOrNetwork: 'Toyota',
    year: 'Commercial',
    duration: 'Brand Film',
    aspectRatio: '1.85:1',
    format: 'Natural Light Cinema',
    image:
      'https://static1.squarespace.com/static/699e23e362bb315fe27f3c0d/t/699f5ce40ccc755adde63924/1772051684240/?format=1500w',
    logline:
      'Sun-drenched road film following acclaimed singer-songwriter Ximena Sariñana through open landscapes and spontaneous discovery.',
    directorNote:
      'We kept the footprint light and intimate so Ximena’s natural charisma and the golden-hour light could lead every scene.',
    visualLanguage: ['Golden-Hour Naturalism', 'Musical Rhythm', 'Documentary Ease'],
    videoEmbedUrl: 'https://player.vimeo.com/video/103471806',
  },
  {
    id: 'jeep-wrangler-aluminum-doors',
    index: '16',
    title: 'Jeep Wrangler — Aluminum Doors',
    subtitle: 'Commercial Campaign',
    discipline: 'Commercials',
    clientOrNetwork: 'Jeep',
    year: 'Commercial',
    duration: 'Spot',
    aspectRatio: '1.85:1',
    format: 'Cinema Digital',
    image:
      'https://static1.squarespace.com/static/699e23e362bb315fe27f3c0d/t/699f7e86b058784bd93fd2fc/1772060294044/?format=1500w',
    logline:
      'Playful, tactile brand storytelling highlighting rugged capability with sharp comedic timing and kinetic visuals.',
    directorNote:
      'A product feature becomes memorable when it’s told through character and wit rather than exposition.',
    visualLanguage: ['Comedic Timing', 'Rugged Texture', 'Crisp Pacing'],
    videoEmbedUrl: 'https://player.vimeo.com/video/328040035',
  },
  {
    id: 'jeep-wrangler-sway-bar',
    index: '17',
    title: 'Jeep Wrangler — Sway Bar',
    subtitle: 'Commercial Campaign',
    discipline: 'Commercials',
    clientOrNetwork: 'Jeep',
    year: 'Commercial',
    duration: 'Spot',
    aspectRatio: '1.85:1',
    format: 'Off-Road Cinema',
    image:
      'https://static1.squarespace.com/static/699e23e362bb315fe27f3c0d/t/699f5ca444195311c2c38eca/1772051620035/?format=1500w',
    logline:
      'Kinetic off-road terrain meets crisp visual storytelling, spotlighting engineering poise under extreme angles.',
    directorNote:
      'Low-angle lens placement turns rugged terrain into a dramatic stage—making every mechanical movement feel effortless.',
    visualLanguage: ['Low-Angle Scale', 'Kinetic Terrain', 'Visual Clarity'],
    videoEmbedUrl: 'https://player.vimeo.com/video/328039693',
  },
  {
    id: 'jeep-wrangler-all-weather',
    index: '18',
    title: 'Jeep Wrangler — All-Weather',
    subtitle: 'Commercial Campaign',
    discipline: 'Commercials',
    clientOrNetwork: 'Jeep',
    year: 'Commercial',
    duration: 'Spot',
    aspectRatio: '1.85:1',
    format: 'Elemental Location Cinema',
    image:
      'https://static1.squarespace.com/static/699e23e362bb315fe27f3c0d/t/699e98810ccc755adde550ff/1772001409928/?format=1500w',
    logline:
      'Elemental adventure captured with vivid atmospheric texture and grounded human energy.',
    directorNote:
      'Rain, dust, and light give the frame physical weight—putting the viewer right inside the elements.',
    visualLanguage: ['Elemental Atmosphere', 'Tactile Cinematography', 'Energetic Cut'],
    videoEmbedUrl: 'https://player.vimeo.com/video/328039390',
  },
  {
    id: 'nixon-x-krewella',
    index: '19',
    title: 'Nixon × Krewella',
    subtitle: 'Music & Lifestyle Brand Film',
    discipline: 'Commercials',
    clientOrNetwork: 'Nixon',
    year: 'Commercial',
    duration: 'Brand Film',
    aspectRatio: '2.39:1',
    format: 'Anamorphic Night Cinema',
    image:
      'https://static1.squarespace.com/static/699e23e362bb315fe27f3c0d/t/699e98be0ccc755adde5512f/1772001470948/?format=1500w',
    logline:
      'Electric nightlife energy, kinetic neon-lit portraiture, and rhythmic sound-driven montage for Nixon × Krewella.',
    directorNote:
      'Cut to the pulse of the music—pairing high-contrast night lighting with raw, kinetic portraits that blur commercial and music video.',
    visualLanguage: ['Electric Night Color', 'Sound-Driven Montage', 'Kinetic Portraiture'],
    videoEmbedUrl: 'https://player.vimeo.com/video/230169487',
  },
];

export const TELEVISION_CREDITS = [
  { title: 'Rescue: HI-Surf', network: 'FOX', role: 'Director' },
  { title: 'Found', network: 'NBC', role: 'Director' },
  { title: 'Partner Track', network: 'Netflix', role: 'Director' },
  { title: 'NCIS: Hawaiʻi', network: 'CBS', role: 'Director' },
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
  'Nixon',
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

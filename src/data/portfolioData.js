// Dados que não mudam com o idioma. Os textos ficam em src/i18n/translations.js.

export const personalInfo = {
  fullName: 'Arthur Reichert',
  location: 'Parobé, RS — Brasil',
  email: 'arthur.reichert999@gmail.com',
  linkedin: 'https://www.linkedin.com/in/arthur-reichert-ba6494288/',
  github: 'https://github.com/ArthurReichert',
}

// Imagens, tags e links de cada projeto, por id. Nome e descrição estão nas traduções.
export const projectAssets = {
  crm: {
    icon: '/projects/crm-icon.jpg',
    screenshot: '/projects/crm-1.png',
    tags: ['Ionic 5', 'Angular', 'TypeScript', 'Capacitor', 'Socket.IO', 'Sentry'],
    links: [
      { type: 'play', url: 'https://play.google.com/store/apps/details?id=net.odig.piperun' },
      { type: 'appstore', url: 'https://apps.apple.com/br/app/piperun-crm/id1459253282' },
    ],
  },
  cxm: {
    icon: '/projects/cxm-icon.jpg',
    screenshot: '/projects/cxm-1.png',
    tags: ['Flutter', 'Dart', 'MobX', 'Clean Architecture', 'Pusher', 'Firebase', 'Sentry', 'Pendo'],
    links: [
      { type: 'play', url: 'https://play.google.com/store/apps/details?id=com.crmpiperun.atendimento' },
      { type: 'appstore', url: 'https://apps.apple.com/br/app/piperun-cxm/id1660091588' },
    ],
  },
  mambus: {
    emoji: '🏢',
    tags: ['WordPress', 'DNS', 'Google Workspace', 'Hostinger'],
    links: [{ type: 'site', url: 'https://mambus.com.br' }],
  },
  damascus: {
    emoji: '🪟',
    tags: ['React', 'Vite', 'TypeScript', 'Tailwind', 'Hostinger'],
    links: [{ type: 'site', url: 'https://damascusdecor.com.br' }],
  },
  gars: {
    emoji: '⚖️',
    tags: ['TypeScript', 'Hono', 'React', 'Cloudflare Workers', 'D1 (SQLite)', 'Drizzle'],
    links: [],
  },
  letterboxd: {
    emoji: '🎬',
    tags: ['Python', 'CSV'],
    links: [{ type: 'github', url: 'https://github.com/ArthurReichert/watchlist-insights-letterboxd' }],
  },
  doefacil: {
    emoji: '🤲',
    tags: ['Flutter', 'Python'],
    links: [
      { type: 'front', url: 'https://github.com/ArthurReichert/front_doefacil_facu' },
      { type: 'back', url: 'https://github.com/ArthurReichert/back_doefacil_facu' },
    ],
  },
  nubank: {
    emoji: '💜',
    tags: ['Flutter', 'Dart'],
    links: [{ type: 'github', url: 'https://github.com/ArthurReichert/nubank_app' }],
  },
  weather: {
    emoji: '🌤️',
    tags: ['Flutter', 'Geolocalização'],
    links: [{ type: 'github', url: 'https://github.com/ArthurReichert/minimal_weather_app' }],
  },
}

// Cursos concluídos. Os nomes são os do catálogo, por isso não são traduzidos.
export const courses = [
  {
    id: 'ionic-academind',
    name: 'Ionic: Build iOS, Android & Web Apps with Ionic & Angular',
    provider: 'Udemy · Academind',
    topics: ['Ionic', 'Angular', 'Capacitor'],
    url: 'https://www.udemy.com/course/ionic-2-the-practical-guide-to-building-ios-android-apps/',
  },
  {
    id: 'ionic-social',
    name: 'Ionic 6: Login Social',
    provider: 'Udemy',
    topics: ['Ionic', 'Autenticação social'],
    url: 'https://www.udemy.com/course/ionic-6-login-social/',
  },
  {
    id: 'js',
    name: 'JavaScript Moderno: do básico ao avançado',
    provider: 'Udemy',
    topics: ['JavaScript', 'ES6+'],
    url: 'https://www.udemy.com/course/curso-de-javascript-moderno-do-basico-ao-avancado/',
  },
  {
    id: 'csharp',
    name: 'Aplicação desktop em C#: captura de tela e comunicação em rede',
    provider: 'Udemy',
    topics: ['C#', 'Desktop', 'Rede'],
    url: 'https://www.udemy.com/course/curso-hacker-spyscreenconecte-crie-seu-programa-em-c-final/',
  },
  {
    id: 'logic',
    name: 'Programação para Iniciantes (Portugol Studio)',
    provider: 'Udemy',
    topics: ['Lógica de programação', 'Algoritmos'],
    url: 'https://www.udemy.com/course/programacao-para-iniciantes-l/',
  },
  {
    id: 'biometria',
    name: 'Curso Básico de Biometria',
    provider: 'Udemy',
    topics: ['Biometria', 'Segurança'],
    url: 'https://www.udemy.com/course/curso-basico-de-biometria/',
  },
]

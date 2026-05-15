export const personalInfo = {
  fullName: 'Arthur Reichert',
  title: 'Mobile Developer',
  subtitle: 'Flutter & Dart Specialist',
  bio: 'Desenvolvedor mobile com 3 anos de experiência construindo aplicações de alta performance com Flutter e Dart. Comprometido com código limpo, princípios SOLID e experiências de usuário excepcionais.',
  location: 'Brasil',
  email: 'arthur.reichert999@gmail.com',
  linkedin: 'https://linkedin.com/in/arthur-reichert',
  github: 'https://github.com/arthur-reichert',
}

export const experiences = [
  {
    id: 'piperun-jr',
    company: 'CRM PipeRun',
    role: 'Engenheiro de Software Júnior',
    period: '2023 — Presente',
    isCurrent: true,
    description:
      'Desenvolvimento e manutenção do aplicativo mobile em Flutter, seguindo princípios SOLID e DRY para garantir uma base de código escalável. Liderança técnica na refatoração de módulos legados com auxílio de IA generativa, resultando em melhoria significativa na qualidade do código.',
    highlights: [
      'Refatoração de módulos com auxílio de IA generativa',
      'Arquitetura escalável com separação clara de responsabilidades',
      'Migração de componentes Ionic para Flutter nativo',
      'Code review e mentoria de estagiários',
    ],
    technologies: ['Flutter', 'Dart', 'Sentry', 'Pendo', 'Ionic', 'Git'],
  },
  {
    id: 'piperun-intern',
    company: 'CRM PipeRun',
    role: 'Estagiário de Desenvolvimento',
    period: '2022 — 2023',
    isCurrent: false,
    description:
      'Desenvolvimento de features no app Flutter, focando em UX/UI e melhorias de usabilidade. Participação ativa na publicação de releases nas lojas Google Play e App Store.',
    highlights: [
      'Desenvolvimento de novas features em Flutter',
      'Melhorias de UX/UI baseadas em feedback de usuários',
      'Publicação nas stores (Google Play & App Store)',
      'Testes unitários e de integração',
    ],
    technologies: ['Flutter', 'Dart', 'UX/UI', 'Play Store', 'App Store'],
  },
  {
    id: 'ahr-digital',
    company: 'AHR Digital',
    role: 'Desenvolvedor Web Freelance',
    period: '2021 — 2022',
    isCurrent: false,
    description:
      'Desenvolvimento de sites institucionais, landing pages e soluções web sob medida para pequenos e médios negócios. Responsável por todo o ciclo de vida dos projetos, desde o levantamento de requisitos até a entrega final.',
    highlights: [
      'Criação de landing pages de alta conversão',
      'Desenvolvimento com WordPress e temas customizados',
      'Otimização de performance e SEO',
      'Gestão de projetos e relacionamento com clientes',
    ],
    technologies: ['WordPress', 'HTML/CSS', 'JavaScript', 'PHP', 'SEO'],
  },
]

export const hardSkills = [
  { name: 'Flutter', icon: '📱' },
  { name: 'Dart', icon: '🎯' },
  { name: 'TypeScript', icon: '🔷' },
  { name: 'Angular', icon: '🅰️' },
  { name: 'Git & GitHub', icon: '🔀' },
  { name: 'REST APIs', icon: '🌐' },
  { name: 'App Store & Google Play', icon: '🏪' },
  { name: 'Observabilidade (Sentry, OpenTelemetry)', icon: '🔍' },
  { name: 'Pendo & Product Analytics', icon: '📊' },
  { name: 'CI/CD (noções)', icon: '⚙️' },
]

export const softSkills = [
  { name: 'Comunicação', icon: '💬', description: 'Comunicação clara e assertiva com times e stakeholders' },
  { name: 'Trabalho em Equipe', icon: '🤝', description: 'Colaboração efetiva em equipes multidisciplinares' },
  { name: 'Resolução de Problemas', icon: '🧩', description: 'Pensamento analítico para solução de problemas complexos' },
  { name: 'Proatividade', icon: '🚀', description: 'Iniciativa para propor melhorias e soluções' },
  { name: 'Adaptabilidade', icon: '🔄', description: 'Flexibilidade para aprender e se adaptar rapidamente' },
  { name: 'Gestão de Tempo', icon: '⏰', description: 'Priorização eficiente de tarefas e entregas' },
]

export const education = [
  {
    degree: 'Tecnólogo em Sistemas para Internet',
    institution: 'Universidade do Vale do Rio dos Sinos (Unisinos)',
    period: '2021 — 2024',
    description:
      'Formação abrangente em desenvolvimento web e mobile, com ênfase em boas práticas de engenharia de software, banco de dados e arquitetura de sistemas.',
    highlights: [
      'Desenvolvimento web full-stack',
      'Engenharia de software e padrões de projeto',
      'Banco de dados relacional e não-relacional',
      'Metodologias ágeis',
    ],
  },
]

export const navigationLinks = [
  { id: 'hero', label: 'Início' },
  { id: 'about', label: 'Sobre' },
  { id: 'experience', label: 'Experiência' },
  { id: 'skills', label: 'Skills' },
  { id: 'education', label: 'Formação' },
  { id: 'contact', label: 'Contato' },
]

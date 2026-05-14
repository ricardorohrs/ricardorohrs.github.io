export type Locale = "pt-BR" | "en";

type Dictionary = Record<string, Record<Locale, string>>;

export const translations: Dictionary = {
  "nav.about": { "pt-BR": "Sobre", en: "About" },
  "nav.skills": { "pt-BR": "Skills", en: "Skills" },
  "nav.freelas": { "pt-BR": "Freelas", en: "Freelances" },
  "nav.projects": { "pt-BR": "Projetos", en: "Projects" },
  "nav.contact": { "pt-BR": "Contato", en: "Contact" },
  "nav.openMenu": { "pt-BR": "Abrir menu", en: "Open menu" },
  "nav.closeMenu": { "pt-BR": "Fechar menu", en: "Close menu" },
  "nav.main": { "pt-BR": "Navegação principal", en: "Main navigation" },
  "nav.goTop": { "pt-BR": "Ir para o topo", en: "Go to top" },

  "ui.theme.lightMode": { "pt-BR": "light mode", en: "light mode" },
  "ui.theme.darkMode": { "pt-BR": "dark mode", en: "dark mode" },
  "ui.theme.switchToLight": { "pt-BR": "Ativar tema claro", en: "Switch to light mode" },
  "ui.theme.switchToDark": { "pt-BR": "Ativar tema escuro", en: "Switch to dark mode" },
  "ui.language.switchToPt": { "pt-BR": "Mudar idioma para português", en: "Switch language to Portuguese" },
  "ui.language.switchToEn": { "pt-BR": "Switch language to English", en: "Switch language to English" },
  "ui.language.pt": { "pt-BR": "Português", en: "Portuguese" },
  "ui.language.en": { "pt-BR": "Inglês", en: "English" },

  "hero.role": { "pt-BR": "Desenvolvedor Full Stack", en: "Full Stack Developer" },
  "hero.summary": {
    "pt-BR": "Desenvolvedor Full Stack apaixonado por construir soluções web modernas e escaláveis.",
    en: "Full Stack developer passionate about building modern and scalable web solutions.",
  },
  "hero.location": { "pt-BR": "Porto Alegre, RS — Brasil", en: "Porto Alegre, RS — Brazil" },

  "about.kicker": { "pt-BR": "// Sobre mim", en: "// About" },
  "about.title": { "pt-BR": "Quem sou eu.", en: "About me." },
  "about.body": {
    "pt-BR": "Sou Desenvolvedor Full Stack com foco em aplicações web e APIs bem estruturadas. Gaúcho, formado pela Universidade Federal de Santa Maria, atualmente moro em Porto Alegre, RS. Com {highlight} transformando requisitos em soluções simples, performáticas e fáceis de manter — do backend ao frontend.",
    en: "I am a Full Stack Developer focused on web applications and well-structured APIs. I graduated from the Federal University of Santa Maria and currently live in Porto Alegre, RS. With {highlight} transforming requirements into simple, high-performance, and easy-to-maintain solutions — from backend to frontend."
  },
  "about.body.highlight": {
    "pt-BR": "mais de 6 anos de experiência",
    en: "over 6 years of experience"
  },
  "about.card.fullstack.title": { "pt-BR": "Full Stack", en: "Full stack" },
  "about.card.fullstack.desc": {
    "pt-BR": "Do backend ao frontend, com foco em performance, manutenibilidade e entrega contínua.",
    en: "From backend to frontend, focused on performance, maintainability, and continuous delivery.",
  },
  "about.card.web.title": { "pt-BR": "Web Moderno", en: "Modern web" },
  "about.card.web.desc": {
    "pt-BR": "Interfaces responsivas, acessíveis e com boa experiência de uso em diferentes dispositivos.",
    en: "Responsive, accessible interfaces with a great experience across devices.",
  },
  "about.card.arch.title": { "pt-BR": "Arquitetura", en: "Architecture" },
  "about.card.arch.desc": {
    "pt-BR": "Código limpo, padrões consistentes e decisões técnicas pragmáticas para escalar com segurança.",
    en: "Clean code, consistent patterns, and pragmatic technical decisions to scale safely.",
  },

  "skills.kicker": { "pt-BR": "// Habilidades", en: "// Skills" },
  "skills.title": { "pt-BR": "Tech Stack.", en: "Tech stack." },
  "skills.subtitle": {
    "pt-BR": "Principais tecnologias e ferramentas que uso no dia a dia para entregar interfaces modernas, APIs consistentes e ambientes de desenvolvimento/produção confiáveis e eficientes.",
    en: "Key technologies and tools I use daily to ship modern interfaces, consistent APIs, and reliable and efficient dev/production environments.",
  },
  "skills.frontend": { "pt-BR": "APIs robustas e escaláveis", en: "Robust and scalable APIs" },
  "skills.backend": { "pt-BR": "Interfaces modernas e responsivas", en: "Modern and responsive interfaces" },
  "skills.tools": { "pt-BR": "Desenvolvimento mais eficiente", en: "More efficient development" },

  "projects.kicker": { "pt-BR": "// Projetos", en: "// Projects" },
  "projects.title": { "pt-BR": "Trabalhos em destaque.", en: "Featured work." },
  "projects.subtitle": {
    "pt-BR": "Alguns repositórios públicos no GitHub com foco em desenvolvimento web, boas práticas e aprendizado contínuo. Clique para ver o repositório e detalhes de implementação.",
    en: "A few public GitHub repositories focused on web development, best practices and continuous learning. Click to open the repository and implementation details.",
  },
  "projects.openProject": { "pt-BR": "Abrir projeto {{name}} no GitHub", en: "Open {{name}} on GitHub" },
  "projects.appestat.desc": {
    "pt-BR": "Aplicativo de estatística sobre análise exploratória de dados.",
    en: "Statistics app focused on exploratory data analysis.",
  },
  "projects.happy.desc": {
    "pt-BR": "Plataforma desenvolvida durante a Next Level Week da Rocketseat.",
    en: "Platform built during Rocketseat’s Next Level Week.",
  },
  "projects.todolist.desc": {
    "pt-BR": "Aplicação de tarefas construída com Laravel e Vue.js.",
    en: "Task application built with Laravel and Vue.js.",
  },
  "projects.rgbpattern.desc": {
    "pt-BR": "Aplicativo gamificado para auxiliar no aprendizado de Padrões de Projeto.",
    en: "Gamified app to support learning Design Patterns.",
  },
  "projects.flappy.desc": {
    "pt-BR": "Estudo e desenvolvimento de um jogo utilizando a engine Godot.",
    en: "Study and development of a game using the Godot engine.",
  },
  "projects.cine55.desc": {
    "pt-BR": "Projeto colaborativo para sistema de cinema.",
    en: "Collaborative project for a cinema system.",
  },
  "freelance.kicker": { "pt-BR": "// Projetos Freelas", en: "// Freelance Projects" },
  "freelance.title": { "pt-BR": "Clientes e Projetos.", en: "Clients and Projects." },
  "freelance.subtitle": {
    "pt-BR": "Alguns projetos freelancers de alto impacto para o cliente, desenvolvidos com foco em design moderno, usabilidade e performance. Veja mais ao clicar no projeto!",
    en: "Some high-impact freelance projects for clients, developed with a focus on modern design, usability, and performance. See more by clicking the project!",
  },
  "freelance.cta.label": {
    "pt-BR": "Procurando um desenvolvedor para seu próximo projeto? Vamos conversar!",
    en: "Looking for a developer for your next project? Let's talk!"
  },
  "freelance.cta.button": { "pt-BR": "Solicitar Orçamento", en: "Request Quote" },
  "freelance.openProject": { "pt-BR": "Visitar {{name}}", en: "Visit {{name}}" },
  "freelance.rmautomotive.desc": {
    "pt-BR": "Site para empresa de automação e soluções automotivas. Design responsivo com foco em apresentação de serviços.",
    en: "Website for automotive automation and solutions company. Responsive design focused on service presentation.",
  },
  "freelance.sudoeste.desc": {
    "pt-BR": "Site institucional  para empresa de engenharia. Desenvolvido com foco em gesto de projetos e portfólio.",
    en: "Institutional website for engineering company. Developed with focus on project management and portfolio.",
  },
  "contact.kicker": { "pt-BR": "// Contato", en: "// Contact" },
  "contact.title": { "pt-BR": "Vamos conversar?", en: "Let's talk?" },
  "contact.body": {
    "pt-BR": "Estou aberto a novas oportunidades e colaborações. Entre em contato!",
    en: "I am open to new opportunities and collaborations. Get in touch!",
  },

  "footer.madeIn": { "pt-BR": "Feito com ♥ em Porto Alegre", en: "Made with ♥ in Porto Alegre" },
};

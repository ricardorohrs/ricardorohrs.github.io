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
  "nav.websites": { "pt-BR": "Criar site", en: "Build a website" },

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
  "freelance.cta.button": { "pt-BR": "Quero saber mais", en: "I want to know more" },
  "freelance.cta.contact": { "pt-BR": "Entre em contato", en: "Get in Touch" },
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

  "landing.websites.seo.title": {
    "pt-BR": "Criação de Sites e Sistemas Web — Ricardo Röhrs",
    en: "Websites & Web Systems — Ricardo Röhrs",
  },
  "landing.websites.seo.description": {
    "pt-BR": "Criação de sites e sistemas web com foco em performance, SEO e acessibilidade. Landing pages, sites institucionais e aplicações web sob medida.",
    en: "Websites and web systems focused on performance, SEO, and accessibility. Landing pages, institutional sites and custom web apps.",
  },
  "landing.websites.seo.ogTitle": {
    "pt-BR": "Criação de Sites e Sistemas Web",
    en: "Websites & Web Systems",
  },
  "landing.websites.seo.ogDescription": {
    "pt-BR": "Sites rápidos, acessíveis e otimizados para SEO — com microinterações e ótima experiência em qualquer dispositivo.",
    en: "Fast, accessible, SEO-optimized sites — with microinteractions and great UX on any device.",
  },
  "landing.websites.seo.keywords": {
    "pt-BR": "criação de sites, desenvolvimento web, landing page, api, backend, seo, performance",
    en: "website development, web development, landing page, api, backend, seo, performance",
  },
  "landing.websites.ld.name": { "pt-BR": "Criação de Sites", en: "Website Development" },
  "landing.websites.ld.serviceType": { "pt-BR": "Desenvolvimento Web", en: "Web Development" },

  "landing.websites.nav.services": { "pt-BR": "Serviços", en: "Services" },
  "landing.websites.nav.process": { "pt-BR": "Processo", en: "Process" },
  "landing.websites.nav.tech": { "pt-BR": "Stack", en: "Stack" },
  "landing.websites.nav.faq": { "pt-BR": "FAQ", en: "FAQ" },
  "landing.websites.nav.contact": { "pt-BR": "Contato", en: "Contact" },

  "landing.websites.kicker": { "pt-BR": "// Criação de sites", en: "// Website development" },
  "landing.websites.title.part1": { "pt-BR": "Sites e sistemas web", en: "Websites and web systems" },
  "landing.websites.title.part2": { "pt-BR": "que convertem", en: "that convert" },
  "landing.websites.subtitle": {
    "pt-BR": "Do design à implementação: entrego landing pages, sites institucionais e sistemas web com foco em resultados, SEO, acessibilidade e performance.",
    en: "From design to implementation: I build landing pages, institutional websites and web systems focused on results, SEO, accessibility and performance.",
  },
  "landing.websites.cta.primary": { "pt-BR": "Solicitar orçamento", en: "Request a quote" },
  "landing.websites.cta.secondary": { "pt-BR": "Ver exemplos", en: "See examples" },

  "landing.websites.badges.fast": { "pt-BR": "Carregamento rápido", en: "Fast loading" },
  "landing.websites.badges.seo": { "pt-BR": "SEO técnico", en: "Technical SEO" },
  "landing.websites.badges.accessible": { "pt-BR": "Acessível", en: "Accessible" },
  "landing.websites.badges.responsive": { "pt-BR": "Responsivo", en: "Responsive" },

  "landing.websites.services.kicker": { "pt-BR": "// O que você ganha", en: "// What you get" },
  "landing.websites.services.title": { "pt-BR": "Um site pronto para crescer.", en: "A site built to grow." },
  "landing.websites.services.subtitle": {
    "pt-BR": "Entrega com base sólida: boas práticas, microinterações suaves e qualidade técnica para melhorar conversão e manutenção.",
    en: "Shipped with a strong foundation: best practices, smooth microinteractions, and technical quality to improve conversion and maintainability.",
  },

  "landing.websites.features.seo.title": { "pt-BR": "SEO e indexação", en: "SEO & indexing" },
  "landing.websites.features.seo.body": {
    "pt-BR": "Estrutura semântica, metadados e boas práticas para ajudar seu site a ser encontrado.",
    en: "Semantic structure, metadata and best practices to help your site get discovered.",
  },
  "landing.websites.features.performance.title": { "pt-BR": "Performance real", en: "Real performance" },
  "landing.websites.features.performance.body": {
    "pt-BR": "Otimização de assets, carregamento inteligente e foco em experiência rápida no mobile.",
    en: "Asset optimization, smart loading and a fast mobile-first experience.",
  },
  "landing.websites.features.ux.title": { "pt-BR": "UX + acessibilidade", en: "UX + accessibility" },
  "landing.websites.features.ux.body": {
    "pt-BR": "Navegação clara, contrastes, foco visível e componentes que funcionam com teclado e leitor de tela.",
    en: "Clear navigation, contrast, visible focus and components that work with keyboard and screen readers.",
  },
  "landing.websites.features.code.title": { "pt-BR": "Código organizado", en: "Clean code" },
  "landing.websites.features.code.body": {
    "pt-BR": "Padrões consistentes e base preparada para evoluir (novas páginas, integrações e automações).",
    en: "Consistent patterns and a foundation ready to evolve (new pages, integrations and automations).",
  },

  "landing.websites.process.kicker": { "pt-BR": "// Como funciona", en: "// How it works" },
  "landing.websites.process.title": { "pt-BR": "Do briefing ao deploy.", en: "From brief to launch." },
  "landing.websites.process.subtitle": {
    "pt-BR": "Um processo simples e transparente para tirar sua ideia do papel com previsibilidade.",
    en: "A simple and transparent process to ship your project predictably.",
  },
  "landing.websites.process.discovery.title": { "pt-BR": "Briefing e objetivos", en: "Brief & goals" },
  "landing.websites.process.discovery.body": {
    "pt-BR": "Entendimento do negócio, público-alvo e metas (leads, vendas, autoridade).",
    en: "Understand your business, audience and goals (leads, sales, authority).",
  },
  "landing.websites.process.design.title": { "pt-BR": "Estrutura e conteúdo", en: "Structure & content" },
  "landing.websites.process.design.body": {
    "pt-BR": "Arquitetura da informação, copy e layout com foco em clareza e conversão.",
    en: "Information architecture, copy and layout focused on clarity and conversion.",
  },
  "landing.websites.process.build.title": { "pt-BR": "Implementação", en: "Build" },
  "landing.websites.process.build.body": {
    "pt-BR": "Desenvolvimento com componentes reutilizáveis, microinterações e performance.",
    en: "Development with reusable components, microinteractions and performance.",
  },
  "landing.websites.process.launch.title": { "pt-BR": "Publicação e ajustes", en: "Launch & iterate" },
  "landing.websites.process.launch.body": {
    "pt-BR": "Deploy, checklist de SEO técnico e ajustes finais para ficar redondo.",
    en: "Deploy, technical SEO checklist and final refinements.",
  },
  "landing.websites.process.badge1": { "pt-BR": "Checklists e entregáveis claros", en: "Clear checklists & deliverables" },
  "landing.websites.process.badge2": { "pt-BR": "Foco em performance e UX", en: "Performance & UX focus" },
  "landing.websites.process.badge3": { "pt-BR": "SEO técnico desde o início", en: "Technical SEO from day one" },

  "landing.websites.stack.kicker": { "pt-BR": "// Qualidade técnica", en: "// Technical quality" },
  "landing.websites.stack.title": { "pt-BR": "Base moderna e escalável.", en: "Modern, scalable foundation." },
  "landing.websites.stack.subtitle": {
    "pt-BR": "A stack é escolhida conforme a necessidade (site ou sistema). O objetivo é sempre: robustez, velocidade e manutenção simples.",
    en: "The stack is chosen based on your needs (site or system). The goal is always: robustness, speed and easy maintenance.",
  },
  "landing.websites.stack.box1.title": { "pt-BR": "Frontend", en: "Frontend" },
  "landing.websites.stack.box1.body": {
    "pt-BR": "UI responsiva, semântica e acessível, com microinterações suaves e foco visível.",
    en: "Responsive, semantic, accessible UI with smooth microinteractions and visible focus.",
  },
  "landing.websites.stack.box2.title": { "pt-BR": "Backend", en: "Backend" },
  "landing.websites.stack.box2.body": {
    "pt-BR": "APIs, integrações e automações para transformar um site em um sistema web completo.",
    en: "APIs, integrations and automations to turn a website into a complete web system.",
  },
  "landing.websites.stack.box3.title": { "pt-BR": "SEO técnico", en: "Technical SEO" },
  "landing.websites.stack.box3.body": {
    "pt-BR": "Metatags, canonical, sitemap, dados estruturados e boas práticas de indexação.",
    en: "Meta tags, canonical, sitemap, structured data and indexing best practices.",
  },

  "landing.websites.faq.kicker": { "pt-BR": "// Dúvidas comuns", en: "// Common questions" },
  "landing.websites.faq.title": { "pt-BR": "Perguntas frequentes.", en: "FAQ." },
  "landing.websites.faq.subtitle": {
    "pt-BR": "Se quiser, eu respondo por e-mail ou mensagem com base no seu cenário.",
    en: "If you want, I can answer by email or message based on your scenario.",
  },
  "landing.websites.faq.q1.q": { "pt-BR": "Você faz só site ou também sistema web?", en: "Do you build only websites or also web systems?" },
  "landing.websites.faq.q1.a": {
    "pt-BR": "Faço ambos. Pode ser uma landing page enxuta ou um sistema completo com login, áreas restritas e integrações.",
    en: "Both. It can be a lean landing page or a complete system with login, restricted areas and integrations.",
  },
  "landing.websites.faq.q2.q": { "pt-BR": "Quanto tempo leva?", en: "How long does it take?" },
  "landing.websites.faq.q2.a": {
    "pt-BR": "Depende do escopo. Em geral, uma landing page pode sair em poucos dias; sites maiores e sistemas variam conforme conteúdo e integrações.",
    en: "It depends on scope. A landing page can take a few days; larger sites and systems vary with content and integrations.",
  },
  "landing.websites.faq.q3.q": { "pt-BR": "Você cuida de SEO?", en: "Do you handle SEO?" },
  "landing.websites.faq.q3.a": {
    "pt-BR": "Sim — foco em SEO técnico (estrutura, metadados, performance). SEO de conteúdo pode ser combinado conforme necessidade.",
    en: "Yes — focused on technical SEO (structure, metadata, performance). Content SEO can be included if needed.",
  },
  "landing.websites.faq.q4.q": { "pt-BR": "E manutenção depois?", en: "What about maintenance after launch?" },
  "landing.websites.faq.q4.a": {
    "pt-BR": "Posso fazer ajustes pontuais, evoluções e monitorar melhorias contínuas (performance/UX/SEO) conforme combinarmos.",
    en: "I can do ongoing improvements, small changes and continuous optimization (performance/UX/SEO) as agreed.",
  },
  "landing.websites.faq.cta": { "pt-BR": "Falar sobre meu projeto", en: "Talk about my project" },
  "home.seo.title": { "pt-BR": "Ricardo Röhrs — Desenvolvedor Full Stack em Porto Alegre", en: "Ricardo Röhrs - Full Stack Developer | Portfolio" },
  "home.seo.description": { "pt-BR": "Portfólio de Ricardo Röhrs, Desenvolvedor Full Stack em Porto Alegre, RS. Experiência com Laravel, Vue.js, Node.js e desenvolvimento web moderno.", en: "Full Stack Developer portfolio. Experience with web applications, APIs, and modern technologies." },
  "home.seo.ogTitle": { "pt-BR": "Ricardo Röhrs — Desenvolvedor Full Stack em Porto Alegre", en: "Ricardo Röhrs | Full Stack Developer" },
  "home.seo.ogDescription": { "pt-BR": "Portfólio de Ricardo Röhrs. Projetos, habilidades e contato. Experiência com Laravel, Vue.js e Node.js.", en: "Portfolio and services. Full Stack Developer with focus on performance, SEO and accessibility." },
  "home.seo.keywords": { "pt-BR": "desenvolvedor full stack, desenvolvedor porto alegre, desenvolvedor web, react, vue.js, laravel, node.js, typescript, frontend, backend, api rest, javascript, projetos web", en: "full stack developer, web developer, react, vue.js, laravel, node.js, typescript, frontend, backend, api rest, javascript, web projects" },
};

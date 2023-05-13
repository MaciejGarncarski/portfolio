export const languages = {
  en: 'English',
  pl: 'Polski'
} as const;

export const defaultLang = 'pl';

const description = {
  pl: {
    'home.description':
      'Entuzjasta tworzenia aplikacji, stron i wielu innych fajnych rzeczy związanych z internetem.'
  },
  en: {
    'home.description':
      'Enthusiast of creating applications, websites and other cool things related to the internet.'
  }
};

const navUi = {
  en: {
    'nav.home': 'About',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    'nav.home.route': '/en/',
    'nav.projects.route': '/en/projects',
    'nav.contact.route': '/en/contact'
  },
  pl: {
    'nav.home': 'O mnie',
    'nav.projects': 'Projekty',
    'nav.contact': 'Kontakt',
    'nav.home.route': '/',
    'nav.projects.route': '/projekty',
    'nav.contact.route': '/kontakt'
  }
};

export const ui = {
  en: {
    ...navUi.en,
    ...description.en,
    'home.tech.heading': 'My tech stack',
    'projects.heading': 'My projects',
    'not-found.text': 'Page not found.',
    'not-found.anchor': 'Go back to homepage'
  },
  pl: {
    ...navUi.pl,
    ...description.pl,
    'home.tech.heading': 'Narzędzia jakich używam',
    'projects.heading': 'Moje projekty',
    'not-found.text': 'Nie znaleziono strony.',
    'not-found.anchor': 'Wróć do strony głównej'
  }
} as const;

export const homeRoute = {
  pl: '/',
  en: '/en/'
};

export const projectsRoute = {
  pl: '/projekty',
  en: '/en/projects'
};

export const contactRoute = {
  pl: '/kontakt',
  en: '/en/contact'
};

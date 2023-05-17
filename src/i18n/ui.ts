import { projectsUi } from '@components/pages/Projects/Projects.ui';

import { navUi } from './nav.ui';

export const languages = {
  en: 'English',
  pl: 'Polski'
} as const;

export const defaultLang = 'pl';

export const description = {
  pl: {
    'home.description':
      'Entuzjasta tworzenia aplikacji, stron i wielu innych fajnych rzeczy związanych z internetem. Stworzę dla Ciebie profesjonalną i błyskawicznie szybką stronę internetową!'
  },
  en: {
    'home.description':
      'Enthusiast of creating applications, websites and other cool things related to the internet. I will create professionall and lightning-fast website for you!'
  }
};

export const ui = {
  en: {
    ...navUi.en,
    ...description.en,
    ...projectsUi.en,
    'home.tech.heading': 'My tech stack',
    'projects.heading': 'My projects',
    'contact.heading': 'Contact',
    'not-found.text': 'Page not found.',
    'not-found.anchor': 'Go back to homepage',
    'contact.phone-number': 'Phone number'
  },
  pl: {
    ...navUi.pl,
    ...description.pl,
    ...projectsUi.pl,
    'home.tech.heading': 'Znam te technologie',
    'projects.heading': 'Moje projekty',
    'contact.heading': 'Kontakt',
    'not-found.text': 'Nie znaleziono strony.',
    'not-found.anchor': 'Wróć do strony głównej',
    'contact.phone-number': 'Numer telefonu'
  }
} as const;

export const homeRoute = {
  pl: '/',
  en: '/en/'
};

export const projectsRoute = {
  pl: '/projekty/',
  en: '/en/projects/'
};

export const contactRoute = {
  pl: '/kontakt/',
  en: '/en/contact/'
};

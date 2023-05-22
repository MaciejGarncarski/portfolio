import { contact } from './translations/contact';
import { home } from './translations/home';
import { nav } from './translations/nav';
import { notFound } from './translations/not-found';
import { projects } from './translations/projects';

export const languages = {
  en: 'English',
  pl: 'Polski'
} as const;

export const defaultLang = 'pl';

export const ui = {
  en: {
    ...nav.en,
    ...projects.en,
    ...home.en,
    ...contact.en,
    ...notFound.en
  },
  pl: {
    ...nav.pl,
    ...projects.pl,
    ...home.pl,
    ...contact.pl,
    ...notFound.pl
  }
} as const;

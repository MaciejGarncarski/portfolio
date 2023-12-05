import { contact } from './translations/contact';
import { footer } from './translations/footer';
import { home } from './translations/home';
import { nav } from './translations/nav';
import { notFound } from './translations/not-found';
import { projects } from './translations/projects';

export const languages = {
  en: 'English',
  pl: 'Polski'
} as const;

export const defaultLang = 'pl';

export const showDefaultLang = false;

export const ui = {
  en: {
    ...nav.en,
    ...footer.en,
    ...projects.en,
    ...home.en,
    ...contact.en,
    ...notFound.en
  },
  pl: {
    ...nav.pl,
    ...footer.pl,
    ...projects.pl,
    ...home.pl,
    ...contact.pl,
    ...notFound.pl
  }
} as const;

export const routes: Record<'pl' | 'en', Record<string, string>> = {
  pl: {
    projects: 'projects',
    contact: 'contact'
  },
  en: {
    projects: 'projects',
    contact: 'contact'
  }
};

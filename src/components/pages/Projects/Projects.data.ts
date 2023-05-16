import { useTranslations } from 'src/i18n/utils';

export const getProjectsData = (lang: 'pl' | 'en') => {
  const t = useTranslations(lang);

  const projects = [
    {
      title: 'PhotoApp',
      description: t('projects.photoapp'),
      screenshot: '/screenshots/photoapp.png',
      repo: 'https://github.com/MaciejGarncarski/photo-app',
      live: 'https://photoapp.maciej-garncarski.pl/',
      tags: ['React', 'Next.js', 'TypeScript', 'Sass']
    },
    {
      title: 'Github Searcher',
      description: t('projects.github-searcher'),
      screenshot: '/screenshots/github-searcher.png',
      repo: 'https://github.com/MaciejGarncarski/github-searcher',
      live: 'https://github-searcher-maciek.vercel.app/',
      tags: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS']
    },
    {
      title: 'Shoe Shop',
      description: t('projects.shoe-shop'),
      screenshot: '/screenshots/shoe-shop.png',
      repo: 'https://github.com/MaciejGarncarski/shoe-shop',
      live: 'https://shoe-shop-omega.vercel.app/',
      tags: ['Typescript', 'Sass', 'HTML']
    },
    {
      title: 'Business Website',
      description: t('projects.business-website'),
      screenshot: '/screenshots/business.png',
      repo: 'https://github.com/MaciejGarncarski/Buisness-Website',
      live: 'https://website-business.netlify.app/',
      tags: ['React', 'TypeScript', 'Framer Motion', 'styled-components']
    }
  ] as const;

  return projects;
};

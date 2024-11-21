export const projects = {
  en: {
    'projects.live': 'Demo',
    'projects.repo': 'Repo',
    'projects.heading': 'My projects',
    'projects.file-server.title': 'File server',
    'projects.file-server':
      'User interface for disk mounted with SSHFS on VPS. This app has simple password user authentication. User sessions are saved to Redis database. Drive is mounted with SSHFS, but all operations rely on Linux, not on SSHFS. I have decided to use this solution, because of 20 times more performance vs. SSHFS. Nginx is used to serve static files from this disk. User is able to create new directories, upload files, preview files (audio, video, code, PDF) and download them.',
    'projects.photoapp':
      'PhotoApp is a social app inspired by Instagram. Users can create posts, like them and add comments to them. There is a chat feature in the app that uses WebSocket for communication. For the frontend I used the Next.js framework, TypeScript, Tanstack Query and TailwindCSS, while for the backend I used Fastify, TypeScript and ImageKit to store images added by users. For database communication, I used PostgreSQL and Prisma. For communication between the frontend and backend, I used openapi-typescript.',
    'projects.github-searcher':
      'Github Searcher is a Next.js app with SSR, which uses REST API from Github to show users and repositories. This app has an accent color feature so you can pick your preferred color from the list.',
    'projects.business-website':
      'Simple landing page with Framer Motion animations. I’ve created it to learn TypeScript, React and styled-components.',
    'projects.shoe-shop':
      'Typescript app, created to learn typescript and understand how much React makes life easier. This app is imitating e-commerce shop, but without checkout & payments yet sadly.'
  },
  pl: {
    'projects.live': 'Demo',
    'projects.repo': 'Repozytorium',
    'projects.heading': 'Moje projekty',
    'projects.file-server.title': 'Serwer plików',
    'projects.file-server':
      'Interfejs użytkownika dla dysku zamontowanego poprzez SSHFS na VPS. Aplikacja posiada proste uwierzytelnianie użytkownika za pomocą hasła. Sesje użytkownika zapisywane są do bazy danych Redis. Dysk jest zamontowany przez SSHFS, ale wszystkie operacje polegają się na systemie Linux, nie po SSHFS. Zdecydowałem się na to rozwiązanie, przez 20-krotny wzrost wydajności w porównaniu do SSHFS. Serwer nginx używany jest do serwowania plików statycznych z tego dysku. Użytkownik może tworzyć nowe katalogi, przesyłać pliki, wyświetlać pliki na stronie (audio, wideo, kod, PDF) oraz je pobierać.',
    'projects.photoapp':
      'PhotoApp to aplikacja społecznościowa inspirowana aplikacją Instagram. Użytkownik może tworzyć posty, polubiać je i dodawać do nich komentarze. W aplikacji dostępny jest chat, który używa WebSocket do komunikacji. Do stworzenia frontendu użyłem frameworka Next.js, TypeScript, Tanstack Query i TailwindCSS, natomiast do backendu użyłem Fastify, TypeScript oraz ImageKit do przechowywania obrazów dodanych przez użytkowników. Do komunikacji z bazą użyłem PostgreSQL i Prisma. Do komunikacji pomiędzy frontendem i backendem użyłem openapi-typescript.',
    'projects.github-searcher':
      'Github Searcher to aplikacja stworzona w Next.js z użyciem technologii SSR, która używa REST API z Github do wyświetlania użytkowników i repozytoriów. Ta aplikacja ma możliwość wyboru koloru wiodącego z listy w aplikacji.',
    'projects.business-website':
      'Prosta strona internetowa, stworzona z użyciem animacji z biblioteki Framer Motion. Zakodowałem tą stronę, ponieważ chciałem nauczyć się TypeScript’a, React’a i biblioteki styled-components.',
    'projects.shoe-shop':
      'Typescriptowa aplikacja stworzona w celu zrozumienia w jaki sposób biblioteka React ułatwia życie programisty. Ta aplikacja imituje sklep internetowy.'
  }
};

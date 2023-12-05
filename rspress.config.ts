// import built-in modules
import * as path from 'path';
// import third-party modules
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Nest',
  description: 'About Nest',
  icon: '/rspress-icon.png',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    hideNavbar: 'auto',
    search: false,
    sidebar: {
      '/': [
        {
          text: 'What is Nest?',
          link: '/index',
        },
        {
          text: 'Intro',
          link: '/intro',
        },
        {
          text: 'INTRODUCTION',
          link: '/introduction',
        },
        {
          text: 'OVERVIEW',
          items: [
            {
              text: 'First steps',
              link: '/overview/first-steps',
            },
          ],
        },
      ],
    },
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/nestjs/nest',
      },
    ],
  },
  markdown: {
    // checkDeadLinks: true,
    highlightLanguages: ['ejs'],
  },
});

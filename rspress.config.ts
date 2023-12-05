// import built-in modules
import * as path from 'path';
// import third-party modules
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'Nest',
  description: 'About Nest',
  icon: '/favicon.ico',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    footer: {
      message: `Copyright © 2020-${new Date().getFullYear()} My Project, Inc. Built with Rspress`,
    },
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
          collapsible: false,
          items: [
            {
              text: 'First steps',
              link: '/overview/first-steps',
            },
            {
              text: 'Controllers',
              link: '/overview/controllers',
            },
            {
              text: 'Providers',
              link: '/overview/providers',
            },
            {
              text: 'Modules',
              link: '/overview/modules',
            },
            {
              text: 'Middleware',
              link: '/overview/middleware',
            },
            {
              text: 'Exception filters',
              link: '/overview/exception-filters',
            },
            {
              text: 'Pipes',
              link: '/overview/pipes',
            },
            {
              text: 'Guards',
              link: '/overview/guards',
            },
            {
              text: 'Interceptors',
              link: '/overview/interceptors',
            },
            {
              text: 'Custom decorators',
              link: '/overview/custom-decorators',
            },
          ],
        },
        {
          text: 'FUNDAMENTALS',
          collapsible: false,
          items: [
            {
              text: 'Custom providers',
              link: '/fundamentals/custom-providers',
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
  },
});

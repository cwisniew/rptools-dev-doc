const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// With JSDoc @type annotations, IDEs can provide config autocompletion
/** @type {import('@docusaurus/types').DocusaurusConfig} */
(module.exports = {
  title: 'My RPTools Developer Ramblings...',
  tagline: 'Hopefully useful for someone',
  url: 'https://rptools-dev-doc.netlify.app/',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'cwisniew', // Usually your GitHub org/user name.
  projectName: 'rptools-dev-doc', // Usually your repo name.

  presets: [
    [
      '@docusaurus/preset-classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [require('mdx-mermaid')],
          // Please change this to your repo.
          editUrl: 'https://github.com/cwisniew/rptools-dev-doc/edit/main/',
        },
        blog: {
          showReadingTime: true,
          remarkPlugins: [require('mdx-mermaid')],
          // Please change this to your repo.
          editUrl:
            'https://github.com/cwisniew/rptools-dev-doc/edit/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'My RPTools Developer ramblings...',
        logo: {
          alt: 'RPTools Logo',
          src: 'img/RPTools_Logo_512.png',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {
            href: 'https://github.com/cwisniew/rptools-dev-doc',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Documentation',
                to: '/docs/intro',
              },
              {
                label: 'End User Wiki',
                to: 'https://wiki.rptools.info',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Discord',
                href: 'https://discord.gg/gevEtpC',
              },
              {
                label: 'Reddit',
                href: 'https://www.reddit.com/r/MapTool/',
              },
              {
                label: 'Forums',
                href: 'https://forums.rptools.net/',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/RPTools',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Craig Wisniewski. Built with Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
});

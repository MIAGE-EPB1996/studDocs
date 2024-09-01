import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "StudDocs MIAGE",
  tagline:
    "Documentation for the MIAGE students of the University Panthéon-Sorbonne Paris 1",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://your-docusaurus-site.example.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "https://github.com/MIAGE-EPB1996", // Usually your GitHub org/user name.
  projectName: "studDocs", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "fr"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/MIAGE-EPB1996/studDocs/blob/master/blog",
        },

        blog: {
          id: "tech-blog",
          blogTitle: "StudDocs Tech Blog",
          blogDescription: "Interessting articles from and for MIAGE students",
          postsPerPage: "ALL",
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          routeBasePath: "tech-blog",
          path: "./blog/tech/",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/MIAGE-EPB1996/studDocs/blob/master/blog",
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
          authorsMapPath: "../authors.yml",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "studDocs",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "right",
          label: "How to use",
        },
        {
          type: "docSidebar",
          sidebarId: "courseSidebar",
          position: "left",
          label: "Courses",
        },
        { to: "/tech-blog", label: "Tech Blog", position: "left" },
        { to: "/mgmt-blog", label: "Management Blog", position: "left" },
        {
          href: "https://github.com/MIAGE-EPB1996",
          label: "GitHub",
          position: "right",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Courses",
              to: "/docs/intro",
            },
          ],
        },
        {
          title: "Community",
          items: [
            /* {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            }, */
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Tech Blog",
              to: "/tech-blog",
            },
            {
              label: "Management Blog",
              to: "/mgmt-blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/MIAGE-EPB1996",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} StudDocs. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
      "@docusaurus/plugin-content-blog",
      {
        id: "mgmt-blog",
        blogTitle: "StudDocs Management Blog",
        blogDescription:
          "Interessting management articles from and for MIAGE students",
        postsPerPage: "ALL",
        showReadingTime: true,
        feedOptions: {
          type: ["rss", "atom"],
          xslt: true,
        },
        routeBasePath: "mgmt-blog",
        // Please change this to your repo.
        // Remove this to remove the "edit this page" links.
        editUrl: "https://github.com/MIAGE-EPB1996/studDocs/blob/master/blog",
        // Useful options to enforce blogging best practices
        onInlineTags: "warn",
        onInlineAuthors: "warn",
        onUntruncatedBlogPosts: "warn",
        path: "./blog/management/",
        authorsMapPath: "../authors.yml",
      },
    ],
  ],
};

export default config;

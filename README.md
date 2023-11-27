# schm00g.github.io

## Table of Contents

- [Demo](#demo)
- [Features](#features)
- [Project structure](#project-structure)
- [Commands](#commands)

## Demo

📌 [https://smcgrath.dev](https://smcgrath.dev)

## Features

✔️ Integration with **Tailwind CSS** ([@astrojs/tailwind](https://docs.astro.build/en/guides/integrations-guide/tailwind/)) supporting **Dark mode**.

✔️ Uses the following integrations:

- @astrojs/mdx
- @astrojs/image
- @astrojs/tailwind - with prettier class sorting plugin
- @astro-icon
- @astro-seo
- @astro-navbar

✔️([@Playwright](https://github.com/microsoft/playwright)) e2e tests are setted up.

🔜 Blog with frontmatter (title, description, author, date, image, tags) and RSS feed, sitemap and robots.txt

🔜 404 error page

## Project Structure

Inside of your Astro project, you'll see the following folders and files:

```
/
├── public/
│   └── favicon.ico
|   ├── hero.png
|   └── ...
├── src/
|   ├── assets/
|   |   ├── images/
|   |   |   └── ...
│   ├── components/
│   │   ├── ui/
│   │   |   ├── BackToTop.astro
|   |   |   └── ...
│   │   ├── About.astro
│   │   ├── Contact.astro
|   |   └── ...
│   ├── content/
│   │   ├── experience/
│   │   │   ├── experience-1.md
│   │   │   ├── experience-1.md
│   │   │   └── ...
│   │   └-- config.ts
│   ├── layouts/
│   │   ├── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   ├── tests/
│   │   ├── index.spec.ts
├── package.json
├── astro.config.mjs
└── ...
```

Astro looks for `.astro`, `.md` or `.mdx` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

`src/components/` is where we put any Astro components and similarly `src/layouts/` for layouts.

Images can be placed in `src/images/`.

Blog and documentation content are created as collections of Markdown or MDX files in `src/content`.

Any static assets, eg. images, can be placed in the `public/` directory.

## Commands

All commands are run from the root of the project, from a terminal:

| Command             | Action                                             |
| :------------------ | :------------------------------------------------- |
| `yarn`              | Installs dependencies                              |
| `yarn dev`          | Starts local dev server at `localhost:3000`        |
| `yarn build`        | Build your production site to `./dist/`            |
| `yarn preview`      | Preview your build locally, before deploying       |
| `yarn astro ...`    | Run CLI commands like `astro add`, `astro preview` |
| `yarn astro --help` | Get help using the Astro CLI                       |
| `yarn test:e2e`     | Run Playwright tests                               |

### How to use Github Pages to host a custom domain:

1. Set up your Github Pages as per [instructions](https://pages.github.com/).
   
2. Purchase your web domain. I chose [Google Domains](https://domains.google.com/).

3. In Google Domains (or whatever provider you used), click on DNS in sidebar and add custom records. Create two seperate records of Type A with TTL 1H. The first record will be for Host name `yourdomain.com` and the second for `www.yourdomain.com`. Add the following in the Data field for both records:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```

4. In your Github Pages repo `<my-domain>.github.io` navigate to `Settings` > `Pages` (in sidebar) > `Custom domain`. Add your domain here.

5. Now wait for the DNS check to complete. This may take some time. Github will issue your site with an SSL cert. This means that I now have a running page on the web with only the need to pay for a domain, no paid hosting, certs etc.

6. Be sure to check `Enforce HTTPS`! 

7. Finally, visit my site [here](https://smcgrath.dev/).

### Site analytics using Umami.

See the live [dashboard](https://umami-production-863f.up.railway.app/share/DM50VHxJ/Blog).

Why [Umami](https://umami.is/)? Well it's private and anonymised meaning no data is shared with third-parties. 

## To Do

```
- fix mobile view []
- move to github project tickets []
- resolve light house scores []
- link to source code [*]
- fix scrolling issue with 3D model []
- fonts https://fontsource.org/ []
- set dark mode by default [*]
- host on github https://docs.astro.build/en/guides/deploy/github/ [*]
- add three js model ascii (nay) to background [*]
- link to view resume in google sheets [*]
- clean up README.md [~]
- favicon [*]
- choose colorway [~]
- read: https://www.blackspike.com/blog/why-we-chose-astro-over-nuxt/
```

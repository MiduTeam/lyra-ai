<div align="center">

<!--
<a href="lyrai.vercel.app">
<img src="./public/img/banner_gh.jpg" />
</a>
-->

<p></p>

<a href="https://lyrai.vercel.app">Explore</a>
<span>&nbsp;&nbsp;❖&nbsp;&nbsp;</span>
<a href="#-getting-started">Getting Started</a>
<span>&nbsp;&nbsp;❖&nbsp;&nbsp;</span>
<a href="#-api-routess">Api Routes</a>

![GitHub stars](https://img.shields.io/github/stars/MiduTeam/lyra-ai)
![GitHub issues](https://img.shields.io/github/issues/MiduTeam/lyra-ai)
![GitHub license](https://img.shields.io/github/license/MiduTeam/lyra-ai)
![GitHub forks](https://img.shields.io/github/forks/MiduTeam/lyra-ai)

</div>

## 👋 Team

- [**@srdrabx**](https://github.com/nachoaldamav) - Nacho Aldama.
- [**@pheralb**](https://github.com/pheralb) - Pablo Hdez.
- [**@afor_digital**](https://github.com/aforina) - Sara Montagud.
- [**@ikurotime**](https://github.com/ikurotime) - David Huertas.
- [**@tmchein**](https://github.com/tmchein) - Juan Rojas.

## 🛠️ Stack

- [**Cohere**](https://cohere.ai/) - Making NLP part of every developer's toolkit.
- [**Next.js 13 with /app folder + Typescript**](https://nextjs.org/) - The React Framework.
- [**Tailwind CSS + clsx**](https://tailwindcss.com/) - A utility-first CSS framework for rapidly building custom designs.
- [**HeadlessUI**](https://headlessui.dev/) - unstyled, fully accessible UI components.
- [**Playwright**](https://playwright.dev/) - Node library to automate Chromium, Firefox and WebKit with a single API.

## 🚀 Getting Started

1. Clone or fork this repository:

```bash
git@github.com:MiduTeam/lyra-ai.git
```

2. Install dependencies with your favorite package manager:

```bash
npm i
# or
yarn install
# or
pnpm install
# or
ultra install
```

3. Create a **.env** file in the root of the project and add the following variables:

```bash
COHERE_KEY=
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm run dev
# or
ultra dev
```

✨ Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📦 Api Routes

- **Check**: `src/pages/api`

| --  | Type   | Url                        | Description             | Params                | Info                                               |
| --- | ------ | -------------------------- | ----------------------- | --------------------- | -------------------------------------------------- |
| ⚙️  | `GET`  | `/api/scrapper/`           | Scrap Amazon website    | `url`                 | 🛠️ Only [encoded](https://www.urlencoder.org/) url |
| ⚙️  | `GET`  | `/api/get-screen/`         | Get screenshot          | `url`                 | -                                                  |
| ⚙️  | `POST` | `/api/get-classification/` | Get classification list | `product`, `category` | -                                                  |

## ⭐ Contributing

<a href="https://github.com/miduteam/lyra-ai/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=miduteam/lyra-ai" />
</a>

<p></p>

## ☁️ Deploy on Vercel

- [https://lyrai.vercel.app/](https://lyrai.vercel.app/).

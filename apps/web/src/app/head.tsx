export default function Head() {
  return (
    <>
      <title>Lyra AI - An open-source app using Next.js 13 & Cohere API</title>
      {/* Metas */}
      <meta content="width=device-width, initial-scale=1" name="viewport" />
      <meta
        name="description"
        content="An open-source app using Next.js 13 & Cohere API. Created by ikurotime, pheralb, aforina, srdrabx & tmchein."
      />
      <meta
        name="keywords"
        content="ai, nextjs, cohere, api, open-source, app, lyra, lyra ai, midu, midu team, ikurotime, pheralb, aforina, srdrabx, tmchein"
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content="lyra-ai" />
      <meta
        property="og:description"
        content="An open-source app using Next.js 13 & Cohere API"
      />
      <meta name="image" property="og:image" content="/lyra-og-banner.png" />
      <meta property="og:image:width" content="1920" />
      <meta property="og:image:height" content="1080" />
      <meta property="og:url" content="https://lyrai.fly.dev" />
      <meta property="og:site_name" content="Lyra AI" />
      <meta
        name="author"
        content="@ikurotime, @afor_digital, @SrDrabx, @pheralb & @TMCheiN"
      />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="Lyra AI" />
      <meta
        name="twitter:description"
        content="An open-source app using Next.js 13 & Cohere API"
      />
      <meta name="twitter:image" content="/lyra-og-banner.png" />
      <meta name="twitter:image:alt" content="Lyra AI Banner" />
      <meta
        name="twitter:creator"
        content="@ikurotime, @afor_digital, @SrDrabx, @pheralb & @TMCheiN"
      />

      {/* Favicons */}
      <link rel="icon" href="/lyra-icon-svg.svg" />
    </>
  );
}

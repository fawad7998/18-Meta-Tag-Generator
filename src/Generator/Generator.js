const tabSpacing = "   ";
const newLine = "\n";

const formatLine = (line) => {
  return `${tabSpacing}${line}${newLine}`;
};
export const generateSocialMetaTags = (metaData) => {
  const { title, description, url, imageUrl } = metaData;
  let socialMetaData = formatLine("");
  socialMetaData += formatLine("<!-- Essential Social Meta Tags -->");
  socialMetaData += formatLine(`<meta property="og:tile" content="${title}"/>`);
  socialMetaData += formatLine(
    `<meta property="og:description" content="${description}"/>`
  );

  socialMetaData += formatLine(
    `<meta property="og:image" content="${imageUrl}"/>`
  );
  socialMetaData += formatLine(`<meta property=""og:url" content="${url}"/>`);
  socialMetaData += formatLine(
    `<meta property= "twittter:card" content="${imageUrl}"`
  );

  socialMetaData += formatLine(
    `<meta property="og:site_name" content="${title}"`
  );

  socialMetaData += formatLine(
    `<meta property="twitter:image:alt" content="${title}"`
  );

  return socialMetaData;
};

export const generateMetaTags = (metaData) => {
  const { title, description, keywords, author, url } = metaData;
  let generateMetaTags = `<head>${newLine}`;

  generateMetaTags += formatLine(`<tile>${title}</tile>`);

  generateMetaTags += formatLine(`
    <meta name="description" content=${description}/>
    `);

  generateMetaTags += formatLine(`<meta name="keywords" content=${keywords}/>`);

  generateMetaTags += formatLine(`<meta name="author" content=${author}/>`);

  generateMetaTags += formatLine(`<link rel="canonical" href=${url}/>`);

  generateMetaTags += formatLine(
    `<meta name="robots" content="index , follow"/>`
  );

  generateMetaTags += generateSocialMetaTags(metaData, generateMetaTags);
  generateMetaTags += "</head>";
  return generateMetaTags;
};

import Head from "next/head";
import { SeoProps } from "./seo.props";
import { SiteIdentify } from "../../constants/site.identify";

const Seo = ({
  children,
  author = SiteIdentify.author,
  metaDescription = SiteIdentify.metaDescription,
  metaKeywords = SiteIdentify.metaKeywords,
  metaTitle,
}: SeoProps) => {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        <title>{metaTitle}</title>
        <meta name="author" content={author} />
        <meta name="keyword" content={metaKeywords} />
        <meta name="description" content={metaDescription} />
      </Head>
      {children}
    </>
  );
};

export default Seo;

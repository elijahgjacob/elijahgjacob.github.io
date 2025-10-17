import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<HomepageMeta>> = memo(({children, title, description}) => {
  const {asPath: pathname} = useRouter();

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta content={description} name="description" />

        {/* several domains list the same content, make sure google knows we mean this one. */}
        <link href={`https://elijahgjacob.github.io${pathname}`} key="canonical" rel="canonical" />

        <link href="/favicon.ico" rel="icon" sizes="any" />
        <link href="/favicon.png" rel="icon" type="image/png" />
        <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="/site.webmanifest" rel="manifest" />

        {/* Open Graph : https://ogp.me/ */}
        <meta content={title} property="og:title" />
        <meta content={description} property="og:description" />
        <meta content={`https://elijahgjacob.github.io${pathname}`} property="og:url" />
        <meta content="website" property="og:type" />
        <meta content="Elijah Jacob" property="og:site_name" />
        <meta content="https://elijahgjacob.github.io/og-image.png" property="og:image" />
        <meta content="1200" property="og:image:width" />
        <meta content="630" property="og:image:height" />
        <meta content="image/png" property="og:image:type" />
        <meta content="summary_large_image" name="twitter:card" />

        {/* Additional meta tags for better social sharing */}
        <meta content="en_US" property="og:locale" />
        <meta content="Elijah Jacob - AI Software Engineer" property="og:title" />
        <meta content="AI-native Software Engineer at Xtillion specializing in transforming large datasets into production-ready systems. UC Berkeley graduate with expertise in machine learning, data engineering, and full-stack development." property="og:description" />

        {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
        <meta content="https://elijahgjacob.github.io/og-image.png" name="twitter:image" />
      </Head>
      {children}
    </>
  );
});

Page.displayName = 'Page';
export default Page;

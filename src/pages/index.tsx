import type { GetStaticPropsContext, NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Header from './components/Header';
import Footer from './components/Footer';
import AvatarEditor from './components/AvatarEditor';
import LandingPage from './components/MainContent'

const URL = `https://notion-avatar.vercel.app/`;

const Home: NextPage = () => {
    const description = "Create stunning minimalist avatars with Notion Faces. Design perfect avatars for your Notion workspace with our easy-to-use customization tools. Download in PNG and SVG formats."
    const title = "Notion Faces | Create Beautiful Minimalist Notion style avatars"
  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="msapplication-TileColor" content="#fffefc" />
        <meta
          name="msapplication-TileImage"
          content="/favicon/ms-icon-144x144.png"
        />
        <meta name="theme-color" content="#fffefc" />
        <meta content={description} name="description" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={title} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={URL} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
      </Head>

      <Header />
      <main className="my-5">
        <AvatarEditor />
        <LandingPage />
      </main>
      <Footer />
    </>
  );
};

export async function getStaticProps({
  locale,
}: GetStaticPropsContext & { locale: string }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, [`common`])),
    },
  };
}

export default Home;

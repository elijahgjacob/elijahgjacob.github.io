import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import AnimatedBackground from '../components/AnimatedBackground';
import FloatingButtons from '../components/FloatingButtons';
import Page from '../components/Layout/Page';
import ScrollProgress from '../components/ScrollProgress';
import SectionIndicator from '../components/SectionIndicator';
import About from '../components/Sections/About';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import Resume from '../components/Sections/Resume';
import {homePageMeta} from '../data/data';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} title={title}>
      <AnimatedBackground />
      <ScrollProgress />
      <FloatingButtons />
      <SectionIndicator />
      <Header />
      <Hero />
      <About />
      <Resume />
      <Footer />
    </Page>
  );
});

export default Home;

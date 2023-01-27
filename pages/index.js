import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import AuthorsSection from '../components/index/AuthorsSection';
import StatsSection from '../components/index/StatsSection';
import SpecialPublicationSection from '../components/index/SpecialPublicationSection';
import CafSection from '../components/index/ClimateAdaptationFrameworkSection';

export default function Home() {

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
        <CafSection />
        <StatsSection />
        <SpecialPublicationSection />
        <AuthorsSection />
    </Layout>
  );
}

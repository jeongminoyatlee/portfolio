import type { NextPage } from 'next';
import Head from 'next/head';
import Header from '../components/Header';
import Landing from '../components/Landing';
import Portfolio1 from '../components/Portfolio1';
import Portfolio2 from '../components/Portfolio2';
import Portfolio3 from '../components/Portfolio3';
import Portfolio4 from '../components/Portfolio4';
import Contact from '../components/Contact';
import Features from '../components/Features';
import Demo from '../components/Demo';
import Pricing from '../components/Pricing';
import Testimonies from '../components/Testimonies';
import Action from '../components/Action';
import Footer from '../components/Footer';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>이정민 | 프론트엔드 개발자 포트폴리오</title>
        <meta content="Example" name="description" />
        <meta property="og:url" content="example.com" />
        <meta property="og:description" content="Example" />
        <meta property="og:title" content="Example" />
        <meta property="og:image" content="" />
        <link rel="shortcut icon" href="/images/logo.png" type="image/png" />
        <link rel="icon" href="/images/logo.png" type="image/png" />
      </Head>
      <div className="h-full leading-normal text-gray-600">
        <div
          className="absolute top-0 left-0 right-0 bg-no-repeat bg-cover shadow-lg -bottom-full brightness-90 filter md:bottom-0 md:bg-center md:brightness-100"
          style={{
            backgroundImage: "url('images/splash.jpeg')",
            zIndex: -1,
          }}
        />
        <Header />
        <Landing />
        <Portfolio1/>
        {/* <Portfolio2/> */}
        <Portfolio3/>
        {/* <Portfolio4/> */}
        <Contact/>
        {/*1*/}
        {/* <Features /> */}
        {/* <Demo /> */}
        {/* <Pricing /> */}
        {/* <Testimonies /> */}
        <Action />
        <Footer />
      </div>
    </>
  );
};

export default Home;

import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
//import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate from '@docusaurus/Translate'
import useBaseUrl from '@docusaurus/useBaseUrl'

import styles from './index.module.css';


//function HomepageHeader() {
//  const {siteConfig} = useDocusaurusContext();
//  return (
//    <header className={clsx('hero hero--primary', styles.heroBanner)}>
//      <div className="container">
//        <h1 className="hero__title">{siteConfig.title}</h1>
//        <p className="hero__subtitle">{siteConfig.tagline}</p>
//        <div className={styles.buttons}>
//          <Link
//            className="button button--secondary button--lg"
//            to="/intro">
//            ابدأ هنا 📖️
//          </Link>
//        </div>
//      </div>
//    </header>
//  );
//}

//export default function Home() {
//  const {siteConfig} = useDocusaurusContext();
//  return (
//    <Layout
//      title={`${siteConfig.title}`}
//      description="Description will go into a meta tag in <head />">
//      <HomepageHeader />
//      <main>
//        <HomepageFeatures />
//      </main>
//    </Layout>
//  );
//}
//
//
//
//
//function Feature({ imgUrl, title, description, reverse }) {
//  return (
//    <div className={clsx('row', styles.feature, reverse && styles.featureReverse)}>
//      <div className="col col--6 text--center">
//        <img className={styles.featureImage} src={useBaseUrl(imgUrl)} alt={title} />
//      </div>
//      <div className={clsx('col col--6', styles.featureContent)}>
//        <div>
//          <h3>{title}</h3>
//          <div>{description}</div>
//        </div>
//      </div>
//    </div>
//  )
//}

function Home() {
  const { siteConfig } = useDocusaurusContext()

  return (
    <Layout title={siteConfig.tagline} description={siteConfig.tagline}>
      <main>
        <div className="hero">
          <div className="container text--center">
            <div className={styles.heroBanner}>

            <h1 className={clsx('hero__title', styles.heroTitle)}>{siteConfig.title}</h1>
            <p className="hero__subtitle">
              <Translate id="siteConfig.tagline">{siteConfig.tagline}</Translate>
            </p>
            </div>
          </div>
        </div>

        <div className="hero-divider" />

        <div className="hero">
          <div className="container text--center">
            <h2 className="hero__subtitle">
              فسئلوا أهل الذكر إن كنتم لا تعلمون
            </h2>
          </div>
        </div>

        <div className="hero-divider" />



      </main>
    </Layout>
  )
}

export default Home
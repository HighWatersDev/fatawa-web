import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
//import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Translate from '@docusaurus/Translate'
import useBaseUrl from '@docusaurus/useBaseUrl'
import ThemedImage from '@theme/ThemedImage';

import styles from './index.module.css';


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
            <ThemedImage
              sources={{
                light: useBaseUrl('img/annahl.png'),
                dark: useBaseUrl('img/annahl-dark.png'),
              }}
            />
            </h2>
          </div>
        </div>

        <div className="hero-divider" />



      </main>
    </Layout>
  )
}

export default Home
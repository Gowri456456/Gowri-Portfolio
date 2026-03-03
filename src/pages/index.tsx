import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            View My Projects 🚀
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Gowri K Portfolio"
      description="Personal Portfolio of Gowri K - Full Stack Developer">
      <HomepageHeader />
      <main style={{padding: '40px 0'}}>
        <div className="container">
          <div className="row">
            <div className="col col--6">
              <Heading as="h2">Executive Summary</Heading>
              <p>
                To work in a software company where I can use my technical skills and learn new technologies. 
                Focused on building scalable applications and exploring AI.
              </p>
            </div>
            <div className="col col--6">
              <Heading as="h2">Technical Skills</Heading>
              <ul>
                <li><strong>Languages:</strong> C, Java, SQL, JavaScript</li>
                <li><strong>Frameworks:</strong> React.js, Node.js, Express.js</li>
                <li><strong>Interest:</strong> Full Stack Development, IoT, UI/UX</li>
              </ul>
            </div>
          </div>
          <hr style={{margin: '30px 0'}} />
          <div className="row">
            <div className="col col--12">
              <Heading as="h2">Education</Heading>
              <p><strong>BE CSE</strong> - Jai Shriram Engineering College (2023-2027)</p>
              <p><strong>HSC (81%) & SSLC (Pass)</strong> - PVKN HR.SEC School</p>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

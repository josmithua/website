import Head from 'next/head';
import Layout from '../components/Layout';
import styles from './styles/Home.module.css';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex h-screen w-screen justify-center items-center bg-white dark:bg-black">
        <AnimatedLogo />
      </div>
    </Layout>
  );
}

function AnimatedLogo() {
  return (
    <>
      <div className="flex justify-center items-center text-5xl h-32 text-black dark:text-white">
        <span className={styles.jos + ' inline-block font-mono'}>jos</span>
        <span className={styles.smith + ' inline-block font-mono'}>smith</span>
        <span className={styles.hua + ' inline-block font-mono'}>hua</span>
      </div>
    </>
  );
}

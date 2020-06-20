import Head from 'next/head';
import Layout from '../components/Layout';

export function AnimatedLogo() {
  return (
    <>
      <div className="flex justify-center items-center text-5xl h-32">
        <span className="inline-block jos font-mono">jos</span>
        <span className="inline-block smith font-mono">smith</span>
        <span className="inline-block hua font-mono">hua</span>
      </div>
      <style jsx>{`
        @keyframes smithDown {
          0%,
          30% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            text-transform: lowercase;
          }
          70%,
          100% {
            text-transform: capitalize;
            transform: translate3d(0, 0.5em, 0);
          }
        }

        @keyframes josRight {
          0%,
          30% {
            transform: translate3d(1ch, 0, 0);
          }
          50% {
            text-transform: lowercase;
          }
          70%,
          100% {
            transform: translate3d(2.5ch, -0.5em, 0);
            text-transform: capitalize;
          }
        }

        @keyframes huaLeft {
          0%,
          30% {
            transform: translate3d(-1ch, 0, 0);
          }
          70%,
          100% {
            transform: translate3d(-2.5ch, -0.5em, 0);
          }
        }

        .jos {
          :transform: translate3d(1ch, 0, 0);
          animation: josRight 3s ease-in-out 0s infinite alternate;
          animation-fill-mode: forwards;
        }

        .hua {
          transform: translate3d(-1ch, 0, 0);
          animation: huaLeft 3s ease-in-out 0s infinite alternate;
          animation-fill-mode: forwards;
        }

        .smith {
          animation: smithDown 3s ease-in-out 0s infinite alternate;
          animation-fill-mode: forwards;
        }

        code {
          font-family: Menlo, Monaco, Lucida Console, Courier New, monospace;
        }
      `}</style>
    </>
  );
}

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Home</title>
      </Head>
      <div className="flex h-screen w-screen justify-center items-center">
        <AnimatedLogo />
      </div>
    </Layout>
  );
}

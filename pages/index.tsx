import Head from 'next/head';

export function AnimatedLogo(props: { size: number }) {
  return (
    <>
      <div className="flex justify-center items-center text-6xl">
        <div className="flex">
          <div className="jos">
            <code>jos</code>
          </div>
          <div className="smith">
            <code>smith</code>
          </div>
          <div className="hua">
            <code>hua</code>
          </div>
        </div>
      </div>
      <style jsx>{`
        @keyframes smithDown {
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
    <>
      <Head>
        <title>Joshua Smith</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex h-screen justify-center items-center">
        <AnimatedLogo size={3} />
      </div>
    </>
  );
}

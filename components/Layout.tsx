import Head from 'next/head';
import Link from 'next/link';

const siteTitle = 'Joshua Smith';
const siteDescription = 'Personal website of Joshua Smith';

type Props = React.PropsWithChildren<{ home?: boolean }>;

export default function Layout({ children, home = false }: Props) {
  return (
    <div className="bg-white dark:bg-black">
      <Head>
        <meta name="description" content={siteDescription} />
        <meta name="og:title" content={siteTitle} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>{children}</main>
      <BottomNav />
    </div>
  );
}

function BottomNav() {
  const linkClasses =
    'border-2 border-black dark:border-white flex flex-1 p-2 justify-center md:p-4 md:text-xl m-2';
  return (
    <div className="text-black dark:text-white fixed overflow-hidden bottom-0 w-full flex justify-around">
      <Link href="/">
        <a className={linkClasses}>Home</a>
      </Link>
      <Link href="/contact">
        <a className={linkClasses}>Contact</a>
      </Link>
    </div>
  );
}

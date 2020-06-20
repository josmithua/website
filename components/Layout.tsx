import Head from 'next/head';
import Link from 'next/link';

const siteTitle = 'Joshua Smith';
const siteDescription = 'Personal website of Joshua Smith';

const Layout: React.FC<{ children: React.ReactNode; home?: boolean }> = ({
  children,
  home = false,
}) => {
  return (
    <div>
      <Head>
        <meta name="description" content={siteDescription} />
        <meta name="og:title" content={siteTitle} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>{children}</main>
      <BottomNav />
    </div>
  );
};

const BottomNav: React.FC = () => {
  const linkClasses = 'flex flex-1 py-2 px-2 justify-center md:p-4 md:text-xl';
  return (
    <div className="bg-black text-white fixed overflow-hidden bottom-0 w-full flex justify-around divide-x divide-white">
      <Link href="/">
        <a className={linkClasses}>Home</a>
      </Link>
      <Link href="/contact">
        <a className={linkClasses}>Contact</a>
      </Link>
    </div>
  );
};

export default Layout;

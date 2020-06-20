import Head from 'next/head';

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
    </div>
  );
};

export default Layout;

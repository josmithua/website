import { MetaFunction } from '@remix-run/node';
import AnimatedJosmithua, {
  links as josmithuaLinks,
} from '~/components/AnimatedJosmithua';

export function links() {
  return [...josmithuaLinks()];
}

export const meta: MetaFunction = () => {
  return {
    title: 'josmithua.dev',
    description:
      "I'm a software developer and I love to delete code. My passion and goal is to help people be healthier, happier, and more efficient by designing simple software solutions.",
  };
};

export default function Index() {
  const cnProjectDiv = 'flex-1 p-4 rounded-lg bg-[#2d536e]';
  const cnProjectLink = 'underline underline-offset-1 font-semibold';
  const cnProjectDescriptionDiv = 'leading-6 mt-1';
  return (
    <div className="flex flex-col text-white h-screen min-h-screen">
      <div className="bg-[#0B1320] p-4 flex flex-col justify-evenly items-center flex-grow">
        <img
          src="/me.webp"
          alt="Head shot of yours truly"
          width={240}
          height={240}
          className="rounded-lg"
        />
        <div className="text-3xl my-4 flex flex-col items-center sm:block">
          <span>👋 Hi, I'm</span> <AnimatedJosmithua />
        </div>
        <p className="text-justify text-2xl md:w-3/4">
          I'm a software developer and I love to delete code. My passion and
          goal is to help people be healthier, happier, and more efficient by
          designing simple software solutions.
        </p>
      </div>
      <div className="bg-[#1d3850] p-4 flex flex-col justify-evenly items-center flex-grow">
        <div className="md:w-3/4 flex flex-col gap-4">
          <h2 className="text-xl">A few of my (public) projects:</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-8 text-lg">
            <div className={cnProjectDiv}>
              <a
                href="https://raycast.com/josmithua/bible"
                className={cnProjectLink}
              >
                Bible Raycast Extension
              </a>
              <div className={cnProjectDescriptionDiv}>
                A extension to search for and display Bible passages in Raycast
              </div>
            </div>
            <div className={cnProjectDiv}>
              <a
                href="https://github.com/stashenergy/react-native-msal"
                className={cnProjectLink}
              >
                react-native-msal
              </a>
              <div className={cnProjectDescriptionDiv}>
                React Native wrapper for MSAL
              </div>
            </div>
            <div className={cnProjectDiv}>
              <a href="https://sing.joshuasmith.ca" className={cnProjectLink}>
                sing.joshuasmith.ca
              </a>
              <div className={cnProjectDescriptionDiv}>
                Fulfilling a need for a portable song book for spontaneous
                sing-songs
              </div>
            </div>
            <div className={cnProjectDiv}>
              <a href="https://mha.joshuasmith.ca" className={cnProjectLink}>
                mha.joshuasmith.ca
              </a>
              <div className={cnProjectDescriptionDiv}>
                Simple directory of YouTube lyric videos that our church uses
                for worship. Editable via a CMS.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#152537] p-4 flex flex-col justify-evenly">
        <div className="flex justify-evenly">
          <div className="flex items-center gap-2">
            <a
              href="https://github.com/josmithua"
              aria-label="Link to my twitter profile"
            >
              <img
                src="/github_icon.svg"
                alt="Twitter logo"
                className="w-7 h-7"
              />
            </a>
          </div>
          <div className="flex items-center gap-2">
            <a
              href="https://twitter.com/josmithua"
              aria-label="Link to my twitter profile"
            >
              <img
                src="/twitter_icon.svg"
                alt="Twitter logo"
                className="w-7 h-7"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

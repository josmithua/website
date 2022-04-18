import AnimatedJosmithua, {
  links as josmithuaLinks,
} from '~/components/AnimatedJosmithua';

export function links() {
  return [...josmithuaLinks()];
}

export default function Index() {
  return (
    <div className="flex flex-col text-white h-screen min-h-screen bg-red-200">
      <div className="bg-[#0B1320] p-4 flex flex-col justify-evenly items-center flex-grow">
        <img src="/me.jpeg" alt="Head shot" width="240" className="rounded" />
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
          <div className="flex flex-col lg:flex-row gap-4 lg:gap-8 text-lg">
            <div className="flex-1 p-4 rounded-xl bg-[#2d536e]">
              <a
                href="https://sing.joshuasmith.ca"
                className="underline underline-offset-1 font-semibold"
              >
                sing.joshuasmith.ca
              </a>
              <div className="leading-6 mt-1">
                Fulfilling a need for a portable song book for spontaneous
                sing-songs
              </div>
            </div>
            <div className="flex-1 p-4 rounded-xl bg-[#2d536e]">
              <a
                href="https://mha.joshuasmith.ca"
                className="underline underline-offset-1 font-semibold"
              >
                mha.joshuasmith.ca
              </a>
              <div className="leading-6 mt-1">
                Simple directory of YouTube lyric videos that our church uses
                for worship. Editable via a CMS.
              </div>
            </div>
            <div className="flex-1 p-4 rounded-xl bg-[#2d536e]">
              <a
                href="https://github.com/stashenergy/react-native-msal"
                className="underline underline-offset-1 font-semibold"
              >
                react-native-msal
              </a>
              <div className="leading-6 mt-1">
                React Native wrapper for MSAL
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

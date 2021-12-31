import AnimatedJosmithua, {
  links as josmithuaLinks,
} from "~/components/AnimatedJosmithua";

export function links() {
  return [...josmithuaLinks()];
}

export default function Index() {
  return (
    <div className="flex flex-col text-white h-screen">
      <div className="bg-black flex-grow p-4 flex flex-col justify-around items-center md:px-48">
        <img src="/me.jpeg" alt="Head shot" width="240" className="rounded" />
        <div className="text-3xl mt-1 flex flex-col items-center sm:block">
          <span>👋 Hi, I'm</span> <AnimatedJosmithua />.
        </div>
        <p className="text-justify text-lg">
          I'm a software developer and I love to delete code. My passion and
          goal is to help people be healthier, happier, and more efficient by
          designing simple software solutions.
        </p>
      </div>
      <div className="bg-black/95 h-2/6 p-4 flex flex-col justify-evenly md:px-48">
        <h2 className="text-xl">A few of my (public) projects:</h2>
        <div className="flex justify-evenly flex-col lg:flex-row">
          <div className="p-1">
            <a
              href="https://sing.joshuasmith.ca"
              className="underline underline-offset-1"
            >
              sing.joshuasmith.ca
            </a>
            <div className="text-sm">
              Fulfilling a need for a portable song book for spontaneous
              sing-songs
            </div>
          </div>
          <div className="p-1">
            <a
              href="https://mha.joshuasmith.ca"
              className="underline underline-offset-1"
            >
              mha.joshuasmith.ca
            </a>
            <div className="text-sm">
              Simple directory of YouTube lyric videos that our church uses for
              worship. Editable via a CMS
            </div>
          </div>
          <div className="p-1">
            <a
              href="https://github.com/stashenergy/react-native-msal"
              className="underline underline-offset-1"
            >
              react-native-msal
            </a>
            <div className="text-sm">React Native wrapper for MSAL</div>
          </div>
        </div>
      </div>
      <div className="bg-black/90 p-3 flex flex-col justify-evenly md:px-48">
        <div className="flex justify-evenly">
          <div className="flex items-center">
            <span className="text-2xl mr-2">👨‍💻</span>
            <a
              href="https://github.com/josmithua"
              className="underline underline-offset-1"
            >
              GitHub
            </a>
          </div>
          <div className="flex items-center">
            <span className="text-2xl mr-2">📧</span>
            <a href="/contact" className="underline underline-offset-1">
              Email
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

import styles from "./josmithua.css";

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function AnimatedJosmithua() {
  return (
    <div className="px-6 py-2 inline bg-white/10 rounded">
      <span className={"jos inline-block font-mono translate-x-[1ch]"}>
        jos
      </span>
      <span className={"smith inline-block font-mono"}>smith</span>
      <span className={"hua inline-block font-mono translate-x-[-1ch]"}>
        hua
      </span>
    </div>
  );
}

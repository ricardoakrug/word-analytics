/* eslint-disable react/prop-types */
import StatNumber from "./stats/StatNumber";
import { FACEBOOK_MAX_LENGTH, INSTAGRAM_MAX_LENGTH } from "../../lib/constants";

export default function Stats({ text }) {
  const words = text.split(" ").filter((word) => word !== "").length;
  const characters = text.length;
  const instagram = INSTAGRAM_MAX_LENGTH - characters;
  const facebook = FACEBOOK_MAX_LENGTH - characters;

  return (
    <section className="stats">
      <StatNumber title="Words" number={words} />
      <StatNumber title="Characters" number={characters} />
      <StatNumber title="Instagram" number={instagram} />
      <StatNumber title="Facebook" number={facebook} />
    </section>
  );
}

/* eslint-disable react/prop-types */

export default function StatNumber({ title, number }) {
  return (
    <>
      <section className="stat">
        <span
          className={`stat__number ${number < 0 ? "stat__number--limit" : ""}`}
        >
          {number}
        </span>
        <h2 className="second-heading">{title}</h2>
      </section>
    </>
  );
}

import Image from "next/image";

import icon from "./icon.png";

const NAME = "Nemanja Maslaković";
const EMAIL = "neca2609@gmail.com";
const PLAY_URL = "https://play.google.com/store/apps/details?id=com.infinitemggames.squarethat";
const PRIVACY_URL = "https://policy-jade-sigma.vercel.app/";

export default function Home() {
  return (
    <main className="page">
      <header>
        <h1>{NAME}</h1>
        <p className="intro">Independent game developer. I make mobile games.</p>
      </header>

      <section aria-labelledby="games">
        <h2 id="games">Games</h2>
        <article className="game">
          <Image src={icon} alt="Square That app icon" width={72} height={72} className="appIcon" priority />
          <div>
            <h3>Square That</h3>
            <p>
              A block puzzle for Android. Make 3×3 squares, set off chain reactions and survive on a
              diamond-shaped board.
            </p>
            <p className="links">
              <a href={PLAY_URL}>Google Play</a>
              <span aria-hidden="true"> · </span>
              <a href={PRIVACY_URL}>Privacy policy</a>
            </p>
          </div>
        </article>
      </section>

      <section aria-labelledby="contact">
        <h2 id="contact">Contact</h2>
        <p>
          Write to me at <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
        </p>
      </section>

      <footer className="footer">© 2026 {NAME}</footer>
    </main>
  );
}

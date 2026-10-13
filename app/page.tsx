import Image from "next/image";

import icon from "./icon.png";

const NAME = "Nemanja Maslaković";
const EMAIL = "neca2609@gmail.com";
const PLAY_URL = "https://play.google.com/store/apps/details?id=com.infinitemggames.squarethat";
const PRIVACY_URL = "https://policy-jade-sigma.vercel.app/";

export default function Home() {
  return (
    <main className="page">
      <header className="hero">
        <p className="eyebrow">Independent game developer</p>
        <h1>{NAME}</h1>
        <p className="intro">I make mobile games.</p>
      </header>

      <section className="card game" aria-labelledby="square-that">
        <Image src={icon} alt="Square That app icon" width={112} height={112} className="appIcon" priority />
        <div>
          <h2 id="square-that" className="logo">
            SQUARE <span className="gradient">THAT</span>
          </h2>
          <p>
            A neon block puzzle for Android. Make 3×3 squares, set off chain reactions and survive on a
            diamond-shaped board.
          </p>
          <p className="links">
            <a href={PLAY_URL}>Google Play</a>
            <span aria-hidden="true"> · </span>
            <a href={PRIVACY_URL}>Privacy policy</a>
          </p>
        </div>
      </section>

      <section className="card contact" aria-labelledby="contact">
        <h2 id="contact">Contact</h2>
        <p>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
      </section>

      <footer className="footer">© 2026 {NAME}</footer>
    </main>
  );
}

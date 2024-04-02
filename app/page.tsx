import Image from "next/image";
import Head from 'next/head';
import "./globals.css";
import "./styles/home.css";
import AskButton from './components/askmore';
export default function Home() {
  return (
    <div className="flex flex-col flex-wrap ">
      <main className="flex min-h-screen flex-col items-center justify-around px-20 pt-10 ">
        <div className="place-self-start pt-20 ml-20 h-0 opacity-75">
          <AskButton />
        </div>
        <section className="landing-top-page">
          <div className="parent-container-david">
            <div className="container-david">
              <div className="container-uppertxt">
                <span className="uppertxt-david">Welcome to</span>
                <p className="glitch">
                  <span aria-hidden="true">David Dubuc</span>
                  <span aria-hidden="true">David Dubuc</span>
                  <span aria-hidden="true">David Dubuc</span>
                </p>
                <p className="container-bottomtxt">
                  <span className="bottomtxt-david">Portfolio</span>
                </p>
              </div>
            </div>
          </div>
        </section>
      <div className="Banner">
      </div>
      </main>
    </div>
  );
}

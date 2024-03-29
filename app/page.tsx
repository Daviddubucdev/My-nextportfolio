import Image from "next/image";
import Head from 'next/head';
import "./globals.css";
import BannerJS from './components/bgmiddlepage';
import AskButton from './components/askmore';
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="landing-top-page">
        <div className="place-self-start p-10 ">
          <AskButton />
        </div>
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
      <div className="size-full m-0 px-10 mx-10">
        <BannerJS />
      </div>
    </main>
  );
}

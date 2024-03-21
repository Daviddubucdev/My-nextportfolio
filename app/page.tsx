import Image from "next/image";
import Head from 'next/head';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
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
    </main>
  );
}

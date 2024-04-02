import Image from "next/image";
import Head from 'next/head';
import Gmap from "@/app/components/addressmap";
export default function about() {
    return (
        <div className="flex flex-col w-screen h-screen my-44 ">
            <main className="flex max-h-screen flex-col items-center justify-around px-10 pt-10 ">
                <h1 className="text-blue-400 text-3xl" >About David Dubuc</h1>
                <section className="border-blue-300">

                </section>
                <div className="place-self-end pt-20 mr-20 h-0 opacity-75">
                    <Gmap />
                </div>
            </main>
        </div>
    );
}

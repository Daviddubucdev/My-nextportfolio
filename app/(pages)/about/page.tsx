import Image from "next/image";
import Head from 'next/head';
import Map from "@/app/components/map";
export default function about() {
    return (
        <div className="flex flex-col w-screen h-screen my-44 ">
            <main className="flex max-h-screen flex-col items-center justify-around px-10 pt-10 ">
                <h1 className="text-blue-400 text-3xl" >who are David Dubuc</h1>
                <section className="">
                </section>
                <div className="place-self-start pt-20 ml-20 h-0 opacity-75">
                    <Map address="Taschereau Québec J0Z 3N0" />
                </div>
            </main>
        </div>
    );
}

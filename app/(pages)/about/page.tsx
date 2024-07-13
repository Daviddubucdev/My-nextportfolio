import Image from "next/image";
import Head from 'next/head';
import "@/app/styles/about.css";
import Gmap from "@/app/components/addressmap";
export default function about() {
    return (
        <div className="flex flex-col w-screen h-screen my-44 ">
            <main className="flex max-h-screen flex-col items-center justify-around px-10 pt-10 ">
                <h1 className="text-blue-400 text-3xl" >About David Dubuc</h1>
                <section className="border-blue-300">
                    <div className="contact-parent-box">
                        <article className="contact-box" >
                            <h2>Experience</h2>
                            <p>I have been working in the web development industry for several years, honing my skills in HTML, CSS, and JavaScript. I have a keen eye for design and a strong understanding of front-end frameworks like React and Angular.</p>
                        </article>
                        <article className="contact-box">
                            <h2>Contact</h2>
                            <p>If you'd like to get in touch or discuss a project, feel free to reach out to me at dubuc.dev@gmail.com. I'm always excited to collaborate and bring ideas to fruition.</p>
                        </article>
                    </div>
                </section>
                <div className="gmap-container">
                    <Gmap />
                </div>
            </main>
        </div>
    );
}

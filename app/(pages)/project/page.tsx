import Image from "next/image";
import Head from 'next/head';

export default function project() {
    return (
        <div className="flex flex-col w-screen h-screen my-44 ">
            <main className="flex min-h-screen flex-col items-center justify-around px-10 pt-10 ">
                <h1 className="bg-gray-800 mb-24 text-3xl font-mono" >Project where i spend more time</h1>
                <section className="grid grid-cols-3 size-fit  ">
                    <div className="bg-gray-800 p-4 rounded-lg mx-5 size-fit">
                        <article className="text-pretty">
                            <b className="flex align-start pb-2" > This Portfolio Website in Nextjs </b>
                            <span className="flex align-start pb-2">Why this portfolio</span>
                            <p className=" flex text-white bg-gray-600 p-3 rounded-lg  font-light  ">
                                Creating a portfolio is important for me as it marks the beginning of my journey in the web development world! 🌐✨<br />
                                It allows me to showcase my skills, projects, and achievements, which can help me attract potential clients or employers.... 📚💼<br />
                                Additionally, having a portfolio demonstrates my commitment and passion for web development, and it serves as a visual representation of my progress and growth. 🚀📈<br />
                                With a well-designed portfolio, I can make a memorable impression and stand out from other developers in the industry. 💫👩‍💻
                            </p>
                            <a href="https://github.com/Daviddubucdev/My-nextportfolio.git" >Github</a>
                        </article>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg mx-5 size-fit">
                        <article>
                            <b className="flex align-start pb-2" >JenkaFinder</b><em>On Progress</em>
                            <span className="flex align-start pb-2">Just for learning the backend</span>
                            <p className=" flex text-wrap text-white bg-gray-600 p-3 rounded-lg  font-light  ">
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non explicabo deserunt ipsam animi hic? Vel hic, quia at culpa voluptatem sunt officia aliquid veritatis illum similique possimus est voluptas! Reiciendis.
                                Placeat quo error delectus dolorum consequatur culpa assumenda hic. Quae voluptas magni quas recusandae accusamus esse harum ipsum deserunt quibusdam incidunt. Nam quam, hic praesentium ea aspernatur quibusdam? Vitae, sint.
                            </p>
                        </article>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg mx-5 size-fit ">
                        <article>
                            <b className="flex align-start pb-2" ></b>
                            <span className="flex align-start pb-2"></span>
                            <p className=" flex  text-white bg-gray-600 p-3 rounded-lg  font-light ">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima consequuntur explicabo quo, optio a expedita ad nisi velit? Ad eum eligendi, amet veritatis voluptates explicabo fugit molestiae temporibus provident harum?
                                Tempora voluptate animi, quod, ipsam, voluptates excepturi assumenda laudantium doloremque porro nobis provident nesciunt dolor. Suscipit iste nisi quaerat? Modi accusantium eius odit atque fugit corporis enim aliquid! Corrupti, omnis? </p>
                        </article>
                    </div>
                </section>
                <section className="container-featues"></section>
            </main>
            <div className="size-full  h-auto mx-20 opacity-75">
            </div>
        </div>
    );
}

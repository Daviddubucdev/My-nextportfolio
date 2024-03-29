import { FaGithub, FaLinkedin, FaInstagram, FaFacebook } from "react-icons/fa";
import Head from "next/head";
export default function AsideIcon() {
    return (
        <>
            <style>{`
                .sidebar {
                    position: fixed;
                    top: 0;
                    bottom: 0;
                    left: 0;
                    max-width:fit-content;
                    height: 15rem;
                    background: transparent; /* Fond transparent */
                    z-index: 1000; /* Assure que la barre latérale reste au premier plan */
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    margin:20% 0% 0% 0%;
                    padding: 10rem 1rem 0rem 1rem;
                }

                .social-icons {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem; /* Espace entre les icônes */
                }

                .icon {
                    display: flex;
                    width: 2.5rem;
                    height: 2.5rem;
                    border-radius: 50%;
                    background: -moz-linear-gradient(top, #e72c83 0%, #a742c6 100%);
                    background: -webkit-linear-gradient(top, #e72c83 0%, #a742c6 100%);
                    background: linear-gradient(to bottom, #e72c83 0%, #a742c6 100%);
                    opacity: 0.8;
                    justify-content: center;
                    align-items: center;
                }

                .icon:hover {
                    opacity: 1;
                    filter: brightness(2.5);
                    rotate: 360deg;
                    transition: 0.5s;
                }
            `}</style>

            <aside className="sidebar">
                <div className="social-icons">
                    <a className="icon" href="https://github.com/your-github-profile">
                        <FaGithub />
                    </a>
                    <a className="icon" href="https://www.linkedin.com/in/your-linkedin-profile">
                        <FaLinkedin />
                    </a>
                    <a className="icon" href="https://www.instagram.com/your-instagram-profile">
                        <FaInstagram />
                    </a>
                    <a className="icon" href="https://www.facebook.com/your-facebook-profile">
                        <FaFacebook />
                    </a>
                </div>
            </aside>
        </>
    );
}
import Head from "next/head";
import "../globals.css";
export default function Footer() {
    return (
        <>
            <style>
                {`
                .containerfooter {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    border: 2px solid white;
                    padding: 1% 0% 0% 0%;
                    margin: 5% 0% 0% 0%;
                    color: rgb(var(--foreground-rgb));
                    background: linear-gradient(
                        to bottom,
                        transparent,
                        rgb(var(--background-end-rgb))
                      )
                      rgb(var(--background-start-rgb));
                }
                   max-width: 100%;
                   height:auto;
                   font-size: 1.5rem;
                  `}
            </style>
            <footer className="containerfooter">
                <p>© 2024 David Dubuc // ADHDAV</p>
            </footer>
        </>
    );
}

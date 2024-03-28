import Head from "next/head";
import "../globals.css";
export default function Footer() {
    return (
        <>
            <style>
                {`
                .containerfooter {
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    align-items: center;
                    border: 2px solid white;
                    padding: 1% 0% 1% 0%;
                    color: rgb(var(--foreground-rgb));
                    background: linear-gradient(
                        to bottom,
                        transparent,
                        rgb(var(--background-end-rgb))
                      )
                      rgb(var(--background-start-rgb));
                }
                `}
            </style>
            <footer className="containerfooter">
                <p>© 2021 David Dubuc</p>
            </footer>
        </>
    );
}

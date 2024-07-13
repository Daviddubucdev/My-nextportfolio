import Head from "next/head";
import "../globals.css";
export default function Footer() {
    return (
        <>
            <style>
                {`

                .containerfooter {
                    position: absolute;
                    bottom: 0;
                    width: 100%;
                    height: 5rem;   
                    /* Footer height */
                    background-color: black;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    text-align: center;
                    font-size: 1rem;
                    font-weight: 600;
                    color: #333;
                    padding: 1rem;
                    border-top: 1px solid #e0e0e0;      
                }
                }
                  `}
            </style>
            <footer className="containerfooter">
                <p>© 2024 David Dubuc // ADHDAV</p>
            </footer>
        </>
    );
}

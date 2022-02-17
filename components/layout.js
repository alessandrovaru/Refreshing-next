import Head from "next/head";
import Image from "next/image";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import React, { useState, useEffect } from "react";

const name = "IN TEMPORAL";
export const siteTitle = "IN TEMPORAL";

export default function Layout({ children, home }) {
  const [clientWindowHeight, setClientWindowHeight] = useState(0);
  const handleScroll = () => {
    setClientWindowHeight(window.scrollY);
  };
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {clientWindowHeight < 1 ? (
          <>
            <nav
              className={`${styles.nav} navbar navbar-expand-lg navbar-dark bg-transparent`}
            >
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  LUCKY DICE
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav">
                    <Link href="/">
                      <a className="nav-link active" aria-current="page">
                        HOME
                      </a>
                    </Link>
                    <Link href="/guion/sinopsis">
                      <a className="nav-link">SINOPSIS</a>
                    </Link>
                    <Link href="/guion/storyline">
                      <a className="nav-link">STORYLINE</a>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </>
        ) : (
          <>
            <nav
              className={`${styles.nav} navbar navbar-expand-lg navbar-dark bg-transparent`}
            >
              <div className="container-fluid">
                <a className="navbar-brand" href="#">
                  LUCKY DICE
                </a>
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarNavAltMarkup"
                  aria-controls="navbarNavAltMarkup"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarNavAltMarkup"
                >
                  <div className="navbar-nav">
                    <Link href="/">
                      <a className="nav-link active" aria-current="page">
                        HOME
                      </a>
                    </Link>
                    <Link href="/guion/sinopsis">
                      <a className="nav-link">SINOPSIS</a>
                    </Link>
                    <Link href="/guion/storyline">
                      <a className="nav-link">STORYLINE</a>
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </>
        )}
      </header>
      <>{children}</>
    </>
  );
}

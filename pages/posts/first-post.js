import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import Layout from "../../components/layout";

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
        <script src="https://connect.facebook.net/en_US/sdk.js" />
      </Head>
      <div className="container">
        <h1 className="title">First Post</h1>
        <Image
          src="/images/003.JPG"
          alt="First Post"
          width={400}
          height={400}
        />
        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
          euismod, urna eu tempor consectetur, nisl nunc aliquet nunc, eget
          tincidunt nisl nunc euismod nunc. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia Curae; Sed euismod,
          urna eu tempor consectetur, nisl nunc aliquet nunc, eget tincidunt
          nisl nunc euismod nunc. Vestibulum ante ipsum primis in faucibus orci
          luctus et ultrices posuere cubilia Curae; Sed euismod, urna eu tempor
          consectetur, nisl nunc aliquet nunc, eget tincidunt nisl nunc euismod
          nunc.
        </p>
        <Link href="/">
          <a>Go to Home</a>
        </Link>
      </div>
      <style jsx>{`
        * {
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        .container {
          max-width: 600px;
          margin: 0 auto;
        }
        .title {
          color: #333;
          font-size: 1.5em;
          font-weight: bold;
        }
        .description {
          color: #333;
          font-size: 1.2em;
        }
      `}</style>
    </Layout>
  );
}

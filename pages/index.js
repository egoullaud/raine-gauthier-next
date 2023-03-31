import Head from "next/head";
import Overview from "./overview";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Raine Gauthier Photography</title>
        <meta name="description" content="Raine Gauthier Photography" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Overview />
      </main>
    </>
  );
}

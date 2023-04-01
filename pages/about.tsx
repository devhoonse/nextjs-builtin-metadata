import Head from "next/head";
import Link from "next/link";
import TitleChanger from "@/components/TitleChanger";

/**
 * 페이지 : /about
 * @constructor
 */
function About() {
  return (
    <>
      <Head>
        <title>About This Project</title>
      </Head>
      <div>
        About Page
      </div>
      <div>
        <Link passHref href="/">
          Back To Home
        </Link>
      </div>
      <div>
        <TitleChanger pageName="About Title Activated!!" />
      </div>
    </>
  );
}

export default About;

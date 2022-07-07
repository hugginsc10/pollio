import type { NextPage } from "next";
import Head from "next/head";
import { trpc } from "../utils/trpc";
import {prisma} from "../server/db/client"


const Home: NextPage = (props: any) => {
  // const hello = trpc.useQuery(["example.hello", { text: "from tRPC" }]);

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    <code>{props.questions}</code>
    </>
  );

};
export const getServerSideProps = async () => {
  const questions = await prisma.pollQuestion.findMany();

  return {
    props: {
      questions: JSON.stringify(questions)
    }
  }
}

export default Home;

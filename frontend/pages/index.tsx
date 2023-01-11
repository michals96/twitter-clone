import type {GetServerSideProps} from "next";
import Head from "next/head";
import {Tweet} from "../types/tweet";
import Feed from "../components/feed/Feed";
import Widgets from "../components/widgets/Widgets";
import Sidebar from "../components/sidebar/Sidebar";
import {fetchTweets} from "../utils/fetchTweets";

interface Props {
  tweets: Tweet[];
}

const Home = ({ tweets }: Props) => {
  console.log(tweets);

  return (
    <div className="lg:max-w-6xl mx-auto max-h-screen overflow-hidden">
      <Head>
        <title>Twitter 2.0</title>
      </Head>

      <main className="grid grid-cols-9 ">
        <Sidebar />
        <Feed tweets={tweets} />
        <Widgets></Widgets>
      </main>
    </div>
  );
};

export default Home;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const tweets = await fetchTweets();

  return {
    props: {
      tweets,
    },
  };
};

import { RefreshIcon } from "@heroicons/react/outline";
import React from "react";
import Tweetbox from "../tweetbox/Tweetbox";
import { Tweet } from "../../types/tweet";
import TweetComponent from "../tweet/Tweet";

interface Props {
  tweets: Tweet[];
}

function Feed({ tweets }: Props) {
  return (
    <div className="col-span-7 lg:col-span-5 border-x">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon
          className="h-8 w-8 cursor-pointer text-twitter 
            mr-5 mt-5 transition-all duration-500 ease-out hover:rotate-180 active:scale-125"
        />
      </div>
      <Tweetbox />
      <div>
        {tweets.map((tweet) => (
          <TweetComponent key={tweet.id} tweet={tweet} />
        ))}
      </div>
    </div>
  );
}

export default Feed;

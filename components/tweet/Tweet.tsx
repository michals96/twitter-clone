import React from "react";
import { Tweet } from "../../types/tweet";
import TimeAgo from "react-timeago";

interface Props {
  tweet: Tweet;
}

function Tweet({ tweet }: Props) {
  return (
    <div>
      <div>
        <img src={tweet.profileImg} alt=""></img>
        <div>
          <div className="flex items-center space-x-1">
            <p className="mr-1 font-bold">{tweet.username}</p>
            <p className="hidden text-sm text-gray-500 sm:inline">
              @{tweet.username.replace(/\s+/g, "").toLocaleLowerCase()}
            </p>
            <TimeAgo className="text-sm text-gray-500" date={tweet.createdAt} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tweet;

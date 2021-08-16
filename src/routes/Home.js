import { dbService } from "fbase";
import React, { useState } from "react";

const Home = () => {
  const [Shweet, setShweet] = useState("");
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("shweets").add({
        Shweet,
        createdAt: Date.now(),
    });
    setShweet("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setShweet(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={Shweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Seulhyitter" />
      </form>
    </div>
  );
};
export default Home;

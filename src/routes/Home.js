import { dbService } from "fbase";
import React, { useEffect, useState } from "react";
import Shyweet from "components/Shyweet";

const Home = ({ userObj }) => {
  const [Shweet, setShweet] = useState("");
  const [shweets, setShweets] = useState([]);
  useEffect(() => {
    dbService.collection("shweets").onSnapshot((snapshot) => {
      const shweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setShweets(shweetArray);
    });
  }, []);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("shweets").add({
      text: Shweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
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
      <div>
        {shweets.map((Shweet) => (
          <Shyweet
            key={Shweet.id}
            shyweetObj={Shweet}
            isOwner={Shweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;

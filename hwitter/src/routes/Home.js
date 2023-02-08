import React, { useEffect, useState } from "react";
import { addDoc, collection, onSnapshot } from "firebase/firestore";
import { dbService } from "../harrybase";
import Hweet from "components/Hweet";




const Home = ({ userObj }) => {

  const [hweet, setHweet] = useState('')
  const [hweets, setHweets] = useState([])


  useEffect( () => {
    onSnapshot(collection(dbService, "hweet"), (snapshot) => {
      const hweetArray = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }))
      setHweets(hweetArray)
    })
  }, [])

  const onSubmit = (event) => {
    event.preventDefault()
    addDoc(collection(dbService, "hweet"), {
      text: hweet,
      createdAt: Date.now(),
      creatorId: userObj.uid

    });
    setHweet("");
  }

  const onChange = (event) => {
    const {value} = event.target
    setHweet(value)

  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={hweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Hweet" />
      </form>
      <div>
        {hweets.map((hweet) => (
          <Hweet
            key={hweet.id}
            hweetObj={hweet}
            isOwner={hweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
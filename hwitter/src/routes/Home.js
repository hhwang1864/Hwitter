import React, { useEffect, useState } from "react";
import {  collection, onSnapshot } from "firebase/firestore";
import { dbService } from "../harrybase";
import Hweet from "components/Hweet";
import HweetHome from "components/HweetHome";

const Home = ({ userObj }) => {
  const [hweets, setHweets] = useState([])

  useEffect( () => {
    onSnapshot(collection(dbService, "hweet"), (snapshot) => {
      const hweetArray = snapshot.docs.map(doc => ({
        id: doc.id,
        author: doc.creatorId,
        ...doc.data()
      }))
      setHweets(hweetArray)
    })
  }, [])

  return (
    <div  className="container">
      <HweetHome
        userObj={userObj}
      />
    <div  style={{ marginTop: 30 }}>
        {hweets.map((hweet) => (
          <Hweet
            key={hweet.id}
            hweetObj={hweet}
            isOwner={hweet.creatorId === userObj.uid}
            author={hweet.author}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
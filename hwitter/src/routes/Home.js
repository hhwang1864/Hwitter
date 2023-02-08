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
        ...doc.data()
      }))
      setHweets(hweetArray)
    })
  }, [])

  return (
    <div>
      <HweetHome
        userObj={userObj}
      />
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
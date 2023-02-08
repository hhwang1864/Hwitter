import React, { useState } from "react";
import { addDoc, collection } from "firebase/firestore";
import { dbService } from "../harrybase";



const Home = () => {
  const [hweet, setHweet] = useState('')
  const onSubmit = (event) => {
    event.preventDefault()
    addDoc(collection(dbService, "hweet"), {
        name: hweet,
        state: "CA",
        country: "USA"
      });
      setHweet("")
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
    </div>
  );
}

export default Home
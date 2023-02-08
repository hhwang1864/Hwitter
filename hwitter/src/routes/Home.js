import React, { useEffect, useState } from "react";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { dbService } from "../harrybase";



const Home = () => {
  const [hweet, setHweet] = useState('')
  const [hweets, setHweets] = useState([])

  const getHweets = async () => {
    const dbHweets = await getDocs(collection(dbService, "hweet"))
    dbHweets.forEach( (doc)=> {
      const hweetObject = {
        ...doc.data(),
        id: doc.id
      }
      setHweets((prev) => [hweetObject, ...prev])
    })
  }
  useEffect( () => {
    getHweets()
  }, [])

  const onSubmit = (event) => {
    event.preventDefault()
    addDoc(collection(dbService, "hweet"), {
        hweet,
        createdAt: Date.now()
      });
      setHweet("")
  }

  const onChange = (event) => {
    const {value} = event.target
    setHweet(value)

  }
  console.log(hweets.slice(1))
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
        {hweets.map(hweet =>
          <div key={hweet.id}>
            <h4>{hweet.hweet}</h4>
          </div>
          )}
      </div>
    </div>
  );
}

export default Home
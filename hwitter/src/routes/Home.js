import { db } from "harrybase";
import React, { useState } from "react";

const Home = () => {
  const [hweet, setHweet] = useState('')
  const onSubmit = (event) => {
    event.preventDefault()
    console.log(db)


  }

  const onChange = (event) => {
    const {value} = event.target
    setHweet(value)

  }

}
  <div>
    <form action="" onSubmit={onsubmit}>
      <input type="text" placeholder="What's on your mind?" maxLength={120} />
      <input type="text" value="Hweet" />
    </form>
  </div>

export default Home
import { addDoc, collection } from "firebase/firestore";
import { getDownloadURL, ref, uploadString } from "firebase/storage";
import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { storageService, dbService } from "harrybase";

const HweetHome = ({ userObj }) => {
  const [hweet, setHweet] = useState("")
  const [attachment, setAttachment] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    let attachmentUrl = ''
    if(attachment !== ""){
      const attachmentRef = ref(storageService, `${userObj.uid}/${uuidv4()}`)
      // console.log(attachmentRef)
      await uploadString(attachmentRef, attachment, "data_url")
      attachmentUrl = await getDownloadURL(attachmentRef, attachment)
    }
    const hweetObj = {
      text: hweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
      attachmentUrl,
    }

    await addDoc(collection(dbService, "hweet"), hweetObj)
    setHweet('')
    setAttachment('')
  }

  const onChange = (event) => {
    const {value} = event.target
    setHweet(value)

  }
  const onFileChange = (event) => {
    const { files } = event.target
    const theFile = files[0]
    const reader = new FileReader()
    reader.onloadend = (finishedEvent) => {
      const { result } = finishedEvent.currentTarget
      setAttachment(result)
    }
    reader.readAsDataURL(theFile)
  }
  const onClearAttachment = () => setAttachment(null)

  return (
    <form onSubmit={onSubmit}>
    <input
      value={hweet}
      onChange={onChange}
      type="text"
      placeholder="What's on your mind?"
      maxLength={120}
    />
    <input type="file" accept="image/*" onChange={onFileChange} />
    <input type="submit" value="Hweet" />
    {attachment && (
      <div>
        <img src={attachment} width="500px" height="500px" alt="" />
        <button onClick={onClearAttachment}>Clear photo</button>
      </div>
    )}
    </form>

  )
}

export default HweetHome
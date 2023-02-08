import { dbService, storageService } from "harrybase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { deleteObject } from "firebase/storage";
import React, { useState } from "react";
import { ref } from "firebase/storage";


const Hweet = ({ hweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false)
  const [newHweet, setNewHweet] = useState(hweetObj.text)

  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this Hweet?")
    if(ok) {
      await deleteDoc(doc(dbService, "hweet", hweetObj.id))
      const storageRef = ref(storageService,  hweetObj.attachmentUrl)
      console.log(storageRef)
      await  deleteObject(ref(storageService,  hweetObj.attachmentUrl))
    }
  }

  const toggleEditing = () => {
     setEditing((prev) => !prev)
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    // console.log(hweetObj,newHweet)
    await updateDoc(doc(dbService, "hweet",hweetObj.id), {
      text: newHweet
    })
    setEditing(false)
  }

  const onChange = (event) => {
    const { value } = event.target
    setNewHweet(value)
  }

  return (

    <div>
      {
        editing ? (
          <React.Fragment>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Edit your Hweet"
              value={newHweet}
              required
              onChange={onChange}
            />
            <input type="submit" value="Update Hweet" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
          </React.Fragment>
        ):(
          <React.Fragment>
        <h4>{hweetObj.text}</h4>
          {hweetObj.attachmentUrl && (
            <img src={hweetObj.attachmentUrl} width="50px" height="50px" alt="" />
          )}
        {isOwner && (
          <React.Fragment>
            <button onClick={onDeleteClick}>Delete Hweet</button>
            <button onClick={toggleEditing}>Edit Hweet</button>
        </React.Fragment>
        )}
        </React.Fragment>
      )}

    </div>
  )
}



export default Hweet
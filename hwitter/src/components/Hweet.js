import { dbService, storageService } from "harrybase";
import { doc, deleteDoc, updateDoc } from "firebase/firestore";
import { deleteObject } from "firebase/storage";
import React, { useState } from "react";
import { ref } from "firebase/storage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faPencilAlt } from "@fortawesome/free-solid-svg-icons";


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

    <div className="hweet">
      {
        editing ? (
          <React.Fragment>
          <form onSubmit={onSubmit} className="container hweetEdit">
            <input
              type="text"
              placeholder="Edit your Hweet"
              value={newHweet}
              required
              autoFocus
              onChange={onChange}
              className="formInput"
            />
            <input type="submit" value="Update Hweet" className="formBtn" />
          </form>
          <span
            onClick={toggleEditing}
            className="formBtn cancelBtn">
            Cancel
          </span>
          </React.Fragment>
        ):(
          <React.Fragment>
            <h3>{hweetObj.author}</h3>
          <h4>{hweetObj.text}</h4>
          {hweetObj.attachmentUrl && <img src={hweetObj.attachmentUrl} alt="" />}
            {isOwner && (
              <div className="hweet__actions">
                <span onClick={onDeleteClick}>
                  <FontAwesomeIcon icon={faTrash} />
                </span>
                <span onClick={toggleEditing}>
                  <FontAwesomeIcon icon={faPencilAlt} />
                </span>
              </div>
            )}
          </React.Fragment>
            )}
    </div>
  );
};

export default Hweet
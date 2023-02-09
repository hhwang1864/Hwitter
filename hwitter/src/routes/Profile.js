import React, {  useState } from "react";
import { auth } from "harrybase";
// import { dbService } from "harrybase";
// import { collection, where, query, getDocs, orderBy } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const Profile = ({ userObj, reFreshUser }) => {
  const navigate = useNavigate()
  const [newDisplayName, setNewDisplayName] = useState(`Welcome to ${userObj.displayName}'s Profile`)

  const onLogOutClick = () => {
    auth.signOut()
    navigate("/")
  }


  // const getMyHweets = async () => {
  //   const q =
  //     query(collection(dbService, "hweet"),
  //     where("creatorId", "==", userObj.uid),
  //     orderBy("createdAt")
  //     )

  //   // console.log(q)
  //   const querySnapshot = await getDocs(q)
  //   querySnapshot.forEach((doc) => {
  //     // doc.data() is never undefined for query doc snapshots
  //     console.log(doc.id, " => ", doc.data());
  //   })
  // }

  // useEffect(() => {
  //   getMyHweets()
  // }, [])
  const onChange = (event) => {
    const { value } = event.target
    setNewDisplayName(value);
  }

  const onSubmit = async (event) => {
    event.preventDefault();
    if (userObj.displayName !== newDisplayName) {
      await updateProfile(auth.currentUser,{
       displayName: newDisplayName,
      })
      reFreshUser()
    }
    setNewDisplayName(`Welcome to ${event.target[0].value}'s profile`)
  };

  return (
    <div className="container">
      <form onSubmit={onSubmit}  className="profileForm">
        <input
          onChange={onChange}
          type="text"
          placeholder="Update Name:"
          value={newDisplayName}
          autoFocus
        />
        <input
          type="submit"
          value="Update Profile"
          className="formBtn"
          style={{
            marginTop: 10,
          }}
        />
      </form>

      <span className="formBtn cancelBtn logOut" onClick={onLogOutClick}>
        Log Out
      </span>
    </div>

  )
}

export default Profile
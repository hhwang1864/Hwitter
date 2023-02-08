import React, {  useState } from "react";
import { auth } from "harrybase";
// import { dbService } from "harrybase";
// import { collection, where, query, getDocs, orderBy } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { updateProfile } from "firebase/auth";

const Profile = ({ userObj, reFreshUser }) => {
  const navigate = useNavigate()
  const [newDisplayName, setNewDisplayName] = useState(userObj.displayName)

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
  };

  return (
    <React.Fragment>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          type="text"
          placeholder="Display name"
          value={newDisplayName}
        />
        <input type="submit" value="Update Profile" />
      </form>
      <button onClick={onLogOutClick}>Log Out</button>
    </React.Fragment>

  )
}

export default Profile
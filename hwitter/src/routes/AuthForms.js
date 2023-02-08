import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "harrybase";
import React, { useState } from "react";

const AuthForms = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [newAccount, setNewAccount] = useState(true)
  const [error, setError] = useState('')

  const onChange = (event) => {
    const { name, value} = event.target
    if (name === "email") {
    setEmail(value)
    } else if (name === "password") {
      setPassword(value)
      }
  }

  const onSubmit = async (event) => {
    event.preventDefault()
    try {
      if(newAccount) {
        // here is where we create account
        await createUserWithEmailAndPassword(
          auth, email, password
        )

      } else
      await signInWithEmailAndPassword(
        auth, email, password
      )

    } catch (error) {
      setError(error.message)
    }
  }
  const toggleAccount = () => setNewAccount (prev => !prev )

 return(
  <React.Fragment>
    <form action="" onSubmit={onSubmit}>

    <input
      name="email"
      type="text"
      placeholder="Email"
      required value={email}
      onChange={onChange}
    />
    <input
      name="password"
      type="password"
      placeholder="Password"
      required value={password}
      onChange={onChange}
    />
    <input
      type="submit"
      value={newAccount ? "Create Account": "Log in"}
    />
    {error.slice(10)}
    </form>
    <span onClick={toggleAccount}>
    {newAccount ? "Sign in" : "Create Account"}
    </span>
  </React.Fragment>
 )
}

export default AuthForms
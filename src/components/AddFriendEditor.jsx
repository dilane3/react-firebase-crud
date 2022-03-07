import React, { useState } from "react"
import style from '../styles/editor.module.css'

const AddFriendEditor = () => {
  const [newFriendName, setNewFriendName] = useState("")

  // Some handlers
  const handleChangeName = () => {
    // To do
  }

  const handleAddFriend = () => {
    // To do
  }

  return (
    <section className={style.editor}>
      <input className={style.editorInput} type="text" placeholder="Give a name here..." />

      <button className={style.editorBtnAdd}>Add</button>
    </section>
  )
}

export default AddFriendEditor
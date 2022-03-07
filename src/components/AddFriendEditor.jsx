import React, { useState } from "react"
import style from '../styles/editor.module.css'

const AddFriendEditor = () => {
  const [newFriendName, setNewFriendName] = useState("")

  // Some handlers
  const handleChangeName = (name) => {
    setNewFriendName(name)
  }

  const handleAddFriend = () => {
    // To do
  }

  return (
    <section className={style.editor}>
      <input 
        className={style.editorInput} 
        type="text" 
        placeholder="Give a name here..." 
        onChange={(e) => handleChangeName(e.target.value)}  
      />

      <button className={style.editorBtnAdd}>Add</button>
    </section>
  )
}

export default AddFriendEditor
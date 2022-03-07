import React, { useContext, useState } from "react"
import { createFriend } from "../api/friends/friend"
import { friendsContext } from "../globalState/contexts/friendContext"
import style from '../styles/editor.module.css'

const AddFriendEditor = () => {
  // Set local state
  const [newFriendName, setNewFriendName] = useState("")

  // Get global state
  const { addFriend } = useContext(friendsContext)

  // Some handlers
  const handleChangeName = (name) => {
    setNewFriendName(name)
  }

  const handleAddFriend = async () => {
    const newFriend = await createFriend(newFriendName)

    addFriend(newFriend.data())

    setNewFriendName("")
  }

  return (
    <section className={style.editor}>
      <input 
        className={style.editorInput} 
        type="text" 
        placeholder="Give a name here..." 
        onChange={(e) => handleChangeName(e.target.value)}
        value={newFriendName}  
      />

      <button 
        className={style.editorBtnAdd}
        onClick={handleAddFriend}  
      >Add</button>
    </section>
  )
}

export default AddFriendEditor
import React, { useRef, useState } from "react"
import style from '../styles/friendCard.module.css'
import { changeProfilePhoto, deleteFriend } from '../api/friends/friend'

const FriendCard = ({ data }) => {
  const { color, name, id, image } = data

  // Ref section
  const inputRef = useRef()

  const handleDeleteFriend = async () => {
    await deleteFriend(id)
  }

  const handleUpload = (e) => {
    const profilImage = e.target.files[0]

    changeProfilePhoto(profilImage, id)
  }

  const handleOpenFileStorage = () => {
    inputRef.current.click()
  }

  return (
    <article className={style.friendCard}>
      {
        image ? (
          <img className={style.friendCardImage} src={image} alt="profil" onClick={handleOpenFileStorage}/>
        ):(
          <span style={{backgroundColor: color}} className={style.friendCardImage} onClick={handleOpenFileStorage}>{ name[0].toUpperCase() }</span>
        )
      }
      <input 
        ref={inputRef} 
        type="file" 
        hidden 
        onChange={handleUpload}  
        accept="image/*"
      />
      <span className={style.friendCardName}>{ name[0].toUpperCase() + name.substr(1) }</span>

      <div>
        <button 
          className={style.friendCardBtnDelete}
          onClick={handleDeleteFriend}
        >Delete</button>
      </div>
    </article>
  )
}

export default FriendCard
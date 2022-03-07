import React from "react"
import style from '../styles/friendCard.module.css'

const FriendCard = () => {
  return (
    <article className={style.friendCard}>
      <span style={{backgroundColor: "green"}} className={style.friendCardImage}>D</span>
      <span className={style.friendCardName}>Dilane</span>

      <div>
        <button className={style.friendCardBtnDelete}>Delete</button>
      </div>
    </article>
  )
}

export default FriendCard
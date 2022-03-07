import React from "react"
import style from '../styles/friendCard.module.css'

const FriendCard = ({ data }) => {
  const { color, name } = data

  return (
    <article className={style.friendCard}>
      <span style={{backgroundColor: color}} className={style.friendCardImage}>D</span>
      <span className={style.friendCardName}>{ name }</span>

      <div>
        <button className={style.friendCardBtnDelete}>Delete</button>
      </div>
    </article>
  )
}

export default FriendCard
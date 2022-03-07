import React, { useContext } from "react"
import style from '../styles/friendCard.module.css'
import { deleteFriend } from '../api/friends/friend'
import { friendsContext } from '../globalState/contexts/friendContext'

const FriendCard = ({ data }) => {
  const { color, name, id } = data

  // Get global state
  const { deleteFriend: globalyDeleteFriend } = useContext(friendsContext)

  const handleDeleteFriend = async () => {
    await deleteFriend(id)

    globalyDeleteFriend(id)
  }

  return (
    <article className={style.friendCard}>
      <span style={{backgroundColor: color}} className={style.friendCardImage}>{ name[0].toUpperCase() }</span>
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
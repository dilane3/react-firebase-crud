import FriendCard from "./FriendCard"
import style from '../styles/base.module.css'
import { useContext, useEffect } from "react"
import { friendsContext } from "../globalState/contexts/friendContext"
import { getFriends } from "../api/friends/friend"

const FriendsList = () => {
  const { friends, addFriends } = useContext(friendsContext)

  useEffect(() => {
    fetchFriendsData()
  }, [])

  // Get friends from the server
  const fetchFriendsData = async () => {
    await getFriends(addFriends)
  }

  return (
    <section className={style.items}>
      {
        friends.map(friend => {
          return <FriendCard key={friend.id} data={friend} />
        })
      }
    </section>
  )
}

export default FriendsList
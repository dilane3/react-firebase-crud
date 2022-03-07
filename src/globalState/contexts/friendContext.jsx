import React, { useState } from 'react'

const friendsContext = React.createContext({
  friends: [],
  addFriends: (data) => {},
  addFriend: (friend) => {},
  deleteFriend: (id) => {}
})

const FriendProvider = ({ children }) => {
  const [friends, setFriends] = useState([])

  // Some handlers
  const handleAddFriends = (data) => {
    console.log(data)
    setFriends(data)
  }

  const addFriend = (friend) => {
    const friendsClone = [...friends]

    friendsClone.push(friend)

    setFriends(friendsClone)
  }

  const deleteFriend = (id) => {
    const index = friends.findIndex(friend => friend.id === id)

    if (index > -1) {
      const friendsClone = [...friends]

      friendsClone.splice(index, 1)

      setFriends(friendsClone)
    }
  }

  const friendContextValue = {
    friends,
    addFriends: (data) => { handleAddFriends(data) },
    addFriend,
    deleteFriend
  }

  return (
    <friendsContext.Provider value={friendContextValue}>
      { children }
    </friendsContext.Provider>
  )
}

export { friendsContext, FriendProvider }
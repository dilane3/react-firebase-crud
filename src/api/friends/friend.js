import { db } from '../../firebase'
import { addDoc, collection, getDocs, getDoc, doc, deleteDoc } from 'firebase/firestore'

const friendsCollectionRef = collection(db, "friends")
const COLORS = [
  "#3e4bff",
  "#e00206",
  "green",
  "orange",
  "pink",
  "violet",
  "#828282",
  "brown",
  "lightgreen",
  "skyblue"
]

// Operations with firebase

const getFriends = async () => {
  const data = await getDocs(friendsCollectionRef)

  const friends = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))

  return friends
}

const createFriend = async (name) => {
  if (name) {
    const color = COLORS[Math.floor(Math.random() * COLORS.length)]

    const newFriend = await addDoc(friendsCollectionRef, { name, color })

    const friendDoc = doc(db, "friends", newFriend.id)

    return (
      await getDoc(friendDoc)
    ) 
  }
}

const deleteFriend = async (id) => {
  if (id) {
    const friendDoc = doc(db, "friends", id)

    await deleteDoc(friendDoc)
  }
}

export {
  getFriends,
  createFriend,
  deleteFriend
}
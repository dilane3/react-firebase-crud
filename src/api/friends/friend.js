import { db } from '../../firebase'
import { addDoc, collection, getDoc, doc, deleteDoc, onSnapshot, query } from 'firebase/firestore'

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

const getFriends = async (addFriends) => {
  onSnapshot(query(friendsCollectionRef), (snapshot) => {
    addFriends(snapshot.docs.map(doc => ({...doc.data(), id: doc.id})))
  })
}

const createFriend = async (name) => {
  if (name) {
    const color = COLORS[Math.floor(Math.random() * COLORS.length)]

    await addDoc(friendsCollectionRef, { name, color })
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
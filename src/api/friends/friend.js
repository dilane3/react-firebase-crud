import { db } from '../../firebase'
import { collection, getDocs } from 'firebase/firestore'

// Operations with firebase

const getFriends = async () => {
  const friendsCollectionRef = collection(db, "friends")

  const data = await getDocs(friendsCollectionRef)

  const friends = data.docs.map(doc => ({ ...doc.data(), id: doc.id }))

  return friends
}

export {
  getFriends
}
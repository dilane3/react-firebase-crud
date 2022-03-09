import { db, storage } from '../../firebase'
import { addDoc, collection, doc, deleteDoc, onSnapshot, query, updateDoc } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytes, uploadBytesResumable } from 'firebase/storage'

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

    await addDoc(friendsCollectionRef, { name, color, image: "" })
  }
}

const deleteFriend = async (id) => {
  if (id) {
    const friendDoc = doc(db, "friends", id)

    await deleteDoc(friendDoc)
  }
}

const changeProfilePhoto = (file, id) => {
  const filename = Date.now() + file.name

  const storageRef = ref(storage, `images/${filename}`)

  const uploadTask = uploadBytesResumable(storageRef, file);

  uploadTask.on('state_changed', 
    (snapshot) => {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      console.log('Upload is ' + progress + '% done');
    }, 
    (error) => {
      console.error(error)
    }, 
    () => {
      getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
        const friendDoc = doc(db, "friends", id)

        await updateDoc(friendDoc, { image: downloadURL })
      });
    }
  );
}

export {
  getFriends,
  createFriend,
  deleteFriend,
  changeProfilePhoto
}
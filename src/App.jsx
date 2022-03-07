import React from "react";
import AddFriendEditor from "./components/AddFriendEditor";
import FriendCard from "./components/FriendCard";
import style from './styles/base.module.css'
import { FriendProvider } from './globalState/contexts/friendContext'
import FriendsList from "./components/FriendsList";

function App() {

  return (
    <FriendProvider>
      <section className={style.container}>
        <div className={style.card}>
          <header className={style.cardHeader}>
            <span>ADD FRIEND APP</span>
          </header>

          <AddFriendEditor />

          <FriendsList />
        </div>
      </section>
    </FriendProvider>
  );
}

export default App;

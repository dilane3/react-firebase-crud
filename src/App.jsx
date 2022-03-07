import React from "react";
import AddFriendEditor from "./components/AddFriendEditor";
import FriendCard from "./components/FriendCard";
import style from './styles/base.module.css'

function App() {
  return (
    <section className={style.container}>
      <div className={style.card}>
        <header className={style.cardHeader}>
          <span>ADD FRIEND APP</span>
        </header>

        <AddFriendEditor />

        <section className={style.items}>
          <FriendCard />
        </section>
      </div>
    </section>
  );
}

export default App;

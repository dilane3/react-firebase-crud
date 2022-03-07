import React from "react";
import AddFriendEditor from "./components/AddFriendEditor";
import style from './styles/base.module.css'

function App() {
  return (
    <section className={style.container}>
      <div className={style.card}>
        <header className={style.cardHeader}>
          <span>ADD FRIEND APP</span>
        </header>

        <AddFriendEditor />
      </div>
    </section>
  );
}

export default App;

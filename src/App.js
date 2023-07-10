import { useState } from "react";
import FriendList from "./friendList.js";
import SplitForm from "./splitForm.js";

const initialFriends = [
  {
    id: 118836,
    name: "Tornike",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -5,
  },
  {
    id: 933372,
    name: "Giorgi",
    image: "https://i.pravatar.cc/48?u=933373",
    balance: 35,
  },
  {
    id: 499476,
    name: "Levani",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  const [add, setAdd] = useState(false);
  const [del, setDel] = useState(false);
  const [initial, setInitial] = useState(initialFriends);
  const [curFriend, setCurFriend] = useState(null);

  function handlerSelect(friend) {
    setCurFriend(curFriend?.id === friend.id ? null : friend);
    setAdd(false);
  }

  function addFriends(friend) {
    setInitial((initial) => [...initial, friend]);
    setAdd(false);
  }

  function handlerUpdate(value) {
    setInitial(
      initial.map((friend) =>
        friend.id === curFriend.id ? { ...friend, balance: value } : friend
      )
    );
    setAdd(false);
  }

  function removeFriend(friend) {
    setInitial(initial.filter((f) => f.id !== friend.id));
  }

  return (
    <div className="app">
      <FriendList
        addFriends={addFriends}
        initial={initial}
        add={add}
        setAdd={setAdd}
        curFriend={curFriend}
        setCurFriend={setCurFriend}
        handlerSelect={handlerSelect}
        removeFriend={removeFriend}
        del={del}
        setDel={setDel}
      />
      {curFriend && (
        <SplitForm curFriend={curFriend} handlerUpdate={handlerUpdate} />
      )}
    </div>
  );
}

export default App;

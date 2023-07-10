import Friend from "./friend.js";
import AddFormFriend from "./addFormFriend.js";

export default function FriendList({
  add,
  setAdd,
  initial,
  addFriends,
  curFriend,
  handlerSelect,
  setCurFriend,
  removeFriend,
}) {
  return (
    <div className="sidebar">
      <ul>
        {initial.map((friend) => (
          <Friend
            curFriend={curFriend}
            friend={friend}
            key={friend.id}
            handlerSelect={handlerSelect}
            setCurFriend={setCurFriend}
            removeFriend={removeFriend}
          />
        ))}
      </ul>

      <div>
        <AddFormFriend addFriends={addFriends} add={add} setAdd={setAdd} />
      </div>

      <button
        onClick={() => {
          setAdd(!add);
          setCurFriend(null);
        }}
        className="button"
      >
        {add ? "Close" : "Add Friend"}
      </button>
    </div>
  );
}

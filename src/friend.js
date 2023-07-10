export default function Friend({
  friend,
  curFriend,
  handlerSelect,
  removeFriend,
}) {
  function delUsers(e) {
    e.preventDefault();
    removeFriend(friend);
  }

  function current(friend) {
    console.log(friend);
    handlerSelect(friend);
  }
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p
        className={
          friend.balance > 0
            ? "green"
            : friend.balance < 0
            ? "red"
            : friend.balance === 0
            ? ""
            : ""
        }
      >
        {friend.balance > 0
          ? `${friend.name} owes you ${friend.balance}$`
          : friend.balance < 0
          ? `You owe ${friend.name} ${friend.balance}$`
          : friend.balance === 0
          ? `You And ${friend.name} Are Even`
          : ""}
      </p>
      <button onClick={(e) => current(friend)} className="button">
        {curFriend?.id === friend.id ? "Close" : "Select"}
      </button>
      <button className="button" onClick={(e) => delUsers(e)}>
        ❌
      </button>
    </li>
  );
}

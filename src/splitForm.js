import { useState } from "react";

export default function SplitForm({ curFriend, handlerUpdate }) {
  const [billVal, setBillVal] = useState("");
  const [expence, setExpence] = useState("");
  const friendExp = billVal - expence;
  const [whoIsPaying, setWhoIsPaying] = useState("you");

  function update(value) {
    handlerUpdate(value);
  }

  return (
    <div>
      <form className="form-split-bill ">
        <h2>Split The Bill With {curFriend.name}</h2>
        <label>💵Bill Value</label>
        <input
          value={billVal}
          onChange={(e) => setBillVal(+e.target.value)}
          type="text"
        />

        <label>🤑Your expence</label>
        <input
          value={expence}
          onChange={(e) =>
            setExpence(+e.target.value > billVal ? "" : +e.target.value)
          }
          type="text"
        />

        <label>👨{curFriend.name}'s Expence</label>
        <input
          value={friendExp}
          onChange={(e) => +e.target.value}
          type="text"
          disabled
        />

        <label>🙎‍♀️Who is Paying The Bill</label>
        <select
          value={whoIsPaying}
          onChange={(e) => setWhoIsPaying(e.target.value)}
        >
          <option value="you">🤑You</option>
          <option value="friend">{curFriend.name}</option>
        </select>

        <button
          onClick={(e) => {
            e.preventDefault();
            update(whoIsPaying === "you" ? friendExp : -expence);
          }}
          className="button"
        >
          Split Bill
        </button>
      </form>
    </div>
  );
}
